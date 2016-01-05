/// <binding BeforeBuild='build' />
module.exports = function (grunt)
{
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        srcddir: '_frontend_src',
        builddir: '<%= srcddir %>/build',
        html2js: {
            template: {
                options: {
                    base: '<%= srcddir %>/template',
                    module: 'indigo.templates',
                    singleModule: true,
                    useStrict: true,
                    htmlmin: {
                        collapseWhitespace: true,
                        removeComments: true,
                    }
                },
                src: ['<%= srcddir %>/template/**/*.html'],
                dest: '<%= builddir %>/js/indigo-templates.js'
            }
        },
        concat: {
            application: {
                options: {
                    banner: ""
                },
                src: ['<%= srcddir %>/js/**/*.js'],
                dest: '<%= builddir %>/js/indigo-application.js'
            },
            project: {
                options: {
                    banner: ""
                },
                src: ['<%= html2js.template.dest %>', '<%= concat.application.dest %>'],
                dest: '<%= builddir %>/js/indigo.js'
            }
        },
        uglify: {
            options: {

            },
            project: {
                src: '<%= concat.project.dest %>',
                dest: '<%= builddir %>/js/indigo.min.js'
            },
        },
        less: {
            project: {
                option: {
                    strictMath: true,
                },
                src: '<%= srcddir %>/less/indigo.less',
                dest: '<%= builddir %>/css/indigo.css'
            },
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                sourceMap: false,
                advanced: false
            },
            project: {
                src: '<%= less.project.dest %>',
                dest: '<%= builddir %>/css/indigo.min.css'
            }
        },
        copy: {
            project: {
                files: [
                    { src: '<%= uglify.project.dest %>', dest: 'assets/js/indigo.min.js' },
                    { src: '<%= cssmin.project.dest %>', dest: 'assets/css/indigo.min.css' }
                ]
            }
        }
    });

    grunt.registerTask('build.js', ['html2js', 'concat', 'uglify']);
    grunt.registerTask('build.css', ['less', 'cssmin']);
    grunt.registerTask('build', ['build.js', 'build.css', 'copy']);

};