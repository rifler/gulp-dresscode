var gutil = require('gulp-util');
var through = require('through2');
var compile = require('dresscodejs/lib/DressCode');

var pluginName = 'gulp-dresscode';

module.exports = function (opts) {
    opts = opts || {};

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError(pluginName, 'Streaming not supported'));
            return;
        }

        compile(file.path, null, opts.debug)
            .then(function (text) {
                file.contents = new Buffer(text);
                cb(null, file);
            })
            .catch(function (err) {
                cb(new gutil.PluginError(pluginName, err, {
                    fileName: file.path,
                    showProperties: false
                }));
            });
    });
};
