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
          target: 'htt/tm.lilanz.com/oa/project/facepass/pushmessage.ashxp:/',
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
