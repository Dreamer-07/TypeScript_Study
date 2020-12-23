// 在定义函数/类时，如果类型不明确就可以使用泛型

/* 定义函数时使用泛型
    - 对应的形参和返回值的类型也可以定义为泛型 T

*/
function testA<T>(value: T):T {
    return value;
}

//调用函数时指定泛型
console.log(testA("巴御前")); // 不指定泛型，TS可以自动对类型进行推断
console.log(testA<String>("巴御前")); //使用<类型> 指定泛型


console.log("-----");
//可以定义多个泛型
function testB<T,K>(value: T,value2: K): T{
    console.log(value2);
    return value;
}

console.log(testB("天下第一","巴御前"));

//对于的泛型 T 可以限制其为某个 类/接口 的子类
interface myInterface{
    length: number;
}

//语法：T extends 类/接口 - 表示泛型必须是指定接口/类的子类
function testC<T extends myInterface>(value: T):number {
    return value.length;
}

testC("巴御前"); //字符串拥有属性 length

//定义类也可以使用泛型
class MyClass<T>{
    name: T;
    constructor(name: T){
        this.name = name;
    }
}

let mc = new MyClass<string>("巴御前"); //可以使用 <> 指定泛型，也可以不指定，但建议指定
console.log(mc);
