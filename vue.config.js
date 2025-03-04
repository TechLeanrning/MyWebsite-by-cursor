const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }))

    // 修改 markdown 加载器配置
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .options({
        esModule: false
      })
      .end()

    // 添加 Buffer polyfill
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
        Buffer: ['buffer', 'Buffer']
      }])

    // 正确配置 Vue 特性标志
    config
      .plugin('define')
      .tap(args => {
        Object.assign(args[0]['process.env'], {
          __VUE_OPTIONS_API__: 'true',
          __VUE_PROD_DEVTOOLS__: 'false',
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
        })
        return args
      })
  },
  
  // 修改生产环境配置
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  
  // 开发服务器配置
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: 'all'  // 允许所有主机访问
  },

  // 其他配置保持不变
  configureWebpack: {
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer/")
      }
    }
  }
}) 