const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode:'none',
    entry:{
        'mathtest':'./src/index.js',
        'mathtest.min':'./src/index.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js',
        // 配置导出库的名称
        library:'mathtest',
        // 要实现一个库给别人用，必须支持多种方式引用：AMD/CommonJS/ESModule
        // 一般都是用 umd
        // 配置以何种方式导出库
        libraryTarget:'umd',
        // var (默认)/commonjs/commonjs2/this/window/global/umd
        // 配置要导出的模块中哪些子模块需要被导出
        // 它只有在 output.libraryTarget 被设置成 commonjs 或者 commonjs2 时使用才有意义
        libraryExport:'default'//导出哪个属性git
    },
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                // webpack 会产出一个个 chunk
                // 压缩阶段：这里的 include ，我推测是只作用于 entry
                include:/\.min\.js$/, //mathtest.min.js
                // 也可以这样
                // chunkFilter: (chunk) => {
                //     // Exclude uglification for the `mathtest.min` chunk
                //     if (chunk.name === 'mathtest.min') {
                //         return true;
                //     }
                //     return false;
                // },
            })
        ]
    }
}