const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'html/js/app': path.resolve('./src/app')
    },
    output: {
        path: path.resolve('.'),
        filename: '[name].js',
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js'],
    },
};
