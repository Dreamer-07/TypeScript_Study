//TS 类型声明


//1. 字面量 - 该变量只能使用指定的字面量赋值
let a : 10; 
// a = 11; //不能将类型“11”分配给类型“10”。ts(2322)


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

//5. never - 表示永远不返回结果，多用于专门报错的函数
function testB():never{
    throw new Error('出错啦!');
}

//*. 可以使用 | 表示可以连接多个类型 - 联合类型
let b : 123 | 456;
b = 123; 
b = 456;
// b = 345;

let c : string | boolean;
c = '巴御前天下第一';
c = true;
// c = 123;