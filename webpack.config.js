const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-app.bundle.js'
  },

  resolve: {
    alias: {
      Views: path.resolve(__dirname, './src/views'),
      Assets: path.resolve(__dirname, './src/assets')
    }
  },

  module: {
    rules: [
      // 为了使用单文件组件，需要引入 vue-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
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
          'sass-loader'
        ]
      },
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/assets/template.html'
    }),
    // 将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
    new VueLoaderPlugin()
  ]
};
