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
        images: 'assets/libs/images/*.*',
        style: ['assets/libs/css/*.css', 'assets/import.scss']
    },
    watch: { // за чем наблюдать
        html: 'assets/**/*.jade',
        images: 'assets/libs/images/*.*',
        //js: ['assets/**/*.js', 'assets/default.js'],
        style: 'assets/**/*.scss'
    },
    clean: './assets'
};

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: 'assets/**/*.scss'
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

/* собрать скрипты */
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(include())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js))
});

/* собрать scss в css */
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(wait(200))
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(concat('main.css'))
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
    'js:build',
    'style:build',
    'images:build'
]);

/* следить за изменениями */
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch(['assets/**/*.js', 'assets/default.js'], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.images], function(event, cb) {
        gulp.start('images:build');
    });
});

gulp.task('default', ['build', 'watch']);