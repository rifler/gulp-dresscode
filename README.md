# gulp-dresscode
> gulp plugin for [DressCode bundler](https://github.com/Kolyaj/DressCodeJS)

*Issues with the output should be reported on the DressCode [issue tracker](https://github.com/Kolyaj/DressCodeJS/issues).*

## Install

```
$ npm install --save gulp-dresscode
```

## Usage
```js
const gulp = require('gulp');
const dresscode = require('gulp-dresscode');

gulp.task('build', () => {
    return gulp.src('./sources/*.js')
        .pipe(dresscode())
        .pipe(gulp.dest('./public/js'));
});
```

## API

### dresscode([options])

#### options

See the DressCode [options](https://github.com/Kolyaj/DressCodeJS)

##### options.debug
