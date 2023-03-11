const path = require('path');


module.exports = {
    devtool: 'eval',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    }
};
