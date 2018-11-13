const webpack = require('webpack');
const path = require('path');

module.exports = function() {
    return {
        entry: './src/js/site.js',
        devtool: 'source-map',
        output: {
            filename: 'site.js',
            path: path.resolve(__dirname,'dist/assets/js'),
            sourceMapFilename: '[file].map'
        },
        module: {
            rules: [
              {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
              }
            ]
          },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
              })
        ]
    }
}