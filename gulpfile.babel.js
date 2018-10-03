import gulp from 'gulp'
import less from 'gulp-less'
import cleanCSS from 'gulp-clean-css'
import pug from 'gulp-pug'
import del from 'del'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'

const paths = {
  pages: {
    src: 'src/*.pug',
    dist: 'production'
  },
  assets: {
    src: 'src/assets/**/*.*',
    dist: 'production/assets'
  },
  stylesheets: {
    src: 'src/css/*.*',
    dist: 'production/css'
  },
  javascript: {
    src: 'src/js/*.js',
    dist: 'production/js'
  }
}

export const clean = () => del([ 'production' ])

export function assets() {
  return gulp.src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dist))
}

export function styles() {
  return gulp.src(paths.stylesheets.src)
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.stylesheets.dist))
}

export function scripts() {
  return gulp.src(paths.javascript.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.javascript.dist))
}

export function pages() {
  return gulp.src(paths.pages.src)
    .pipe(pug({
      doctype: 'html'
    }))
    .pipe(gulp.dest(paths.pages.dist))
}

export function watch() {
  gulp.watch(paths.pages.src, pages)
  gulp.watch(paths.stylesheets.src, styles)
}

const build = gulp.series(clean, gulp.parallel(assets, styles, scripts, pages))

export default build
