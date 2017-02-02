module.exports = {
  port: 5000,
  entry: 'src/index.js',
  postcss: {
    // the plugins here will be appended to default plugins: [autoprefixer]
    plugins: [
      require('postcss-nested')()
    ]
  },
  webpack(config, options, webpack) {
    if (options.production && !options.lib) {
      // Split vendor code and app code
      config.entry.vendor = ['vue']
      config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          names: ['vendor', 'manifest']
        })
      )
    }
    return config
  }
}