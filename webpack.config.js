const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const  { CleanWebpackPlugin }  =  require ( 'clean-webpack-plugin' ) ;

module.exports = {
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'data/img/[name][ext]'
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "src/assets/img", to: "assets/img" },
        ],
      }),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
    }),
    new  CleanWebpackPlugin ( ),
],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      }
}