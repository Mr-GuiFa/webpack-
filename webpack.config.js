const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const { VueLoaderPlugin } = require("vue-loader")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

{
    module.exports = {
        mode: 'development',
        // 导入
        entry: "./src/main.js",
        output: {
            // 导出
            path: path.join(__dirname, "lib"),
            filename: "bundle.js",
            clean: true
        },

        devServer: {
            open: true,
            port: 30000
        },
        plugins: [
            // html导入
            new HtmlWebpackPlugin({
                template: join(__dirname, "public/index.html"),

            }),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.css$/, // 匹配所有的css文件
                    // css插入到dom中
                    use: [ "css-loader"]
                },
                {
                    test: /\.less$/, // 匹配所有的css文件
                    // css插入到dom中
                    use: ["css-loader", "less-loader"]
                },
                {//图片打包
                    test: /\.(png|jpg|gif|jpeg)$/i,
                    type: "asset",
                    parser: {
                        dataUrlCondition: {
                            // 字节
                            maxSize: 2 * 1024
                        },
                    },
                    generator: {
                        filename: 'images/[hash:6][ext]',

                    }

                },
                {//字体打包
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    type: "asset/resource",
                    generator: {
                        filename: 'fonts/[name].[hash:6][ext]'
                    }
                },
                {
                    test: /\.js$/,
                    use: ["babel-loader"]
                }, {
                    test: /\.vue$/,
                    loader: "vue-loader"
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },

            ],

        },


    }
}
