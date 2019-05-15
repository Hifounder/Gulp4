"use strict";

// 加載套件
const gulp = require('gulp')
// CSS 壓縮
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
// JS 轉譯
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// Live 同步
const browsersync = require("browser-sync").create()

// scss
function style() {
    return gulp
        .src('./asset/scss/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer({browsers: ['last 5 version']}), cssnano()]))
        .pipe(gulp.dest('./asset/css/'))
        .pipe(browsersync.stream())
}

// ES6
function minifyJS() {
    return gulp
        .src('./asset/js/original/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./asset/js/minify/'));
}

// Live 同步
function browserSync() {

    browsersync.init({
        server: {
            baseDir: "."
        }
    });

    gulp.watch('./asset/scss/*.scss', style);
    gulp.watch('./asset/js/original/*.js', minifyJS).on('change', browsersync.reload);
    gulp.watch('*.html').on('change', browsersync.reload)
}

// 輸出的功能
exports.watch = browserSync;
exports.style = style;
exports.minifyJS = minifyJS;