'use strict';

var request = require('request');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729, files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'bin/www'
      }
    },

    less: {
      development: {
        files: {
          "public/css/page1.css": "public/css/page1.less",
          "public/css/page2.css": "public/css/page2.less"
        },
      }
    },

    autoprefixer: {
      dist: {
        files: {
          "public/css/style1.css": "public/css/page1.css",
          "public/css/style2.css": "public/css/page2.css"
        },
        options:{
          livereload: true
        }
        // watch: {
        //   files: ['public/css/page1.css'],
        //   tasks: ['autoprefixer']
        // }
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'public/lib',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          bowerOptions: {}
        }
      }
    },

    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      server: {
        files: [
          'bin/www',
          'app.js',
          'routes/*.js',
          'views/**/*.html',
        ],
        tasks: ['develop', 'delayed-livereload']
      },
      js: {
        files: ['public/js/**/*.js'],
        options: {
          livereload: true
        }
      },
      less: {
        files: [
          'public/css/*.less'
        ],
        tasks: ['less','autoprefixer'],
      },
      // css:{
      //   files:[
      //     'public/css/*.css'
      //   ],
      //   tasks:['autoprefixer']
      // },
      views: {
        files: ['views/**/*.html'],
        options: {
          livereload: true
        }
      }
    }
  });


  grunt.config.requires('watch.server.files');
  files = grunt.config('watch.server.files');
  files = grunt.file.expand(files);

  grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
    var done = this.async();
    setTimeout(function () {
      request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','), function (err, res) {
        var reloaded = !err && res.statusCode === 200;
        if (reloaded) {
          grunt.log.ok('Delayed live reload successful.');
        } else {
          grunt.log.error('Unable to make a delayed live reload.');
        }
        done(reloaded);
      });
    }, 500);
  });
  grunt.registerTask('default', [
    'bower',
    'less',
    'develop',
    'watch'
  ]);
};
