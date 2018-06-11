const gulp = require('gulp');
const webserver = require('gulp-webserver');
const uglify = require('gulp-uglify');
const minifyHtml = require('gulp-minify-html');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const babel = require('gulp-babel');
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const imageMin = require('gulp-imagemin');
const watch = require('gulp-watch');
const rename = require('gulp-rename');
const pump = require('pump');

const src = 'public/src';
const dist = 'public/dist';

const paths = {
  js: src + '/js/*.js',
  scss: src + '/sass/*.scss',
  html: src + '/**/*.html',
  cssmin: dist + '/css/*.css'
}

//js
gulp.task('babel', function () {
  gulp.src(paths.js)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest(dist + '/js'))
});

gulp.task('combine-js', function () {
  return gulp.src([dist + '/js/*.js', '!' + dist + '/js/script.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest(dist + '/js'));
});

gulp.task('compress-js', function (cb) {
  pump([
      gulp.src(dist + '/js/script.js'),
      uglify({
        mangle: true,
      }),
      rename('script.min.js'),
      gulp.dest(dist + '/min')
    ],
    cb
  )
});

// css
gulp.task('sass', function () {
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(dist + '/css'))
});

gulp.task('uglifyCss', function () {
  gulp.src(dist + '/css/*.css')
    .pipe(uglifyCss())
    .pipe(rename(function(path){
      // path.dirname+='/cica'; //폴더만들고 그안에 넣음
      path.basename+='.min';
      // path.extname ='.md' // 확장자바꿈
    }))
    .pipe(gulp.dest(dist + '/min'))
});

//html
gulp.task('minifyHtml', function () {
  gulp.src(paths.html)
    .pipe(minifyHtml())
    .pipe(gulp.dest(dist + '/'))
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['js:combine']);
  gulp.watch(paths.scss, ['scss:compile']);
});


gulp.task('default', ['babel', 'combine-js', 'compress-js', 'sass', 'uglifyCss', 'minifyHtml']);