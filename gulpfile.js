var gulp = require('gulp'); 
gulp.task('default',function(){ 
	gulp.src('./bower_components/jquery/dist/jquery.min.js')
	        .pipe(gulp.dest('./js'));
	gulp.src('./bower_components/axios/dist/axios.min.js')
			.pipe(gulp.dest('./js'));
}); 