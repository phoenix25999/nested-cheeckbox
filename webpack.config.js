const path = require('path');

module.exports = {
   
    // Entry point that indicates where should the webpack starts bundling
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/ ,    // check for .js or .jsx files
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.(sa|sc|c)ss$/,     // checks for .css files
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {port: 3000},
    
    // Options for resolving module requests extensions that are used
    resolve: {extensions: ["*", ".js", ".jsx"], preferRelative: true},

    // Output point is where webpack should output the bundles and assets
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    }
}