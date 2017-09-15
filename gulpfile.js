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

//pug to dist tasks
gulp.task('dist:html', function() {
  return gulp.src('src/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('dist:assets', function(){
  return gulp.src('src/assets/**/*.+(png|svg)')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('dist:photos', function(){
  return gulp.src('src/photos/*')
    .pipe(gulp.dest('dist/photos'));;
});

gulp.task('dist:css', function(){
  return gulp.src('src/css/*')
    .pipe(gulp.dest('dist/css'));;
});

gulp.task('dist:js', function(){
  return gulp.src('src/js/*')
    .pipe(gulp.dest('dist/js'));;
});

gulp.task('dist:clean', function(){
  return del.sync('dist');
});

gulp.task('dist', function(callback){
  runSequence('dist:clean', ['dist:html', 'dist:assets', 'dist:photos', 'dist:css', 'dist:js'], callback);
});

//dist to production tasks

gulp.task('optimize', function(){
  return gulp.src('dist/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('production'));
});

gulp.task('production:analyticsJs', function(){
  return gulp.src('dist/js/googleAnalytics.js')
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('production/js'));
})

gulp.task('photos', function(){
  return gulp.src('dist/photos/*')
    .pipe(gulp.dest('production/photos'));;
});

gulp.task('assets', function(){
  return gulp.src('dist/assets/**/*.+(png|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('production/assets'));
});

gulp.task('production:clean', function(){
  return del.sync('production');
});

gulp.task('production', function(callback){
  runSequence('production:clean', ['optimize', 'production:analyticsJs','photos', 'assets'], callback);
});
