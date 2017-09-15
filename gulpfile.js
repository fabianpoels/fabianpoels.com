var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var pug = require('gulp-pug');

gulp.task('optimize', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('analyticsJs', function(){
  return gulp.src('src/js/googleAnalytics.js')
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist/js'));
})

gulp.task('photos', function(){
  return gulp.src('src/photos/*')
    .pipe(gulp.dest('dist/photos'));;
});

gulp.task('assets', function(){
  return gulp.src('src/assets/**/*.+(png|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('clean:dist', function(){
  return del.sync('dist');
});

gulp.task('buildHTML', function buildHTML() {
  return gulp.src('*.pug')
    .pipe(pug({})
    .pipe(gulp.dest('dist'))
  );
});

gulp.task('pugtest', function() {
  return gulp.src('src/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('pugtest'));
});

gulp.task('default', function(callback){
  runSequence('clean:dist', ['optimize', 'analyticsJs','photos', 'assets'], callback);
})
