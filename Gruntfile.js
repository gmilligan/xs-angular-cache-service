module.exports = function(grunt) {  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: ".jshintrc",
        reports: require('jshint-stylish')
      },
      all:[
        'Gruntfile.js',
        './xs-cache-service.js',
        './test/pages/*.js'
      ]
    },
    clean: {
      js: ['dist/*.js']
    },
    uglify: {
      options: {
        mangle: false
      },
      all: {
        src: 'src/xs-action-buttons-directive.js',
        dest: 'dist/xs-action-buttons-directive.min.js'
      }
    }

  });
  grunt.registerTask('check', ['jshint']);
  grunt.registerTask('build', ['jshint', 'clean', 'uglify']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

};
