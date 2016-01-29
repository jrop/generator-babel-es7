'use strict'

const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const gulp = require('gulp')
const istanbul = require('gulp-istanbul')
const mocha = require('gulp-mocha')
const rimraf = require('rimraf').sync

// default compilation task:
gulp.task('default', function () {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('build'))
})

// linting:
gulp.task('lint', function () {
	return gulp.src('src/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
})

//
// BEGIN: tests and coverage:
//
gulp.task('pre-coverage', [ 'default' ], function () {
	return gulp.src('build/main/**/*.js')
		.pipe(istanbul())
		.pipe(istanbul.hookRequire())
})

gulp.task('coverage', [ 'pre-coverage' ], function () {
	return gulp.src('build/test/index.js')
		.pipe(mocha())
		.pipe(istanbul.writeReports())
})

gulp.task('test', [ 'default' ], function () {
	return gulp.src('build/test/index.js')
		.pipe(mocha())
})
//
// END: tests and coverage:
//

gulp.task('watch', function () {
	gulp.watch('src/**/*.js', [ 'default' ])
})

gulp.task('clean', function () {
	rimraf('build')
	rimraf('coverage')
})
