var gulp =          require('gulp'),
    sass =          require('gulp-sass'),
    cleanCSS =      require('gulp-clean-css'),
    autoprefixer =  require('gulp-autoprefixer'),
    rename =        require('gulp-rename'),
    notify =        require('gulp-notify'),
    sourcemaps =    require('gulp-sourcemaps'),
    gutil =         require( 'gulp-util' ),
    concat =        require('gulp-concat'),
    jsmin =         require('gulp-jsmin'),
    iconfont =      require('gulp-iconfont'),
    gulpFile =      require('gulp-file'),
    tap     =       require('gulp-tap'),
    distDirectory = 'dist';
    devDirectory =  'dev';

gulp.task('default', function() {
    gulp.watch('./' + devDirectory + '/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
    return gulp.src('./' + devDirectory + '/scss/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer('last 7 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(cleanCSS())
            .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./' + distDirectory + '/css'))
        .pipe(notify({ message: 'Styles Successfully Compiled', onLast: true }));
});
