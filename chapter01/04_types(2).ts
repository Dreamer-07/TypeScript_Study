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

// [propName:string]:any; //表示任意类型的数据(键名为 string 类型即可)
