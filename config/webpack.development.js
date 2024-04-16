// html插入资源的时候(js, css)，可以inline css js, 也可以得到menifest.json可以缓存
const htmlWebpackPlugin = require('html-webpack-plugin')
// 自动生成html文件
const { resolve, join } = require('path')
module.exports = {
  devServer: {
    // 路由回退
    historyApiFallback: true,
    // 静态资源目录
    static: {
      directory: join(__dirname, '../dist'),
    },
    // 监听端口
    port: 3000,
    // 热模块替换
    hot: true,
  },
  // 错误打印
  stats: 'errors-only',
  output: {
    // 构建后的基础url
    publicPath: '/',
    // 通过loader生成的
    filename: 'scripts/[name].bundle.js',
    // webpack自带的loader
    assetModuleFilename: 'images/[name].[ext]',
  },
  plugins: [
    new htmlWebpackPlugin({
      title: '页面',
      filename: 'index.html',
      // 页面标识

      public: '',
      template: resolve(__dirname, '../src/index-dev.html'),
    }),
  ],
}
