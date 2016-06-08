var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require("gulp-notify"),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

// server connect
gulp.task('connect', function() {
  connect.server({
    root: 'dest',
    livereload: true
  });
});


// css 
gulp.task('css', function ()
{
  return gulp.src('css/main.css')
    .pipe(concatCss("mainstyle.css"))
    .pipe(autoprefixer({
			browsers: ['last 15 versions'],
			cascade: false
		}))
    .pipe(cleanCSS())
    .pipe(rename('mainstyle.min.css'))
    .pipe(gulp.dest('dest/css'))
    .pipe(connect.reload());
});

// html
gulp.task('html', function ()
{
	gulp.src('index.html')
	.pipe(gulp.dest('dest/'))
	.pipe(connect.reload());

})

// js
gulp.task('js', function ()
{
	gulp.src('js/*.js')
	.pipe(gulp.dest('dest/js'))
	.pipe(connect.reload());

})

// img
gulp.task('img', function ()
{
	gulp.src('img/*.*')
	.pipe(gulp.dest('dest/img'))
	.pipe(connect.reload());

})

// watch
gulp.task('watch', function ()
{
	gulp.watch('css/*.css', ['css'])
	gulp.watch('index.html', ['html'])
	gulp.watch('js/*.js', ['js'])
	gulp.watch('img/*.*', ['img'])
})

// default
gulp.task('default', ['connect', 
						'html',
						'css',
						'js',
						'img',
						'watch'
]);