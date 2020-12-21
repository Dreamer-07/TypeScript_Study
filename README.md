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

1. 字面量 类型

   代表该变量只能使用指定的字面量赋值

   ```typescript
   //1. 字面量 - 该变量只能使用指定的字面量赋值
   let a : 10; //代表该变量只能使用指定的字面量赋值
   // a = 11; //不能将类型“11”分配给类型“10”。ts(2322)
   ```

2. any 类型

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

3. unknown

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

4. void 

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

5. never

   表示永远不返回结果，多用于专门报错的函数

   ```typescript
   //5. never - 表示永远不返回结果，多用于专门报错的函数
   function testB():never{
       throw new Error('出错啦!');
   }
   ```

6. object 表示一个 JS 对象

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
       info?:string; //在属性名后面加上?，表示该属性可有可无
       [propName:string]:any; //表示任意类型的数据(键名为 string 类型即可)
   };
   // b = {name:'abc'}; //类型 "{ name: string; }" 中缺少属性 "age"，缺少必要属性时就会报错
   b = {name:"Tom",age:16}; //其他属性可有可无
   ```

   赋值时，如果赋值的对象属性中**不包含必要的属性**(上述的 name 和 age)就会报错

   可以在对应的属性名(上述的 info)后加上 ?，表示可有可无

   如果赋值的对象还包含了额外的值，也会报错，可以使用 `[propName:string]:any` 表示可以接收任意类型的值