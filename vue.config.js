// example
const authApi = 'xxx';
const commonApi = 'xxx';
const svgoConfig = require('./config/svgo-config.json');

module.exports = {
  devServer: {
    proxy: {
      '/api/auth': {
        target: authApi,
        changeOrigin: true,
        pathRewrite: { '/api/auth': '/auth' },
      },
      '/api/common': {
        target: commonApi,
        changeOrigin: true,
        pathRewrite: { '/api/common': '/api' },
      },
    },
    host: '0.0.0.0',
    port: 8090,
    https: false,
    open: false,
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
  runtimeCompiler: true,
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//,
  ],
  chainWebpack: config => {
    // 修改 `svg` Loader
    const svgRule = config.module.rule('svg');

    // svgRule.uses.clear();
    svgRule
      .exclude
        .add(/src\/components\/svg-icons\/icons/)
        .end()

    // 添加 `svg-sprite-loader` Loader
    config.module
      .rule('svgicons')
      .test(/\.svg$/)
      .include
        .add(/src\/components\/svg-icons\/icons/)
        .end()
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]',
        })
        .end()
      .use('svgo-loader')
        .loader('svgo-loader')
        .options(svgoConfig)
    // config.resolve
    //   .symlinks(true)
  }
};
