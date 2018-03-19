var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:'./index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    }
}