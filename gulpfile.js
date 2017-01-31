// be sure to run this to install plugins:
// npm install -save--dev gulp gulp-pug gulp-sass gulp-load-plugins
// https://travismaynard.com/writing/getting-started-with-gulp

var gulp = require('gulp'),
  pug = require('gulp-pug'),
  scss = require('gulp-sass'),
  $ = require('gulp-load-plugins')();

// Compile pug to HTML using gulp-pug
gulp.task('html', function () {
  gulp.src(['./*.pug'])
    .pipe(pug({
      pretty: true,
      doctype: 'html'
    }))
    .pipe(gulp.dest(''));
});

// Sass Compiler
gulp.task('scss', function () {
  return gulp.src('scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css/'));
});

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('*.pug', ['html']);
  gulp.watch('scss/*.scss', ['scss']);

});

// default task
gulp.task('default', ['html', 'scss', 'watch']);