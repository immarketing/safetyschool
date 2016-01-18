module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	// Project configuration.
	grunt
			.initConfig({
				pkg : grunt.file.readJSON('package.json'),
				copy: {
					
					  main: {
					    files: [
					      // includes files within path
					      {expand: true, src: ['bower_components/**/dist/**'], dest: 'build/' /*, filter: 'isFile'*/}
					      /*
					      ,

					      // includes files within path and its sub-directories
					      {expand: true, src: ['path/**'], dest: 'dest/'},

					      // makes all src relative to cwd
					      {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

					      // flattens results to a single level
					      {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
					      */
					    ],
					  },
					  
					},				
				bower_concat: {
					  all: {
					    dest: 'build/components.js',
					    cssDest: 'build/components.css',
					    exclude: [
					      //'jquery',
					      //'modernizr'
					    ],
					    //dependencies: {
					      //'underscore': 'jquery',
					      //'backbone': 'underscore',
					      //'jquery-mousewheel': 'jquery'
					    //},
					    bowerOptions: {
					      relative: false
					    }
					  }
					},				
				watch : {
					styles : {
						files : [ 'less/**/*.less' ], // which files to watch
						tasks : [ 'less' ],
						options : {
							nospawn : true
						}
					}
				},
				less : {
					development : {
						options : {
							compress : false,
							yuicompress : false,
							optimization : 2
						},
						files : {
							"build/algo.css" : "less/algo.less" // destination file and source file
						}
					}
				},
				uglify : {
					options : {
						banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
					},
					build : {
						src : 'src/<%= pkg.name %>.js',
						dest : 'build/<%= pkg.name %>.min.js'
					}
				}
			});
	
	

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	//grunt.registerTask('default', [ 'uglify','less', 'watch'  ]);
	//grunt.registerTask('default', [ 'uglify','less', 'bower_concat'  ]);
	grunt.registerTask('default', ['uglify','less', 'copy']);
	
	// 11

};
