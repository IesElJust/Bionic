const path = require('path');

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
    target: 'node'
    
};

module.exports = webpackInitConfig;
