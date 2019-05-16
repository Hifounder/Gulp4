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
// Html 模板
const twig = require('gulp-twig');
// 壓縮圖片
const imagemin = require('gulp-imagemin');
// Live 同步
const browsersync = require("browser-sync").create()

// scss
function style() {
    return gulp
        .src('./asset/scss/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer({ browsers: ['last 5 version'] }), cssnano()]))
        .pipe(gulp.dest('./asset/css/'))
        .pipe(browsersync.stream())
}

// ES6
function minifyJS() {
    return gulp
        .src('./asset/js/original/*.js', '!./asset/js/plugin/*') // 排除套件JS !./asset/js/plugin/*
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('all.js')) // 合併成一包
        .pipe(gulp.dest('./asset/js/minify/'));
}

// twig
function temp() {
    'use strict';
    return gulp
        .src('./templates/index.twig')
        .pipe(twig())
        .pipe(gulp.dest('.'));
};

// 壓縮圖片
function minifyImages() {
    return gulp
        .src('./asset/images/original/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./asset/images/minify/'));
}

// Live 同步
function browserSync() {

    browsersync.init({
        server: {
            baseDir: "."
        }
    });

    gulp.watch('./asset/scss/*.scss', style);
    gulp.watch('./templates/*', temp).on('change', browsersync.reload);
    gulp.watch('./asset/js/original/*.js', minifyJS).on('change', browsersync.reload);
    gulp.watch('*.html').on('change', browsersync.reload)
}

// 輸出的功能
exports.watch = browserSync;
exports.style = style;
exports.minifyJS = minifyJS;
exports.minifyImages = minifyImages
exports.temp = temp