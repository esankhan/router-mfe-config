const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
  devServer: {
    port: 3000,
    https: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    client: {
      overlay: false,
    },
  },
  output: {
    publicPath: "https://localhost:3000/",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remote1: "remote1@https://localhost:3001/remoteEntry.js",
        remote2: "remote2@https://localhost:3002/remoteEntry.js",
        remote3: "remote3@https://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0",
        },
        "react-router": {
          singleton: true,
          eager: true,
          requiredVersion: "^7.9.1",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
