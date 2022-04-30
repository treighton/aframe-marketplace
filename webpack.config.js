const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
            // options related to how webpack emits results
    path:path.resolve(__dirname, "public/dist"), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "[name].js", // string (default)
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3001,
    },
  };