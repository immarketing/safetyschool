module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	var globalConfig = {
		images : 'images', /* папка для картинок сайта */
		styles : 'css', /* папка для готовый файлов css стилей */
		fonts : 'fonts', /* папка для шрифтов */
		scripts : 'js', /* папка для готовых скриптов js */
		swfs : 'js', /* папка для готовых скриптов js */
		src : 'src', /* папка с исходными кодами js, less , etc. */
		minified : '', /* минимизированные ли версии файлов брать 'min.' */
		wwwroot : 'www.root',
		bower_path : 'bower_components' /*
		 * папка где хранятся библиотеки jquery,
		 * bootstrap, SyntaxHighlighter, etc.
		 */
	};

	// Project configuration.
	grunt
			.initConfig({
				globalConfig : globalConfig,
				pkg : grunt.file.readJSON('package.json'),
				clean : {
					skin : [ 'skin/**/*' ],
					wwwroot : [ '<%= globalConfig.wwwroot %>/**' ],
					swfs : [ '<%= globalConfig.swfs %>/*' ],
					js : [ '<%= globalConfig.scripts %>/*' ],
					css : [ '<%= globalConfig.styles %>/*' ],
					fonts : [ '<%= globalConfig.fonts %>/*' ]
				},
				copy : {
					wwwroot : {
						files : [ {
							expand : true,
							flatten : false,
							//cwd : '<%= globalConfig.bower_path %>/jPlayer/dist/skin/',
							src : '{js,css,fonts,skin}/**',
							dest : '<%= globalConfig.wwwroot %>/'/*,
														filter : 'isFile'*/
						} ,{
							expand : true,
							flatten : false,
							cwd : '<%= globalConfig.src %>/',
							src : '**',
							dest : '<%= globalConfig.wwwroot %>/p/'/*,
														filter : 'isFile'*/
						}
						]

					},
					main : {
						files : [
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/jPlayer/dist/add-on/*.<%= globalConfig.minified %>js',
									dest : '<%= globalConfig.scripts %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/jPlayer/dist/jplayer/*.<%= globalConfig.minified %>js',
									dest : '<%= globalConfig.scripts %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : false,
									cwd : '<%= globalConfig.bower_path %>/jPlayer/dist/skin/',
									src : '**',
									dest : 'skin/'/*,
																		filter : 'isFile'*/
								},
								{
									expand : true,
									flatten : false,
									cwd : '<%= globalConfig.bower_path %>/jPlayer/dist/skin/pink.flag/css/',
									src : '**',
									dest : 'skin/pink.flag/'/*,
																		filter : 'isFile'*/
								},
								{
									expand : true,
									flatten : false,
									cwd : '<%= globalConfig.bower_path %>/jPlayer/dist/skin/pink.flag/',
									src : '{image,mustache}/**',
									dest : 'skin/'/*,
																		filter : 'isFile'*/
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/jPlayer/dist/jplayer/*.swf',
									dest : '<%= globalConfig.swfs %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/jquery/dist/jquery.<%= globalConfig.minified %>js',
									dest : '<%= globalConfig.scripts %>/',
									filter : 'isFile'
								}, /*
								 * { expand : true, flatten : true, src : '<%=
								 * globalConfig.bower_path
								 * %>/html5shiv/dist/html5shiv.min.js', dest : '<%=
								 * globalConfig.scripts %>/', filter :
								 * 'isFile' },
								 */
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/bootstrap/dist/js/bootstrap.<%= globalConfig.minified %>js',
									dest : '<%= globalConfig.scripts %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/bootstrap/dist/css/bootstrap.<%= globalConfig.minified %>css',
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
									src : '<%= globalConfig.bower_path %>/bootstrap-treeview/public/js/*.js',
									dest : '<%= globalConfig.scripts %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/bootstrap-treeview/public/css/*.css',
									dest : '<%= globalConfig.styles %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/font-awesome/css/font-awesome.<%= globalConfig.minified %>css',
									dest : '<%= globalConfig.styles %>/',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : '<%= globalConfig.bower_path %>/font-awesome/fonts/*',
									dest : '<%= globalConfig.fonts %>/',
									filter : 'isFile'
								} /*
						 * , { expand : true, flatten : true, src : '<%=
						 * globalConfig.bower_path
						 * %>/respond/dest/respond.min.js', dest : '<%=
						 * globalConfig.scripts %>/', filter :
						 * 'isFile' }
						 */
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
							dest : 'build/' /* , filter: 'isFile' */
						}
						/*
						 * ,
						 *  // includes files within path and its
						 * sub-directories {expand: true, src: ['path/**'],
						 * dest: 'dest/'},
						 *  // makes all src relative to cwd {expand: true, cwd:
						 * 'path/', src: ['**'], dest: 'dest/'},
						 *  // flattens results to a single level {expand: true,
						 * flatten: true, src: ['path/**'], dest: 'dest/',
						 * filter: 'isFile'},
						 */
						],
					},

				},
				bower_concat : {
					all : {
						dest : 'build/components.js',
						cssDest : 'build/components.css',
						exclude : [
						// 'jquery',
						// 'modernizr'
						],
						// dependencies: {
						// 'underscore': 'jquery',
						// 'backbone': 'underscore',
						// 'jquery-mousewheel': 'jquery'
						// },
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
							"css/algo.css" : "less/algo.less" // destination
						// file and
						// source file
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
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Default task(s).
	// grunt.registerTask('default', [ 'uglify','less', 'watch' ]);
	// grunt.registerTask('default', [ 'uglify','less', 'bower_concat' ]);
	grunt.registerTask('default', [ 'clean', 'uglify', 'less', 'copy:main','copy:wwwroot' ]);

	// 11

};
