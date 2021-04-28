const path = require('path');

var SRC_DIR = path.join(__dirname, '/public/src');
var DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};

// module: {
//   rules: [
//     {
//       test: /\.m?js$/,
//       exclude: /(node_modules|bower_components)/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         }
//       }
//     }
//   ]
// }
