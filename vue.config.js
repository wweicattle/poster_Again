module.exports = {
    publicPath: './',
    lintOnSave: false,
    css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5
            })
          ]
        }
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://tm.lilanz.com/qywx/project/facepass/pushmessage.ashx',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
        
      },
      configureWebpack: {
        resolve: {
          alias: {
            "assets": "@/assets",
            "network": "@/network",
            "components": "@/components",
            "common": "@/common",
            "views": "@/views",
            "utils": "@/utils"
          }
        }
      }
    }
