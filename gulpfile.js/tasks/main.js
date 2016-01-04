
var        gulp = require('gulp'),
    runSequence = require('run-sequence');


gulp.task('default', function(cb){
  runSequence(
          'clean',
          // 'move-components',
          ['watchFiles'],

          cb);
});

gulp.task('build', function(cb){
  runSequence(
          'clean-build',
          // 'move-components',
          'inject',
          'optimImages',
          ['html', 'moveFonts-dest'],
          cb);

});
