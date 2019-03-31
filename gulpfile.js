var gulp=require('gulp');
watch = require('gulp-watch');

gulp.task('default',function(){
	console.log("Hooray - you created a Gulp task ok");
});

gulp.task('html',function(){
	console.log("Imagine something useful being done to your HTML here");
});

gulp.task('styles',function(){
	console.log("Imagine Sass or PostCSS tasts running here");
	return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles/styles.css'));
});

gulp.task('watch',function(){
	
	watch('./app/index.html',function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});
	
})