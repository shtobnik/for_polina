'use strict';

const gulp         = require('gulp');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');
const sass         = require('gulp-sass');
const csso         = require('gulp-csso');
const changed      = require('gulp-changed');
const watch        = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const refresh      = require('gulp-refresh');
    

gulp.task('start', function () {
	console.log('hello');
	return gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('public/site/js'));
});

gulp.task('styles', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(changed('public/site/css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(csso({
			sourceMap: true
		}))
		.pipe(gulp.dest('public/site/css'))
});

gulp.task('scripts', function () {
	return gulp.src(['app/js/modules/angular.js', 'app/js/modules/angular-route.js', 'app/js/**/*.js'])
		.pipe(changed('public/site/js'))
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('public/site/js'))
});

gulp.task('watch', function() {
	refresh.listen();
	gulp.watch(['app/scss/**/*.scss', 'app/js/**/*.js'], ['styles', 'scripts']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
