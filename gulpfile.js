'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-clean-css'),
    wait = require('gulp-wait'),
    include = require('gulp-include'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify');

var path = {
    build: { // куда складывать
        html: 'build/',
        js: 'build/js/',
        images: 'build/images/',
        css: 'build/css/'
    },
    src: { // откуда брать
        html: 'assets/pages/*.jade',
        js: 'assets/import.js',
        jsLibs: 'assets/libs/js/*.js',
        images: 'assets/libs/images/*.*',
        style: 'assets/import.scss',
        styleLibs: 'assets/libs/css/*.css'
    },
    watch: { // за чем наблюдать
        html: 'assets/**/*.jade',
        images: 'assets/libs/images/*.*',
        //js: ['assets/**/*.js', 'assets/default.js'],
        jsLibs: 'assets/libs/js/*.js',
        style: 'assets/**/*.scss',
        styleLibs: 'assets/**/*.scss'
    },
    clean: './assets'
};


/* собрать jade в html */
gulp.task('html:build', function () {
  return gulp.src(path.src.html)
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest(path.build.html))
});

/* блоки котировок для ajax */

gulp.task('quotesBlock:build', function () {
  return gulp.src('assets/quotes-info/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('build/server/quotes-info/'))
});


/* собрать скрипты */
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(include())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js))
});
// библиотеки
gulp.task('jsLibs:build', function () {
    gulp.src(path.src.jsLibs)
        .pipe(include())
        .pipe(uglify())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(path.build.js))
});

/* собрать scss в css */
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(wait(200))
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.build.css))
});

// библиотеки

gulp.task('styleLibs:build', function () {
    gulp.src(path.src.styleLibs)
        .pipe(wait(200))
        .pipe(cssmin())
        .pipe(concat('libs.css'))
        .pipe(gulp.dest(path.build.css))
});


/* собрать scss в css */
gulp.task('images:build', function () {
    gulp.src(path.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.images))
});

/* собрать всё */
gulp.task('build', [
    'html:build',
    'quotesBlock:build',
    'js:build',
    'jsLibs:build',
    'style:build',
    'styleLibs:build',
    'images:build'
]);

/* следить за изменениями */
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch(['assets/quotes-info/*.jade'], function(event, cb) {
        gulp.start('quotesBlock:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.styleLibs], function(event, cb) {
        gulp.start('styleLibs:build');
    });
    watch(['assets/**/*.js', 'assets/default.js'], function(event, cb) {
        gulp.start('js:build');
    });
    watch(path.watch.jsLibs, function(event, cb) {
        gulp.start('jsLibs:build');
    });
    watch([path.watch.images], function(event, cb) {
        gulp.start('images:build');
    });
});

gulp.task('default', ['build', 'watch']);