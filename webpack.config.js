const path = require("path");
const webpack = require("webpack");

// webpack.config.js
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    path.resolve(__dirname, "src/index")
  ],
  target: "web",
  output: {
    path: path.join(__dirname,"./dist/"), // Note: Physical files are only output by the production build task `npm run build`.
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
        { test: /(\.css)$/, loaders: ["style-loader", "css-loader"] },
        { test: /\.(js|jsx)$/, include: path.join(__dirname, "src"),loader: "babel-loader" }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "src"),
    compress: true,
    port: 9900,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    // you can now require("file") instead of require("file.coffee")
    extensions: [".js", ".json", ".jsx"]
  }
};
