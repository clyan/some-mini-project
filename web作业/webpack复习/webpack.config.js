const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");      //将css以link的方式引入，否则就用style-loader
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');    //优化打包css
const TerserPlugin = require('terser-webpack-plugin');  //用于优化js,使用了optimization情况下使用
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const Webpack = require('webpack');
module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: false
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "js/index.[hash:8].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase:"./dist",
    openPage: "main.html",
    index:"main.html",
    compress: true,
    port: 9000,
    hot: false,
    open: false
  },
  module: {
    rules: [
      {
        test: /\.gz$/,
        enforce: 'pre',
        use: 'gzip-loader'
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.png|\.jpe?g|\.gif|\.ico$/,
        use: {
          loader: 'url-loader',
          options: {
            limit:1,
            publicPath:"http://127.0.0.1:9000/img/",
            outputPath:"img/"
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,  //排除node_modules目录
        use: {
          loader: 'eslint-loader',
          options:{
            enforce:"pre",
          }
        },
      },
      {
        test: /\.js$/,
        include:path.resolve(__dirname,"src"),
        exclude: /(node_modules)/,  //排除node_modules目录
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css|\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader:'postcss-loader'
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader:'postcss-loader'
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          },
        ]
      }
    ]
  },
  externals:{       //忽略掉，第三方模块从外边index.html引入了
    jquery : "$"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: "main.html",
      title: "首页",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
      hash: true,
      meta: {
        viewport: "initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no"
      },
      favicon: path.resolve(__dirname, 'public/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new Webpack.ProvidePlugin({     //只是在每个模块中引入一个$,window中还是没有
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
