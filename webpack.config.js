const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env) => {
  const isDev = !env.production;

  return {
    mode: isDev ? "development" : "production",
    entry: "./src/index.tsx",
    devtool: isDev ? "eval-source-map" : "source-map",
    devServer: {
      contentBase: "./dist",
      hot: true,
      port: 3001,

      proxy: {
        "/api": {
          target: "https://api.binance.com",
          secure: false,
          changeOrigin: true,
        },
      },
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      isDev && new ReactRefreshWebpackPlugin(),
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ].filter(Boolean),
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            // ... other loaders
            {
              loader: require.resolve("babel-loader"),
              options: {
                // ... other options
                plugins: [
                  // ... other plugins
                  isDev && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
              },
            },
          ],
        },
        {
          test: /.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
