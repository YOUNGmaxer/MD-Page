const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',

  devServer: {
    // dev server 的配置要启动 hot，或者在命令行中带参数开启
    hot: true
  },

  entry: {
    main: './src/main.js',
    initSize: 'Assets/js/initSize.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    alias: {
      Views: path.resolve(__dirname, './src/views'),
      Assets: path.resolve(__dirname, './src/assets')
    }
  },

  optimization: {
  },

  module: {
    rules: [
      // 为了使用单文件组件，需要引入 vue-loader
      {
        test: /\.vue$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/element-ui')
        ],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        include: [
          path.resolve(__dirname, 'node_modules/element-ui')
        ],
        loader: 'file-loader'
      },
      // 引用字体文件需要 url-loader
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'url-loader?limit=100000',
        exclude: /(node_modules)/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'MD Page',
      filename: 'index.html',
      template: './src/assets/template.html'
    }),
    // 将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
    new VueLoaderPlugin(),
    // 用于启动 HMR 时可以显示模块的相对路径
    new webpack.NamedModulesPlugin(),
    // Hot Module Replacement 的插件
    new webpack.HotModuleReplacementPlugin()
  ]
};
