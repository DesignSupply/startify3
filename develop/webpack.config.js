/* eslint-disable */

// modules include
const path = require('path');
const globule = require('globule');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

// build settings
const buildMode = 'development'; // production or development
const cssInline = false;
const useTypeScript = true;
const directoryPath = {
  root: path.resolve(__dirname, ''),
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src')
}

// build configuration
let styleLoader = null;
let entryPointPath = null;
const pugFiles = globule.find('src/pug/**/*.pug', {
  ignore: [ 'src/pug/**/_*.pug' ]
});
if(cssInline) {
  styleLoader = 'style-loader';
} else {
  styleLoader = { loader: MiniCssExtractPlugin.loader };
}
if(useTypeScript) {
  entryPointPath = `${directoryPath.src}/ts/main.tsx`;
} else {
  entryPointPath = `${directoryPath.src}/es/main.jsx`;
}
const buildDefault = {
  mode: buildMode,
  devtool: 'source-map',
  entry: entryPointPath,
  output: {
    path: `${directoryPath.dist}/assets`,
    filename: 'js/main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [ 'autoprefixer', { grid: true } ],
                  [ 'cssnano', { preset: 'default' } ]
                ]
              },
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              root: `${directoryPath.src}/pug`
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx', '.jsx', '.json' ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: [ '.ts', '.js', '.tsx', '.jsx' ],
      exclude: 'node_modules'
    }),
    new MiniCssExtractPlugin({ filename: 'css/main.min.css' }),
    new StylelintPlugin({ configFile: `${directoryPath.root}/.stylelintrc.json` }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 2000,
      server: { baseDir: directoryPath.dist }
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: `${directoryPath.src}/images`, 
          to: `${directoryPath.dist}/assets/img/_min/[name]_min[ext]`
        }
      ]
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        ImageminMozjpeg({
          quality: 85,
          progressive: true,
        }),
      ],
      pngquant: {
        quality: '70-85',
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 10,
        colors: 256,
      },
      svgo: {}
    })
  ],
  target: [ 'web', 'es5' ]
}

// page template output
pugFiles.forEach((pug) => {
  const html = pug.split('/').slice(-1)[0].replace('.pug', '.html');
  buildDefault.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      filename: `${directoryPath.dist}/${html}`,
      template: pug,
      data: require(`${directoryPath.src}/pug/data/global.js`)
    })
  )
});

module.exports = buildDefault;