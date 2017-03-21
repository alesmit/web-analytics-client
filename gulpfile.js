var gulp = require('gulp');
var shell = require('gulp-shell');
var tslint = require('gulp-tslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

var typescript = require('gulp-typescript');
var tsConfig = typescript.createProject('tsconfig.json');

var paths = {
  tscripts: {
    src: [
      'app/src/config.ts',
      'app/src/analytics.ts',
      'app/src/browser.ts',
      'app/src/user-event.ts',
      'app/src/event-type.ts',
      'app/src/utils.ts',
      'app/src/pageview.ts',
      'app/src/index.ts',
      'app/src/property-alias.decorator.ts'
    ],
    dest: 'app/build'
  }
};

gulp.task('default', ['lint', 'build']);

// ** Compilation ** //

gulp.task('build', ['compile:typescript']);
gulp.task('compile:typescript', function () {
  return gulp
    .src(paths.tscripts.src)
    .pipe(tsConfig())
    .pipe(concat('analytics.js'))
    .pipe(wrap('(function(){ <%= contents %> })(window);', {}, { parse: false }))
    .pipe(uglify({mangle: true}))
    .pipe(gulp.dest(paths.tscripts.dest));
});

// ** Linting ** //

gulp.task('lint', ['lint:default']);
gulp.task('lint:default', function () {
  return gulp.src(paths.tscripts.src)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      emitError: false
    }));
});
