const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')

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
        plugins: [
            // html导入
            new HtmlWebpackPlugin({
                template: join(__dirname, "public/index.html")
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/, // 匹配所有的css文件
                    // css插入到dom中
                    use: ["style-loader", "css-loader"]
                }
            ]
        }

    }
}
