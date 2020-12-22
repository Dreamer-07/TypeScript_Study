# TypeScript

# 第一章 简介

- TypeScript 是什么
  1. 以 JavaScript 为基础构建的语言
  2. 一个 JavaScript 的超集
  3. 可以在任何支持 JavaScript 的平台中执行
  4. TypeScript 为 JavaScript 提供了扩展，并添加了 **类型**
  5. TS 不能直接被 JS 直接执行 - 需要编译
- 对比 JavaScript 增加的知识点
  1. 类型
  2. 支持 ES6 的新特性
  3. 强大的开发工具
  4. 添加 ES 不具备的新特性
  5. 丰富的配置选项

## 1.1 开发环境搭建

1. 下载 node.JS

2. 安装 node.JS

3. 使用 npm 全局安装 TypeScript

   ```
   npm i -g typescript
   ```

4. 创建一个 ts 文件

5. 使用 tsc命令 对 ts 文件进行编译

   ```javascript
   tsc xxx.ts
   ```

# 第二章 基本类型

- 类型声明

  - 是 TS 非常重要的一个特点

  - 通过类型声明可以指定 TS 中变量 (参数,形参) 的类型

  - 指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合**类型声明，符合则赋值，否则报错**

  - 简而言之，类型声明给变量设置了类型，使得变量**只能存储某种类型**的值

  - 语法

    ```typescript
    let 变量:类型;
    let 变量:类型 = 值;
    function fn(参数:类型):返回值类型{
    }
    ```

- 自动类型判断

  - TS 拥有自动的类型判断机制
  - 当对变量的声明和赋值是同时进行的时，TS 编译器会自动**判断变量的类型**

- 实例

  ```typescript
  //类型声明
  
  //--------------------
  //使用 JS 的语法声明变量
  let a;
  
  a = 123; 
  a = '巴御前';
  
  //使用 TS 的语法在声明变量时声明类型
  let b: string;
  
  b = '巴御前天下第一';
  // b = 123; //报错 - 不能将类型“number”分配给类型“string”
  
  //--------------------
  //如果需要声明和赋值同时进行
  let c : boolean = false;
  c = true;
  // c = 1; //不能将类型“number”分配给类型“boolean”
  
  //TS 优化：当声明和赋值同时进行时，类型声明可以不写，TS 会自动推断
  let d = '巴御前天下第一';
  // d = {}; //不能将类型“{}”分配给类型“string”
  
  //---------------------
  /* 
  JS 中的函数是不考虑参数的类型和个数的
  TS 中可以在形参后面加上对应的类型，限制调用函数时传入的实参类型
  */
  function sum(a: number,b: number){
      return a + b;
  }
  
  // sum(123); //TS 函数调用提示：应有 2 个参数，但获得 1 个。ts(2554)
  // sum(123,456,789); //TS 函数调用提示：应有 2 个参数，但获得 3 个。ts(2554)
  // sum("123","456"); //TS 函数调用提示：类型“string”的参数不能赋给类型“number”的参数。ts(2345)
  
  //----------------------
  //TS 中的函数也可以限制函数的返回值类型
  function pow(a: number,b: number):number{
      //不写返回值会报错
      //返回值类型错误会报错
      // return 'why';
      return a ** b;
  }
  
  //用来接收返回值的变量会自动进行类型推断
  let result = pow(4,2);
  // result = ''; //不能将类型“string”分配给类型“number”
  ```

- 类型

|  类型   |        例子        |              描述               |
| :-----: | :----------------: | :-----------------------------: |
| number  |     1,0,-1,2.5     |            任意数字             |
| string  | "byq",'byq',\`byq` |           任意字符串            |
| boolean |     true,false     |           true/false            |
| 字面量  |       其本身       |  限制变量的值就是该字面量的值   |
|   any   |         *          |            任意类型             |
| unknown |         *          |         类型安全的 any          |
|  void   |  空值(undefined)   |        没有值/undefined         |
|  never  |       没有值       |          不能是任何值           |
| object  |  {name:'巴御前'}   |         任意的 JS 对象          |
|  array  |  ['巴','御','前']  |         任意的 JS 数组          |
|  tuple  |       [4,5]        | 元素，TS 新增类型，固定长度数组 |
|  eunm   |     enum{A,B}      |       枚举 , TS 新增类型        |

