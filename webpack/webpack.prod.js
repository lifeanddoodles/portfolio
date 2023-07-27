const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: 'assets',
          globOptions: {
            ignore: ['**/index.html', '**/*.css'],
          },
        },
        {
          from: 'public/*.css',
          to: './[name].css',
        },
      ],
    }),
  ],
}
