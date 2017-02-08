'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const del = require('del');
const browserify = require('browserify');
const babel = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const bust = require('gulp-buster');
const watchify = require('watchify');

const fractal = require('./fractal.js'); // import the Fractal instance configured in the fractal.js file
const logger = fractal.cli.console; // make use of Fractal's console object for logging

/*
 * Fractal
 */




gulp.task('fractal:start', function(){
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success('Fractal server is now running at ${server.urls.sync.local}');
  });
});

gulp.task('fractal:build', function(){
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update('Exported ${completed} of ${total} items', 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});

gulp.task('fractal:debug', function(){
  return fractal.load().then(() => {
    fractal.docs.flatten().each(page => {
      fractal.cli.console.dump(page.toJSON());
    });
  });
});

/*
 * Styles
 */

gulp.task('css:process', function() {
  return gulp.src('assets/sass/build.scss')
  .pipe(sassGlob())
  .pipe(sass())
  .on('error', err => console.log(err.message))
  .pipe(gulp.dest('build/assets/css'))
  // .pipe(bust('cachebust.json'))
  // .pipe(gulp.dest('.'));
});

gulp.task('css:clean', function(){
  return del(['public/assets/css']);
});

gulp.task('css:watch', function(){
  gulp.watch([
    'assets/sass/**/*.scss',
    'components/**/*.scss'
  ], gulp.series('css')).on('error', sass.logError);
});

gulp.task('css', gulp.series('css:clean', 'css:process'));


/*
 * JS
 */

// gulp.task('js:compile', (done) => compileJS(false, done));
// gulp.task('js:watch', (done) => compileJS(true, done));
//
// gulp.task('js:clean', function() {
//   return del(['public/assets/js']);
// });
//
// gulp.task('js', gulp.series('js:clean', 'js:compile'));



/*
 * Combos
 */

gulp.task('default', gulp.parallel('css'));
gulp.task('watch', gulp.parallel('css:watch'));

gulp.task('dev', gulp.series('default', 'fractal:start', 'watch'));
gulp.task('build', gulp.series('default', 'fractal:build'));
