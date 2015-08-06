module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect:{
      //这里为插件子刷新方式
      options: {
        port: 9000,
        hostname: '10.240.138.72', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35732  //声明给 watch 监听的端口
      },
      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            'webapp'  //主目录
            ]
          }
        }
      
    },
    sass: {
        dist: {
            options: {                       // Target options 
            style: 'expanded'
          },
          files: { 
            "webapp/styles/css/index.css":"webapp/styles/scss/index.scss",
            "webapp/styles/css/wap.css":"webapp/styles/scss/wap.scss"
          }
       }
    },
    watch: {
      sass: {
        files: ['webapp/styles/**/*.{scss,sass}'],
        tasks: ['sass']
      },
      livereload: {
        options: {
                  livereload:'<%=connect.options.livereload%>'  //监听前面声明的端口  35729
                },
                files:[  //下面文件的改变就会实时刷新网页
                'webapp/*.html',
                'webapp/styles/{,*/}*.css',
                'webapp/js/{,*/}*.js',
                'webapp/img/{,*/}*.{png,jpg}'
          ]
      }
    }
  });


grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.registerTask('default', ['connect:server', 'watch']);
};