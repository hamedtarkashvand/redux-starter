const path = require("path");

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    //contentBase: path.join(__dirname, "dist"),
    port: 3000,
  },
  mode: 'development',
};
