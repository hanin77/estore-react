const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
  const isProduction = env === "production";  
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public','dist'),
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, 
        {test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                sourceMap: true
              },
            },
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
      proxy: {
        "/api": {
          target: "http://localhost:5000"
        }
      }
    }
  };
} 
