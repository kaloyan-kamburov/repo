var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('css', function() {
    return gulp.src('src/scss/main.scss')
    .pipe(sass({        
      style: 'expanded',
      sourceComments: 'normal'
    }).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

gulp.task('js', function() {
    gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'src/js/**/*.js'
    ])
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('default', ['css', 'js'], function() {
    gulp.watch('src/scss/**/*.scss', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
});
