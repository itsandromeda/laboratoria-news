var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browsefiry = require('gulp-browserify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),
    nodemon = require('nodemon'),
    config = {
        source: './src/',
        dist: './public',
        modules: './node_modules/'
    },
    paths = {
        assets: "/assets/",
        html: "**/*.html",
        sass: "scss/**/*.scss",
        png: "img/*.png",
        mainSass: "scss/**/main.scss",
        mainJS: "js/app.js",
        js: "js/components/**.js",
        bootstrap: 'bootstrap/dist/',
        vendor: 'vendor/A - OwlCarousel2-2.2.1/OwlCarousel2-2.2.1/'
    },
    sources = {
        assets: config.source + paths.assets,
        html: config.source + paths.html,
        sass: config.source + paths.assets + paths.sass,
        rootSass: config.source + paths.assets + paths.mainSass,
        png: config.source + paths.assets + paths.png,
        js: config.source + paths.assets + paths.js,
        rootJS: config.source + paths.assets + paths.mainJS,
        bootstrapCSS: config.modules + paths.bootstrap + "css/bootstrap.min.css",
        carouselJS: config.source + paths.assets + paths.vendor + "js/owl.carousel.min.js",
        carouselCSS: config.source + paths.assets + paths.vendor + "css/**.css"
    };

gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task("sass", () => {
    let sassfile = gulp.src([sources.rootSass, sources.bootstrapCSS, sources.carouselCSS])
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        //bootstrapcss = gulp.src(sources.bootstrapCSS),
        //carouselcss = gulp.src(sources.carouselCSS);

    //merge(sassfile, bootstrapcss)
        .pipe(concat("main.css"))
        .pipe(gulp.dest(config.dist));
});

gulp.task('png', () => {
    gulp.src(sources.png)
        .pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task("js", () => {
    gulp.src([sources.js, sources.rootJS, sources.carouselJS])
        .pipe(concat(sources.rootJS))
        .pipe(browsefiry())
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest(config.dist));
});

gulp.task("png-watch", ["png"], (done) => {
    browserSync.reload();
    done();
});

gulp.task("sass-watch", ["sass"], (done) => {
    browserSync.reload();
    done();
});

gulp.task("js-watch", ["js"], (done) => {
    browserSync.reload();
    done();
});

gulp.task("html-watch", ["html"], (done) => {
    browserSync.reload();
    done();
});

gulp.task("serve", () => {
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });
    gulp.watch(sources.html, ["html-watch"]);
    gulp.watch(sources.sass, ["sass-watch"]);
    gulp.watch(sources.png, ["png-watch"]);
    gulp.watch(sources.js, ["js-watch"]);
});