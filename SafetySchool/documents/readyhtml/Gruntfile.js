module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	// Project configuration.
	grunt
			.initConfig({
				pkg : grunt.file.readJSON('package.json'),
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
							compress : true,
							yuicompress : true,
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

	// Default task(s).
	grunt.registerTask('default', [ 'uglify','less', 'watch'  ]);
	
	// 11

};
