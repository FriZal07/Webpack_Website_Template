// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/script.js",
  output: {
    // entry js file entry file
    filename: "script.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    // for html file
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
        // for css (made sure to import to main js file)
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        // for images, urls
        {
        test: /\.html$/i,
        use: ["html-loader"],
        }   ,
        // for images
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        }

    ],
  },
};