1. **字面量** 类型

   代表该变量只能使用指定的字面量赋值

   ```typescript
   //1. 字面量 - 该变量只能使用指定的字面量赋值
   let a : 10; //代表该变量只能使用指定的字面量赋值
   // a = 11; //不能将类型“11”分配给类型“10”。ts(2322)
   ```

2. **any** 类型

   该变量可以用任意类型的数据赋值(显式 any)

   该变量可以用任意类型的数据赋值(显式 any)

   **注意：** any类型的变量可以赋值给其他不同类型的变量

   ```typescript
   //2. any - 该变量可以用任意类型的数据赋值(显式 any)
   let d : any;
   d = 10;
   d = '巴御前';
   d = true;
   //如果声明变量时不指定类型，默认也是 any(隐式 any)
   let e; //let e: any
   e = 10;
   e = '巴御前';
   e = false;
   
   //any类型的数据还可以赋值给其他变量，可能会导致隐式的错误且不会报错
   let g: string;
   // g = e; 
   ```

3. **unknown**

   该变量表示未知类型的值，相当于一个安全的any(**该变量的值不能直接赋值给其他变量**)

   ```typescript
   //3. unknown - 该变量表示未知类型的值，相当于一个安全的any(该变量的值不能直接赋值给其他变量)
   let f: unknown;
   f = '巴御前';
   f = 456;
   f = true;
   
   // g = f; //不能将类型“unknown”分配给类型“string” - 但如果时 unknown，在赋值给其他类型的变量时就会报错
   //3.1 使用 typeof 将 unknown 赋值给其他类型的变量
   if(typeof f === "string"){
       g = f; //不会报错
   }
   /* 3.2 使用类型断言 
       告诉解析器变量的实际类型    
       语法：
           1. 变量 as 类型
           2. <类型> 变量
   */
   g = f as string;
   g = <string> f;
   ```

   **类型断言**：告诉解析器变量的实际类型

   语法：

   1. 变量 as 类型
   2. <类型> 变量

4. **void** 

   表示空,多用于函数的返回值类型,表示没有返回值的函数

   ```typescript
   //4. void - 表示空,多用于函数的返回值类型,表示没有返回值的函数
   function testA():void{
       // return false; //不能将类型“boolean”分配给类型“void” - 不能返回其他数据类型
       //不返回值也不会报错
       //直接返回也可以
       // return;
       //返回 null 值 | undefined 也可以
       // return null;
       return undefined;
   }
   ```

5. **never**

   表示永远不返回结果，多用于专门报错的函数

   ```typescript
   //5. never - 表示永远不返回结果，多用于专门报错的函数
   function testB():never{
       throw new Error('出错啦!');
   }
   ```

