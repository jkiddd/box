var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(done) {
        // gulp.src("app/scss/*.scss")       
        gulp.src("app/scss/**.scss")         
        .pipe(sass())
        .pipe(autoprefixer({
        browsers: ['last 8 versions'],
        cascade: false
            }))         
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: "app/"
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));