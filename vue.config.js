const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },
  configureWebpack: {
    module: {
      rules: [
        {       
         test: /\.txt/,
         type: 'asset/source',
        }
      ]
    },
  }
})
