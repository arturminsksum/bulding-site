var gulp = require('gulp');
gulp.autoprefixer = require('gulp-autoprefixer');
gulp.jade = require('gulp-jade');
gulp.connect = require('gulp-connect');
gulp.sass = require('gulp-sass');
gulp.sourcemaps = require('gulp-sourcemaps');
gulp.errorNotifier = require('gulp-error-notifier');
// var stripCssComments = require('gulp-strip-css-comments');
// gulp.cssnano = require('gulp-cssnano');
// var gcmq = require('gulp-group-css-media-queries');
// var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');


// var path = require('path');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
// var rename = require('gulp-rename');

gulp.task('svg', function () {
    return gulp
        .src('dev/svg-sprite/*.svg')
        .pipe(svgmin())
        // .pipe(svgmin(function (file) {
        //     var prefix = path.basename(file.relative, path.extname(file.relative));
        //     return {
        //         plugins: [{
        //             cleanupIDs: {
        //                 prefix: prefix + '-',
        //                 minify: true
        //             }
        //         }]
        //     }
        // }))
        .pipe(svgstore())
        .pipe(gulp.dest('dev/svg-ready'));
});

/* watch document change */
gulp.paths = {
    scripts: 'dev/**/*.js',
    jade: 'dev/**/*.jade',
    style: ['dev/jade/**/*.scss', 'dev/styles/**/*.scss'],
    html: 'dev/assets/index.html',
    js: 'dev/js/main.js',
    ccs: 'dev/assets/css/*.css'
};

gulp.task('connect', function() {
  gulp.connect.server({
    root: 'dev/assets',
    livereload: true
  });
});


gulp.task('concat', function () {
    return gulp.src('dev/styles/style.scss')
        .pipe(gulp.errorNotifier())
        .pipe(gulp.sourcemaps.init())
        // .pipe(gulp.less())
        .pipe(gulp.sass().on('error', gulp.sass.logError))
        .pipe(gulp.autoprefixer({browsers: ['last 10 versions','ie >= 9']}))      
        // .pipe(stripCssComments())
        // .pipe(gcmq())
        // .pipe(gulp.cssnano())
        .pipe(gulp.sourcemaps.write('../maps'))
        .pipe(gulp.dest('dev/assets/css'))
        .pipe(gulp.connect.reload());
});

gulp.task('jade', function() {
    gulp.src('dev/*.jade')
        .pipe(gulp.errorNotifier())
        .pipe(gulp.jade({
            pretty: true
        }))
        .pipe(gulp.dest('dev/assets'))
        // .pipe(gulp.connect.reload());
});

gulp.task('html', function () {
  gulp.src(gulp.paths.html)
    .pipe(gulp.connect.reload());
});

gulp.task('img-min', function () {
  gulp.src('dev/img-min/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dev/assets/img'))
});

gulp.task('svg-min', function () {
  gulp.src('dev/svg-min/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dev/assets/svg'))
});

gulp.task('js', function () {
  gulp.src('dev/js/main.js')
    // .pipe(uglify())
    .pipe(gulp.dest('dev/assets/js'))
    .pipe(gulp.connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(gulp.paths.style, ['concat']);
    gulp.watch(gulp.paths.jade, ['jade']);
    gulp.watch(gulp.paths.html, ['html']);
    gulp.watch(gulp.paths.js, ['js']);
});

gulp.task('default', ['concat', 'jade','js', 'connect', 'watch']);