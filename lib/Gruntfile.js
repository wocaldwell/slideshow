module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../js/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$", "XMLHttpRequest", "event" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {
          // "CarLot":true,
        } //name value pairs, allows to define global vars used in many files.
      }
    },
    // copy: { //for bootstrap and jquery - only need to do the first time.
    //   bootstrap: {
    //     expand: true,
    //     cwd: 'node_modules/bootstrap/dist',
    //     src: ['**'],
    //     dest: '../dist'
    //   },
    //   jquery: {
    //     expand: true,
    //     cwd: 'node_modules/jquery/dist',
    //     src: ['jquery.min.js'],
    //     dest: '../dist'
    //   }
    // },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', /* 'copy', */ 'watch']);
};