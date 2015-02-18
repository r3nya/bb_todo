var gulp         = require('gulp'),
    jade         = require('gulp-jade'),
    stylus       = require('gulp-stylus'),
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    csso         = require('gulp-csso');

gulp.task('templates', function () {
    gulp.src('./src/*.jade')
        .pipe(jade({
            locals: {}
        }))
        .pipe(gulp.dest('./public/'));
});

gulp.task('style', function () {
    gulp.src('./src/*.styl')
        .pipe(stylus())
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function () {
    gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/*.jade',      ['templates']);
    gulp.watch('./src/*.styl',      ['style']);
    gulp.watch('./src/*.js',        ['js']);
});

gulp.task('build', ['templates', 'style', 'js']);
gulp.task('default', ['build', 'watch']);