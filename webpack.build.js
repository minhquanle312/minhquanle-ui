const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'minhquanle-ui/es': path.resolve(__dirname, 'src/'),
      // src: path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /\.module.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/public/icons/[name].[ext]',
        },
      },
      // {
      //   type: 'javascript/auto',
      //   test: /\.json$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: './json/[contenthash].[ext]',
      //       },
      //     },
      //   ],
      // },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    '@antscorp/icons': '@antscorp/icons',
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: {
            warnings: false,
            drop_console: true,
            pure_funcs: ['console.log'], // Remove console.log statements
          },
        },
      }),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
}
