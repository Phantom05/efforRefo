
var path = require('path');

module.exports = {
  entry: {
    entry: './src/entry.js'
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist/js')
  },
  module:{
    rules:[{
      test:/\.js$/,
      include:[
        path.resolve(__dirname,'src')
      ],
      exclude:/node_modules/,
      use:{
        loader:'babel-loader',
        options:{
          presets:['env']
        }
      }
    }]
  },
  devtool:'source-map',
  mode:'development'
};