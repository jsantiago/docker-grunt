// vim: set ft=javascript:

'use strict';

module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // load non-grunt tasks
    //grunt.loadNpmTasks('foo');
    //grunt.loadNpmTasks('bar');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: grunt.file.readJSON('bower.json'),

        cacheBuster: grunt.template.today("yyyymmddHHMMss"),

        clean: {
            generated: ['dist/**/*'],
            dependencies: ['bower_components/**', 'node_modules/**']
        },

        copy: {
            html: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '*.html',
                        dest: 'dist'
                    }
                ]
            },
            ico: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '*.ico',
                        dest: 'dist'
                    }
                ]
            },
            txt: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '*.txt',
                        dest: 'dist'
                    }
                ]
            },
            xml: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '*.xml',
                        dest: 'dist'
                    }
                ]
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'src/js/**/*.js'
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd-HH:MM:ss") %> */\n'
            },
            build: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'src/js/main.js'
                    ],
                // Uncomment to add a timestamp to the filename
                //dest: 'dist/js/<%= pkg.name %>-<%= cacheBuster %>.min.js'
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },

        less: {
            options: {
                yuicompress: true
            },
            components: {
                files: {
                    // Uncomment to add a timestamp to the filename
                    //'dist/css/<%= pkg.name %>-<%= cacheBuster %>.min.css': [
                    'dist/css/<%= pkg.name %>.min.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                        'src/less/**/*.less'
                    ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: 8080,
                    base: 'dist',
                    keepalive: true
                }
            }
        }

    });

    grunt.registerTask('default', ['clean:generated', 'jshint', 'uglify', 'less', 'copy', 'connect']);

};
