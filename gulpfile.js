var typescript = require('gulp-tsc');
var gulp = require('gulp');
var concat = require('gulp-concat');
gulp.task('rename', function () {
    return gulp.src(['src/rename/*.ts','typings/*.ts'])
        .pipe(typescript({
            target: 'es5',
            module: 'commonjs',
        }))
        .pipe(gulp.dest('./es5/'))
        .pipe(concat('rename.jsx'))
        .pipe(gulp.dest('./dist/'))
});
gulp.task('exporter', function () {
    return gulp.src(['src/exporter/*.ts','typings/*.ts'])
        .pipe(typescript({
            target: 'es5',
            module: 'commonjs',
        }))
        .pipe(gulp.dest('./es5/'))
        .pipe(concat('exporter.jsx'))
        .pipe(gulp.dest('./dist/'))
});