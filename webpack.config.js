const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(path.join(__dirname, 'dist'));

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    mode: isProduction ? argv.mode : 'development',

    devtool: isProduction ? undefined : 'eval-source-map', // 'inline-source-map',
    entry: ['./src/index.tsx'],
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Project Template',
        template: path.resolve(__dirname, 'index.template.html'),
        filename: 'index.html',

        scriptLoading: 'defer',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          'theme-color': '#2CB5BA',
        },
        // TODO: consider cache busting
        // hash: true,
      }),
    ],

    resolve: {
      mainFields: ['browser', 'main', 'module'],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: /node_modules/,
        },
      ],
    },

    output: {
      // The output directory as an absolute path.
      path: DIST_DIR,
      // TODO: consider cache bunsting support // filename: '[name].[hash].bundle.js',
      filename: '[name].bundle.js',
      publicPath: '/',
    },

    devServer: {
      contentBase: DIST_DIR,

      //hot: false,
      //inline: false,
      //liveReload: false,

      compress: isProduction,

      // host: 'localhost',
      port: 8000,
      historyApiFallback: true,
      proxy: {
        '/graphql': {
          target: 'http://localhost:3000/web/',
        },

        // しょうもなRails
        '/sign_in': {
          target: 'http://localhost:3000/users/',
        },
        '/users': {
          target: 'http://localhost:3000/',
        },
      },
    },
  };
};
