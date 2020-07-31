module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // set up first custom task: concat
    // the options depend on the task you want to use
    concat: {
      options: {
        // string to put between concatenated files
        // can be necessary when processing minified js code
        //separator: ';'
      },
      js: {
        // files to concat together
        src: ['js/*.js'],
        // location of result file
        dest: 'jsmin/<%= pkg.name %>.min.js'
      },
      css: {
        // files to concat together
        src: ['css/*.css'],
        // location of result file
        dest: 'cssmin/all.min.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'jsmin/<%= pkg.name %>.min.js',
        dest: 'jsmin/<%= pkg.name %>.min.js'
      }
    }
  });

  // load contrib task files
  // note: these should be installed from npm
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // a custom task
  // no configuration for this task, it just logs stuff
  grunt.registerTask('default', 'Log stuff.', function() {
      grunt.log.write('I am a custom task...').ok();
    });
  // register what to do when using the default 'grunt' command
  grunt.registerTask('default', ['concat', 'uglify']);
};