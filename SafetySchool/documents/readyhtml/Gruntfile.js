module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	var globalConfig = {
		images : 'images', /* папка для картинок сайта */
		styles : 'css', /* папка для готовый файлов css стилей */
		fonts : 'fonts', /* папка для шрифтов */
		scripts : 'js', /* папка для готовых скриптов js */
		src : 'src', /* папка с исходными кодами js, less , etc. */
		bower_path : 'bower_components' /* папка где хранятся библиотеки jquery, bootstrap, SyntaxHighlighter, etc. */
	};

	// Project configuration.
	grunt
			.initConfig({
				globalConfig : globalConfig,
				pkg : grunt.file.readJSON('package.json'),
				copy : {
					main : {
						files : [
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/jquery/dist/jquery.min.js',
									dest : '<%= globalConfig.scripts %>/',
									filter : 'isFile'
								}, /*{
											          expand : true,
											          flatten : true,
											          src : '<%= globalConfig.bower_path %>/html5shiv/dist/html5shiv.min.js',
											          dest : '<%= globalConfig.scripts %>/',
											          filter : 'isFile'
											        },*/
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/bootstrap/dist/js/bootstrap.min.js',
									dest : '<%= globalConfig.scripts %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/bootstrap/dist/css/bootstrap.min.css',
									dest : '<%= globalConfig.styles %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/bootstrap/dist/fonts/*',
									dest : '<%= globalConfig.fonts %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/bootstrap-treeview/dist/*.min.js',
									dest : '<%= globalConfig.scripts %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/bootstrap-treeview/dist/*.min.css',
									dest : '<%= globalConfig.styles %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/font-awesome/css/font-awesome.min.css',
									dest : '<%= globalConfig.styles %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/font-awesome/fonts/*',
									dest : '<%= globalConfig.fonts %>/',
									filter : 'isFile'
								} /*, {
										          expand : true,
										          flatten : true,
										          src : '<%= globalConfig.bower_path %>/respond/dest/respond.min.js',
										          dest : '<%= globalConfig.scripts %>/',
										          filter : 'isFile'
										        }*/
						]
					}
				},
				copy_ : {

					main : {
						files : [
						// includes files within path
						{
							expand : true,
							cwd : 'bower_components/**/dist/',
							src : [ '**' ],
							dest : 'build/' /*, filter: 'isFile'*/
						}
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
				bower_concat : {
					all : {
						dest : 'build/components.js',
						cssDest : 'build/components.css',
						exclude : [
						//'jquery',
						//'modernizr'
						],
						//dependencies: {
						//'underscore': 'jquery',
						//'backbone': 'underscore',
						//'jquery-mousewheel': 'jquery'
						//},
						bowerOptions : {
							relative : false
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
	grunt.registerTask('default', [ 'uglify', 'less', 'copy' ]);

	// 11

};
