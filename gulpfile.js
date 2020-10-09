var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch',['sass'], function() {
	gulp.watch('./assets/sass/*.scss', ['sass']);
});

// gulp.task('watch',['minify'], function() {
// 	gulp.watch('./*.html', ['minify']);
// });

// gulp.task('watch',['compress'], function() {
// 	gulp.watch('assets/js/*.js', ['compress']);
// });

gulp.task('sass', function(){
	gulp.src('./assets/sass/app.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./dist/css/'));
});

//Minificar HTML
gulp.task('minify', () => {
	return gulp.src('./*.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('htmlmin'));
});


//Minificar JS
gulp.task('compress', function() {
gulp.src(['assets/js/*.js'])
	.pipe(minify())
	.pipe(gulp.dest('dist/js'))
});