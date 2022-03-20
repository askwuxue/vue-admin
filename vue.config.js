// const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const config = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  // publicPath: './',
  // devServer: {
  //   proxy: {
  //     [process.env.VUE_APP_BASE_API]: {
  //       target: 'http://152.136.185.210:5000',
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //       changeOrigin: true,
  //     },
  //   },
  // },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components',
  //     },
  //   },
  //   cache: {
  //     type: 'filesystem', // 使用文件缓存
  //   },
  //   // plugins: [
  //   //   // 打包体积分析
  //   //   new BundleAnalyzerPlugin(),
  //   // ],
  // },

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  chainWebpack: (config) => {
    config.plugin('speed-measure-webpack-plugin').use(SpeedMeasurePlugin)
  },
}

module.exports = config
