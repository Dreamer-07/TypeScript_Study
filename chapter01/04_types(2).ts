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


//9. tuple 元组(TS中的新元素) 表示固定长度的数组
//语法：[类型1[,类型2...]]
let g: [string,string,string];
g = ["巴","御","前"];


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

//*. & 可以连接多个类型，表示赋值的数据必须满足两个类型
//通常不会直接类型限制变量
// let j : string & number; //错误示范

//用于限制多个对象的合并
let j : {name:string} & {age:number}
j = {name:"巴御前",age:16};


//*. 类型别名，可以为一个要重复使用的类型定义别名
type myType = 1 | 2 | 3 | 4 | 5;

let k : myType; //直接使用别名即可
let l : myType;
k = 2;
