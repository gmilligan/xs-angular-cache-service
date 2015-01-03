module.exports = function(grunt) {  "use strict";

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: ".jshintrc",
        reports: require('jshint-stylish')
      },
      all:[
        './Gruntfile.js',
        './src/xs-cache-service.js'
      ]
    },
    clean: {
      js: ['dist/*.*']
    },
    uglify: {
      options: {
        mangle: false
      },
      src: {
        src: 'src/xs-angular-cache-service.js',
        dest: 'dist/xs-angular-cache-service.min.js'
      }
    },
    karma: {
      unit: {
        configFile: './karma.conf.js',
        autowatch: false,
        singleRun: true
      }
    }
  });
  grunt.registerTask('banner', function (filePath) {
    var file = grunt.file.read(filePath);
    var banner = '/**\n' +
      '* @author Greg Milligan <xybersolve@gmail.com>\n' +
      '* @file xs-angular-cache-service.js\n' +
      '* @version ' + pkg.version + ' - Homepage <https://github.com/gmilligan/xs-angular-cache-service>\n' +
      '* @copyright (c) 2013-2014 XyberSolve, Corp. <http://www.xybersolve.com>\n' +
      '* @license MIT <https://github.com/gmilligan/xs-angular-cache-service/blob/master/LICENSE>\n' +
      '*\n' +
      '* @overview Simple cache service for angular module persistence. This cache service extends the angular `$cacheFactory`, to use HTML5 localStorage for persisting data across sessions.\n' +
      '*/\n';

    file = banner + file;
    grunt.file.write(filePath, file);
  });
  grunt.registerTask('check', ['jshint']);
  grunt.registerTask('test',  ['jshint', 'karma']);
  grunt.registerTask('build', [
    'clean',
    'jshint',
    'karma',
    'uglify',
    'banner:dist/xs-angular-cache-service.min.js'
  ]);

};

/*
 grunt.registerTask('version', function (filePath) {
    var file = grunt.file.read(filePath);
    file = file.replace(/<%= pkg\.version %>/gi, pkg.version);
    grunt.file.write(filePath, file);
 });

 */