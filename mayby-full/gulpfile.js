var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var uncss       = require('gulp-uncss');  
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch('./app/img/*', ['compress']);
    gulp.watch("./app/index.jade", ['jade']);
    gulp.watch("./app/scss/*.scss", ['concat']);
    gulp.watch("./app/scss/all.scss", ['sass']);
    gulp.watch("./dist/index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("app/scss/all.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(uncss({
            html: ['./dist/index.html']
        }))
        .pipe(csso())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('concat', function() {
  return gulp.src(['./app/scss/normalize.scss', './app/scss/fonts.scss', './app/scss/style.scss'])
    .pipe(concat('all.scss'))
    .pipe(gulp.dest('./app/scss'));
});

gulp.task('default', ['serve']);


/*gulp.task('gulp-uncss', function () {
    return gulp.src('./dist/style.css')
        .pipe(uncss({
            html: ['./dist/header.html']
        }))
        .pipe(gulp.dest('./out'));
});*/

gulp.task('jade', function() {
    return gulp.src('./app/index.jade')
        .pipe(jade({
            pretty : '\t'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compress', function() {
  gulp.src('./app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'));
});