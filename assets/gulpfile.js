// Gulp
var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    size         = require('gulp-size'),
    rename       = require('gulp-rename'),
    notify       = require('gulp-notify'),
    watch        = require('gulp-watch'),
    connect      = require('gulp-connect'),
    livereload   = require('gulp-livereload'),
    lr           = require('tiny-lr'),
    server       = lr(),
    // Styles [sass, css]
    sass         = require('gulp-ruby-sass'),
    minifycss    = require('gulp-minify-css'),
    csso         = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    // Scripts [coffee, js]
    coffee       = require('gulp-coffee'),
    coffeelint   = require('gulp-coffeelint'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    __ports      = {
        server:     1338,
        livereload: 35732
    };

// Styles
gulp.task('styles', function () {
    return gulp.src(['sass/{,*/}*.{scss,sass}', '!sass/{,*/}*_*.{scss,sass}', '!sass/bourbon/*.{scss,sass}'])
        .pipe(sass({
            style: 'expanded',
            quiet: true,
            trace: true
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('css'))
        .pipe(autoprefixer('last 1 version'))
        .pipe(size())
        .pipe(csso())
        .pipe(minifycss())
        .pipe(size())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'))
        .pipe(livereload(server))
        .pipe(notify({
            message: 'Styles task completed @ <%= options.date %>',
            templateOptions: {
                date: new Date()
            }
        }));
});


// Scripts
gulp.task('scripts', function () {
    return gulp.src(['coffee/{,*/}*.coffee'])
        .pipe(coffee({
            bare: true
        }))
        .on('error', gutil.log)
        .pipe(coffeelint())
        .on('error', gutil.log)
        .pipe(coffeelint.reporter())
        .on('error', gutil.log)
        .pipe(size())
        .pipe(concat('app.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('js'))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(size())
        .pipe(concat('app.min.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('js'))
        .pipe(livereload(server))
        .pipe(notify({
            message: 'Scripts task completed @ <%= options.date %>',
            templateOptions: {
                date: new Date()
            }
        }));
});

// Connect & livereload
gulp.task('connect', function () {
    connect.server({
        root: __dirname,
        port: __ports.server,
        livereload: true
    });
});

// Watch
gulp.task('watch', function () {
    server.listen(__ports.livereload, function (error) {
        if (error) {
            return console.error(error);
        }

        // Gulpfile
        gulp.watch('gulpfile.js', ['assets']);

        // Watch .scss files
        gulp.watch('sass/{,*/}*.{scss,sass}', ['styles']);

        // Watch .coffee files
        gulp.watch('coffee/{,*/}*.coffee', ['scripts']);
    });
});

gulp.task('assets', ['styles', 'scripts']);

gulp.task('serve', ['assets'], function () {
    gulp.start('connect', 'watch');
});

gulp.task('default', ['serve']);
