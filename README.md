# gulp-dresscode
> gulp plugin for DressCode bundler

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

See the Jossy [options](https://github.com/Kolyaj/Jossy#Использование-сборщика-из-nodejs)
