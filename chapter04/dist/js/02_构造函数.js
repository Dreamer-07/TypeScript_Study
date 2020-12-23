"use strict";
class Person2 {
    //通过 construct 关键字定义构造函数
    constructor(name, age) {
        //在实例方法中，可以通过 this 获取当前使用的实例对象
        this.name = name;
        this.age = age;
    }
    toString() {
        console.log(this);
    }
}
let per1 = new Person2("巴御前", 16);
per1.toString();
let per2 = new Person2("巴御前", 18);
per2.toString();
