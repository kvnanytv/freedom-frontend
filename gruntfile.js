var modules = [
	user:{},
	admin:
};

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files : 'src/js/**/*.js',
			options : {
				laxbreak: true,
				expr: true,
				boss : true
			}
		},
		uglify: {
			build: {
				src: ['src/js/module/admin/**/*.js'],
				dest: 'public/admin/min.js'
			},
			build2: {
				src: ['src/js/module/user/**/*.js'],
				dest: 'public/user/min.js'
			}
		},
		cssmin: {
			user: {
				src: 'src/css/*.css',
				dest: 'public/user/min.css'
			}
		},
		htmlmin: {
			build: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					useShortDoctype: true,
					removeRedundantAttributes: true,
					removeOptionalTags: true,
					removeEmptyAttributes: true
				},
				src: 'src/**/index.html',
				dest: 'public/index.html'
			}
		},
		html2js: {
		    options: {
		      module: 'template-module',
		      singleModule: true
		    },
		    main: {
		      src: ['src/**/*.tpl.html'],
		      dest: 'public/templates.js'
		    },
		},
		concat: {
			css: {
				src: 'src/css/*.css',
				dest: 'src/min.css'
			},
			js: {
				src: ['src/js/**/*.js'],
				dest: 'src/min.js'
			}
		},
		watch: {
			js: {
				files: ['src/js/**/*.js'],
				tasks: ['jshint', 'uglify', 'concat:js'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['src/css/*.css'],
				tasks: ['cssmin', 'concat:css'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['src/index.html'],
				tasks: ['htmlmin'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html2js');

	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'html2js', 'watch']);
};