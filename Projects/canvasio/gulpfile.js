var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),  
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], {
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browser-sync', function() {
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: true 
    });
});


gulp.task('scripts', function() {
    return gulp.src([

            'app/js/script.js',     
                                                                                                            
        ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});


gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/main.css') 
        .pipe(cssnano()) 
        .pipe(rename({
            suffix: '.min'
        })) 
        .pipe(gulp.dest('app/css'));
});


gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
});


gulp.task('clean', function() {
    return del.sync('dist'); 
});


gulp.task('img', function() {
    return gulp.src('app/img/**/*') 
        .pipe(cache(imagemin({ 
            interlaced: true,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); 
});


gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {


    var buildFiles = gulp.src([
        'app/*.html',
        'app/.htaccess',
        ]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
        'app/css/main.min.css',
        ]).pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src([
        'app/js/script.min.js',
        ]).pipe(gulp.dest('dist/js'));

    var buildFonts = gulp.src([
        'app/fonts/**/*',
        ]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('clear', function() {
    return cache.clearAll();
})


gulp.task('default', ['watch']);