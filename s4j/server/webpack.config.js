const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
 
const basePath = __dirname;
const distPath = 'dist';

const webpackInitConfig = {
    mode: 'production',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: 's4j-server.js'
    },
    target: 'node',
    optimization:{
        minimizer: [new TerserPlugin({
            terserOptions: {
                output:{
                    max_line_len: 15
                }
              }
          
        })]
    }

  
    
};

module.exports = webpackInitConfig;