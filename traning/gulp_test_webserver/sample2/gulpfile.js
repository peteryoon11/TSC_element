var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject({'target':'es5','noImplicitAny':true});
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');

gulp.task('server',function(){
    return gulp.src('./')
    .pipe(webserver({port:9400}));
});

gulp.task('scripts', function(){
   var tsResult = gulp.src("src/*.ts")
   .pipe( sourcemaps.init() )
   .pipe( tsProject() );
   return tsResult.js
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('src/*.ts',['scripts']);
    gulp.watch('dist/*.js').on('change',livereload.changed);
});

gulp.task('default',['server','scripts','watch']);

//npm install -g gulp-cli
//npm install  typescript gulp gulp-typescript gulp-sourcemaps gulp-webserver gulp-livereload