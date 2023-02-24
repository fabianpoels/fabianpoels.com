import gulp from 'gulp'
import less from 'gulp-less'
import cleanCSS from 'gulp-clean-css'
import pug from 'gulp-pug'
import { deleteAsync } from 'del'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'

const paths = {
  src: 'src/**/*',
  pages: {
    src: 'src/*.pug',
    dist: 'production',
  },
  assets: {
    src: 'src/assets/**/*.*',
    dist: 'production/assets',
  },
  stylesheets: {
    src: 'src/css/*.*',
    dist: 'production/css',
  },
  javascript: {
    src: 'src/js/*.js',
    dist: 'production/js',
  },
  images: {
    src: 'src/images/**/*.jpg',
    dist: 'production/images',
  },
  sitemap: {
    src: 'sitemap/sitemap.xml',
    dist: 'production/sitemap',
  },
  html_pages: {
    src: 'src/*.html',
    dist: 'production',
  },
}

export const clean = () => deleteAsync(['production'])

export function assets() {
  return gulp.src(paths.assets.src).pipe(gulp.dest(paths.assets.dist))
}

export function sitemap() {
  return gulp.src(paths.sitemap.src).pipe(gulp.dest(paths.sitemap.dist))
}

export function styles() {
  return gulp.src(paths.stylesheets.src).pipe(less()).pipe(cleanCSS()).pipe(gulp.dest(paths.stylesheets.dist))
}

export function scripts() {
  return gulp.src(paths.javascript.src).pipe(uglify()).pipe(gulp.dest(paths.javascript.dist))
}

export function pages() {
  return gulp
    .src(paths.pages.src)
    .pipe(
      pug({
        doctype: 'html',
      })
    )
    .pipe(gulp.dest(paths.pages.dist))
}

export function html_pages() {
  return gulp.src(paths.html_pages.src).pipe(gulp.dest(paths.html_pages.dist))
}

export function images() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dist))
}

export function watch() {
  gulp.watch(paths.src, build)
}

const build = gulp.series(clean, gulp.parallel(assets, sitemap, styles, scripts, pages, html_pages, images))

export default build
