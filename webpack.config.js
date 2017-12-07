module.exports = {
  entry: ["./app/index.js"],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        // .js結尾的，但不要node_modules資料夾
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./build",
    inline: true
  }
};
