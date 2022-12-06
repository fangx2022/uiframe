const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 500000000,
      // 生成文件的最大体积
      maxAssetSize: 300000000
    },
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    },
    // 修改打包后css文件名
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css'
      })
    ]
  }
})