6. **object** 表示一个 JS 对象

   由于 JS 中的函数和数组也算对象，直接使用 object 会导致达不到预期的效果

   可以使用 {} 不会对象类型做限制，而对对象内的属性做限制

   ```typescript
   //6. object 表示一种对象
   let a:object;
   // 由于 JS 中的函数和数组也算对象，直接使用 object 会导致达不到预期的效果
   a = {};
   a = function(){};
   // 可以使用 {} 不会对象类型做限制，而对对象内的属性做限制
   //6.1 语法: {属性名:数据类型,属性名:数据类型}
   let b:{
       name:string,
       age:number,
   };
   // b = {}; //报错,没有包含必要的属性
   // b = {name:"abc",age:16,info:"阿巴阿巴"}; //报错,包含了额外的属性
   b = {name:"巴御前",age:16}
   
   let b2:{
    name:string,
       age:number,
    info?:string; //在属性名后面加上?，表示该属性可有可无
   };
b2 = {name:"巴御前",age:16}; //缺少可有可无的属性也不会报错
   b2 = {name:"巴御前",age:16,info:'Archer'}; //具有可有可无的属性也不会报错
   // b2 = {name:"巴御前",age:16,a:"a",b:"b"}; //当有额外的属性赋值时，也会报错
   
   
   let b3: {
       name:string,
       age:number,
       [propName:string]:any //表示任意类型的数据(键名为 string 类型即可)
   }
   // b3 = {}; //缺少必须的属性依然会报错
   b3 = {name:"巴御前",age:16}; //缺少可有可无的属性也不会报错
   b3 = {name:"巴御前",age:16,a:"a",b:"n"}; //具有额外的属性也不会报错
   ```
   
   赋值时，如果赋值的对象属性中**不包含必要的属性**(上述的 name 和 age)就会报错
   
   可以在对应的属性名(上述的 info)后加上 ?，表示可有可无
   
   如果赋值的对象还包含了额外的值，也会报错，可以使用 `[propName:string]:any` 表示可以接收任意类型的值
   
7. **Function** 表示一个函数

   但开发中不会直接使用 Function，而是使用 箭头函数()=>{} **限制函数的结构(形参个数，类型，返回值类型)**

   ​	语法：(参数1(参数名没有限制):参数类型[,参数2(参数名没有限制):参数类型....]) => 返回值类型;

   ```typescript
   //7: Funtion 表示一个函数
   let c : Function;
   c = () => {};
   /* 
   但开发中不会直接使用 Function，而是使用 箭头函数()=>{} 限制函数的结构(形参个数，类型，返回值类型)
   语法: 
       (参数1(参数名没有限制):参数类型[,参数2(参数名没有限制):参数类型....]) => 返回值类型;
   */
   let d : (a:number,b:number) => number;
   d = (c,d) => c+d; //赋值符合定义的函数对象
   // d = () => "Abc"; //返回值类型错误时会报错
   d = function () { //形参要么都写要么都不写
       return 10;
   }
   ```

   赋值时如果函数对象的返回值类型错误，也会报错

   形参要么都写都不写

8. **array** 表示 JS 数组

   开发中不会直接使用\[](任意类型的数组)，而是会**对数组中保存的元素进行一个约束**

   ​	语法：

   1. 类型[]
   2. Array<类型>

   ```typescript
   //8. array 表示JS 数组
   /* 
   开发中不会直接使用[](任意类型的数组)，而是会对数组中保存的元素进行一个约束
   语法：
       1. 类型[]
       2. Array<类型>
   */
   let e: string[]; //存储字符串元素的数组
   e = ['巴','御','前'];
   // e = [1]; //元素类型不符合时就会报错
   
   let f : Array<number>; //存储数值元素的数组
   f = [1,2,3];
   ```

9. **tuple** 元组(TS中的新元素) 表示固定长度的数组

   ​	语法：[类型1[,类型2...]]

   ```typescript
   //9. tuple 元组(TS中的新元素) 表示固定长度的数组
   //语法：[类型1[,类型2...]]
   let g: [string,string,string];
   g = ["巴","御","前"];
   ```

   如果元素的个数过多或过少都会报错

   元素类型错误时也会报错

10. **enum** 枚举 表示一定数量的可能的值

    默认情况下 TS 会帮助我们为枚举属性默认赋值(0,1,2...),也可以手动赋值(那就必须全都手动赋值)

    ​	语法：enum 类型名{枚举属性名\[= 值][,枚举属性名]}

    ```typescript
    //10. enum 枚举 表示一定数量的可能的值
    //语法: enum 类型名{枚举属性名[=值][,枚举属性名]}
    //默认情况下 TS 会帮助我们为枚举属性默认赋值(0,1,2...),也可以手动赋值(那就必须全都手动赋值)
    enum Gender{
        Male,
        Famale
    }
    
    //可以在对象限制中使用 Gender 表示该属性只能接收 Gender 类的属性
    let i : {name: string , gander:Gender};
    i = {name:"巴御前",gander:Gender.Famale};
    ```

