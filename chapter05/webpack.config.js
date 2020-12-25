// 导入 path 模块
const path = require("path");
// 导入 Html 插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入 clean 插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 配置 webpack
module.exports = {
    // 指定入口文件
    entry: "./src/ts/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname,'dist'),
        // 指定打包后的文件名
        filename: "bundle.js",
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    // 指定 webpack 打包时使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            //对 TS 文件进行处理
            {
                // test 使用正则指定使用规则的文件
                test: /\.ts$/,
                // 要使用的 loader
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                  "@babel/preset-env",
                                  {
                                    targets:{
                                        "chrome": "87"
                                    },
                                    "corejs": "3",
                                    "useBuiltIns": "usage"
                                  }  
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            },
            //对 Less 文件进行处理
            {
                test: /\.less$/, 
                use:[
                    "style-loader",
                    "css-loader",
                    //在这里引入 postcss，对编译后的 css 文件进行修改
                    {
                        //指定加载器
                        loader: "postcss-loader",
                        //配置
                        options: {
                            postcssOptions: {
                                //配置要使用的插件
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // 兼容各个游览器最近的两个版本
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    //配置 webpack 插件
    plugins: [
        new HtmlWebpackPlugin({
            //指定使用的模板
            "template": "./src/template/index.html"
        }),
        new CleanWebpackPlugin()
    ],

    resolve: {
        extensions: [".ts",".js"]
    }
}