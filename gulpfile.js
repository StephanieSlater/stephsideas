const gulp = require('gulp');

const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

gulp.task('copy', function() {
  gulp.src('assets/**')
    .pipe(gulp.dest('./docs/assets'));
});

gulp.task('html', () => {
  return gulp.src('./src/pages/*.hbs')
    .pipe(handlebars({}, {
      ignorePartials: true,
      batch: ['./src/partials']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('default', ['copy', 'html']);