11. 扩展

    1. | 运算符，连接多个类型(联合类型)，赋值时满足一个就行

       ```typescript
       //*. 可以使用 | 表示可以连接多个类型 - 联合类型
       let b : 123 | 456;
       b = 123; 
       b = 456;
       // b = 345;
       
       let c : string | boolean;
       c = '巴御前天下第一';
       c = true;
       // c = 123;
       ```

    2. & 运算符，连接多个类型(联合类型)，赋值时需要满足多个才行

       ```typescript
       //*. & 可以连接多个类型，表示赋值的数据必须满足两个类型
       //通常不会直接类型限制变量
       // let j : string & number; //错误示范
       
       //用于限制多个对象的合并
       let j : {name:string} & {age:number}
       j = {name:"巴御前",age:16};
       ```

    3. 类型别名，可以为一个要重复使用的类型定义别名

       ```typescript
       type myType = 1 | 2 | 3 | 4 | 5;
       
       let k : myType; //直接使用别名即可
       let l : myType;
       k = 2;
       ```


# 第三章 编译选项

1. 自动编译文件

   在使用 tsc 命令编译文件时。可以在后面加上 -w 参数，表示实时编译

   ```
   tsc xxx.ts -w; //监视该文件的改变
   ```

   在一定的时间间隔后如果文件发生改变，就会自动编译 

2. 自动编译整个项目 

   在项目的根目录下编写一个 `tsconfig.json` 文件 ，用于配置编译的信息

   ```
   tsc --init //也可以调用该命令生产初始化文件
   ```

   在终端打开根目录的路径，直接使用 tsc 命令即可，也可以加上 -w 表示监听整个项目的 TS 文件

   **tsconfig.json 是 ts 编译器的配置文件，ts 编译器可以根据它的信息来对代码进行编译**

3. tsconfig.json 的配置选项

   (从外到里)

   - include

     - 可以指定要编译的 TS 文件所在的**目录**

     - 默认值：["\*\*/*"]

     - 示例

       ```json
       "include":["./src/**/*","tests/**/*"
       ```

   - exclude

     - 定义需要排除在外的**目录**

     - 默认值：["node_modules","bower_components","jspm_packages"]

     - 示例

       ```json
       "exclude": ["./src/hello/**/*"]
       ```

   - extends

     - 定义继承的配置文件(后缀名默认为 json)

     - 示例

       ```json
       "extends": "./config/base"
       ```

   - files

     - 指定被编译文件的列表,只要需要**编译的文件少时才会用到**

     - 示例

       ```json
       "files": [
           "1.ts",
           "2.ts"
       ]
       ```

     - 列表中的文件都会被 TS 编译器所编译

   - **compilerOptions - 编译器选项**

     - 在 compilerOptions 中包含了多个子选项，用来**完成编译的配置**

     - 项目选项(子选项)

       1. **target** 用来指定 TS 被编译成 JS 的版本

          - 默认值："es3"

          - 可选值：'es3', 'es5', 'es6', (=) 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'

              "target" : "ES2015",

       2. **module** 指定要使用的模块化的规范

          - 可选值：'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'esnext'

       3. **lib** 用来指定项目中要使用的库(**默认不改**)

       4. **outDir** 用来指定编译后文件所在的目录

       5. **outFile**  将代码合并为一个文件(**不常用**)

       6. **allowJs** 将 JS 文件进行编译，默认是 false

       7. **checkJs** 是否检查 JS 代码符合语法规范，默认是 false

       8. **removeComments** 是否移除注释，默认为 false

       9. **onEmit** 是否**不生成**编译后的文件,默认为 false

       10. **onEmitOnError** 出现异常时是否**不生成**编译后的文件，默认为 false

       11. **strict** 所有严格检查的开关，默认为 true

       12. **alwaysStrict** 编译后的 JS 文件是否使用 **严格模式**，默认为 false

           使用 import / export 时会自动打开 JS 的严格模式

       13. **noImplicitAny**  不允许隐式的 any 类型，默认为 false

       14. **noImplicitThis**  不允许不明确类型的 this，默认为 false

       15. **strickNullChecks** 严格检查空值，默认为 false

