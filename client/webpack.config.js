const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'client/src/index.js'), 
        install: path.resolve(__dirname, 'client/src/js/install.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      title: "JATE",
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, "src-sw.js"),
      swDest: "src-sw.js",
    }),
    new WebpackPwaManifest({
      fingerprints: false,
      inject: true,
      name: "Just Another Text Editor",
      short_name: "J.A.T.E.",
      description: "Take notes with JavaScript syntax highlighting!",
      background_color: "#225ca3",
      theme_color: "#225ca3",
      start_url: "/",
      publicPath: "/",
      icons: [
        {
          src: path.resolve(__dirname, "src/images/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/transform-runtime",
            ],
          },
        },
      },
    ],
  },
};
