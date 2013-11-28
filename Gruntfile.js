
module.exports = function(grunt) {
  grunt.initConfig({
    jade: {
      compile: {
        files: [
          {
            expand: true,
            cwd: "view",
            src: ["index.jade"],
            dest: "dest",
            ext: ".html"
          }
        ]
      }
    },

    stylus: {
      compile: {
        files: [
          {
            expand: true,
            cwd: "public/css",
            src: ["*.styl", "**/*.styl", "*.stylus", "**/*.stylus"],
            dest: "dest/css",
            ext: ".css"
          }
        ]
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "public/",
            src: ["js/*", "data/*", "view/*", "model/*", "controller/*", "collection/*"],
            dest: 'dest/'
          }
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 9980,
          hostname: "*",
          base: "dest"
        }
      }
    },

    watch: {
      jade: {
        files: ["view/index.jade"],
        tasks: ["jade:compile"]
      },

      stylus: {
        files: ["public/css/*.styl", "public/css/*.stylus"],
        tasks: ["stylus:compile"]
      },

      copy: {
        files: [
          "public/js/*",
          "public/data/*",
          "public/view/*",
          "public/model/*",
          "public/controller/*",
          "public/collection/*"
        ],
        tasks: ["copy:main"]
      },

      livereload: {
        files: ["dest/css/*.css", "dest/css/**/*.css"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("build", ["jade:compile", "stylus:compile", "copy:main"]);
  grunt.registerTask("livereload", ["connect:server", "watch"]);
  grunt.registerTask("default", ["build"]);
};
