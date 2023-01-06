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
const TailwindCSS = require('tailwindcss');

// build settings
const buildMode = 'development'; // production or development
const cssInline = false; // true->inlineCSS false->outputfile
const useTypeScript = true; // true->TypeScript false->ECMAScript
const templateEngineType = 'react'; // pug or react
const directoryPath = {
  root: path.resolve(__dirname, ''),
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src')
}

// build configuration
const styleLoader = cssInline ? 'style-loader' : { loader: MiniCssExtractPlugin.loader };
const entryPointPath = useTypeScript ? `${directoryPath.src}/ts/main.tsx` : `${directoryPath.src}/js/main.jsx`;
const buildDefault = {
  mode: buildMode,
  devtool: 'source-map',
  entry: {
    main: entryPointPath,
  },
  output: {
    path: `${directoryPath.dist}/assets`,
    filename: 'scripts/[name].min.js',
    assetModuleFilename: 'images/_min/[name][ext][query]'
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
              compact: true,
              presets: [ 
                [
                  '@babel/preset-env',
                  {
                    'targets': {
                      'node': true
                    }
                  },
                ],
                '@babel/preset-react',
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              url: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  TailwindCSS
                ]
              }
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
              url: true,
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  TailwindCSS,
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
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024,
          },
        },
      },
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
    new MiniCssExtractPlugin({ filename: 'stylesheets/main.min.css' }),
    new StylelintPlugin({ configFile: `${directoryPath.root}/.stylelintrc.json` }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 2000,
      server: { baseDir: directoryPath.dist }
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: `${directoryPath.src}/img`, 
          to: `${directoryPath.dist}/assets/images/_min/[name]_min[ext]`
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
  target: [ 'web', 'es5' ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}

// template engine mode
if(templateEngineType === 'react') {
  const templateMode = useTypeScript ? { directory: 'ts/tsx', extension: '.tsx' } : { directory: 'js/jsx', extension: '.jsx' };
  const reactFiles = globule.find(`src/${templateMode.directory}/template/**/*${templateMode.extension}`, {
    ignore: [ `src/${templateMode.directory}/template/**/_*${templateMode.extension}` ]
  });
  // page template output
  reactFiles.forEach((react) => {
    const html = react.split('/').slice(-1)[0].replace(templateMode.extension, '.html');
    buildDefault.plugins.push(
      new HtmlWebpackPlugin({
        inject: false,
        filename: `${directoryPath.dist}/${html}`,
        template: react,
        minify: false
      })
    )
  });
} else {
  const pugFiles = globule.find('src/pug/**/*.pug', {
    ignore: [ 'src/pug/**/_*.pug' ]
  });
  // page template output
  pugFiles.forEach((pug) => {
    const html = pug.split('/').slice(-1)[0].replace('.pug', '.html');
    buildDefault.plugins.push(
      new HtmlWebpackPlugin({
        inject: false,
        filename: `${directoryPath.dist}/${html}`,
        template: pug,
        minify: false,
        data: require(`${directoryPath.src}/pug/data/global.js`)
      })
    )
  });
}

module.exports = buildDefault;