module.exports = {
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
      .use(require('webpack').ProvidePlugin, [{
        Buffer: ['buffer', 'Buffer']
      }])
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer/")
      }
    }
  }
} 