# 第四章 使用 webpack 打包 TS

## 4.1 基础使用

1. 使用 `npm init -y` 初始化项目，生成对应的 **package.json**

2. 安装需要的依赖

   ```javascript
   npm i -D(表示是开发依赖) webpack(打包工具) webpack-cli(webpack的命令行) typescript ts-loader(集成需要)
   ```

3. 编写 wenpack 的配置文件 `wenpack.config.js `

   ```js
   // 导入一个 NodeJS 中的模块 path
   const path = require('path');
   
   // webpack 中的所有配置信息都应该写在 module.exports 中
   module.exports = {
       // 指定入口文件
       entry: "./src/ts/index.ts",
   
       // 指定打包文件所在目录
       output: {
           // 指定打包文件的目录
           path: path.resolve(__dirname,'dist'),
           // 指定打包后的文件名
           filename: "bundle.js"
       },
   
       // 指定 webpack 打包时要是用的模块
       module: {
           // 指定要加载的规则
           rules: [
               {
                   // test 使用正则指定使用规则的文件
                   test: /\.ts$/,
                   // 要使用的 loader
                   use: 'ts-loader',
                   // 要排除的文件
                   exclude: /node_modules/
               }
           ]
       }
   }
   ```

4. 在项目的根目录下使用 `tsc -init` 生成 tsconfig.json 配置文件

5. 配置  TS 的编译选项

   ```json
   {
       "compilerOptions": {
           "target" : "ES2015",
           "module" : "ES2015",
           "strict" : true
       }
   }
   ```

6. 修改 package.json，加上 **bulid 命令**

   ```json
   {
       "name": "chapter03",
       "version": "1.0.0",
       "description": "",
       "main": "index.js",
       "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1",
           //添加此项
           "build": "webpack"
       },
       "keywords": [],
       "author": "",
       "license": "ISC"
   }
   ```

7. 在项目的根目录下执行 `npm run build` 命令

## 4.2 自动生成 HTML 文件

> 由 webpack 生成对应的 html 文件，该文件中引入项目中的其他资源(CSS/JS)

1. 使用命令 `npm i -D html-webpack-plugin`

2. 修改 `webpack.config.js` 文件中的配置 - 配置 webpack 的插件

   ```javascript
   // 导入一个 NodeJS 中的模块 path
   const path = require('path');
   // 引入 html 插件
   const WebpackHtmlPlugin = require('html-webpack-plugin');
   
   // webpack 中的所有配置信息都应该写在 module.exports 中
   module.exports = {
       // 指定入口文件
       entry: "./src/ts/index.ts",
   
       // 指定打包文件所在目录
       output: {
           // 指定打包文件的目录
           path: path.resolve(__dirname,'dist'),
           // 指定打包后的文件名
           filename: "bundle.js"
       },
   
       // 指定 webpack 打包时要是用的模块
       module: {
           // 指定要加载的规则
           rules: [
               {
                   // test 使用正则指定使用规则的文件
                   test: /\.ts$/,
                   // 要使用的 loader
                   use: 'ts-loader',
                   // 要排除的文件
                   exclude: /node_modules/
               }
           ]
       },
   
       //配置 webpack 插件
       plugins: [ 
           new WebpackHtmlPlugin()
       ]
   }
   ```

3. 重新直接编译指令 `npm run build` 执行编译

   ![image-20201222195453276](README.assets/image-20201222195453276.png)

   (编译结果 - html 为自动生成且以及导入了 bundle.js) 

4. 可以在 **配置 webpack 插件中** 配置生成的 html 信息

   ```javascript
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
       )
   ]
   ```



