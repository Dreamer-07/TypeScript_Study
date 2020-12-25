// 导入一个 NodeJS 中的模块 path
const path = require('path');
// 引入 html 插件
const WebpackHtmlPlugin = require('html-webpack-plugin');
// 引入 clean 插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack 中的所有配置信息都应该写在 module.exports 中
module.exports = {
    // 指定入口文件
    entry: "./src/ts/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname,'dist'),
        // 指定打包后的文件名
        filename: "bundle.js",
        // 设置 webpack 不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    // 指定 webpack 打包时要是用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 使用正则指定使用规则的文件
                test: /\.ts$/,
                // 要使用的 loader
                use: [
                    //复杂配置 - 配置 babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 配置对应的选项
                        options: {
                            //设置预定义环境
                            presets:[
                                [
                                    //指定环境使用的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        // 配置要兼容的目标游览器
                                        targets: {
                                            "chrome":"88",
                                            "ie":"11"
                                        },
                                        // 指定 corejs 的版本(写最大位数的即可)
                                        "corejs":"3",
                                        /* 
                                        指定使用 corejs 的方式
                                            usage - 按需加载
                                        */
                                       "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    //简单配置 - 配置 TS
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            }
        ]
    },

    //配置 webpack 插件
    plugins: [
        new WebpackHtmlPlugin(
            //配置生成的 html 文件
            {
                //可以指定生成 html 文件中 title 标签体的内容
                // "title": "巴御前天下第一",

                // template 属性可以指定生成文件参考的模板
                "template": "./src/html/template.html"
            }
        ),
        //注册
        new CleanWebpackPlugin()
    ],

    // 设置引用模块
    resolve: {
        //设置模块化文件的后缀名
        extensions: ['.ts','.js']
    }
}