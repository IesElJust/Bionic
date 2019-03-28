const path = require('path');

const basePath = __dirname;
const distPath = 'dist';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: 's4j-client.js'
    }
};

module.exports = webpackInitConfig;
