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

//*. 可以使用 | 表示连接多个类型 - 联合类型
let b : 123 | 456;
b = 123; 
b = 456
// b = 345;

let c : string | boolean;
c = '巴御前天下第一';
c = true;
// c = 123;