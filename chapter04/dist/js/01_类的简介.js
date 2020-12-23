"use strict";
/*
使用 class 关键字创建一个类
    对象中主要包含了两个部分
        - 属性
            1. 直接定义的属性为实例属性，只能通过实例对象访问
            2. 使用 static 关键字定义的属性为 类属性(静态属性)，可以通过类直接访问
            3. 使用 readonly 关键字定义的只读属性
        - 方法：和属性的1，2相同
*/
class Person {
    constructor() {
        //定义实例属性
        this.name = "巴御前";
        this.age = 18;
        //使用 readonly 定义只读属性
        this.tags = "suki";
    }
    //实例方法
    testA() {
        console.log("testA");
    }
    //静态方法
    static testB() {
        console.log("testB");
    }
}
//使用 static 定义类属性(静态属性)
Person.info = "我是人";
const per = new Person();
console.log(per);
console.log(per.name, per.age);
//通过类去访问静态属性
console.log(Person.info);
console.log(per.tags);
// per.tags = "欸嘿嘿嘿"; //无法分配到 "tags" ，因为它是只读属性。ts(2540)
per.testA();
Person.testB();
