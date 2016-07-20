module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'js/libs/*.js',
                    'js/script.js',
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            dist: {
                src: ['js/build/production.js'],
                dest: 'js/build/production.min.js',
            }
        },

        concat_css: {
            all: {
                src: ['css/*.css'],
                dest: 'css/concatenated.css',
            },
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        }

    });

    // We used this plugin
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task. Grunt do after click "grunt"
    grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);
};
