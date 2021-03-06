"use strict";
(function () {
    /*
    可以使用 abstract 关键字用于声明类
        - 抽象类最主要的区别是：不能用来创建对象
        - 抽象类就是用来被继承的类
    */
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    /*
    如果一个非抽象类继承了抽象类，必须实现对应的抽象方法
        - 非抽象类“Student”不会实现继承自“Person”类的抽象成员“toString”。
    */
    // class Student extends Person{
    //     score: number;
    //     constructor(name: string,age: number,score: number){
    //         //通过 super - 如果在子类中写了构造函数，在子类构造函数中必须调用父类的构造方法
    //         super(name,age);
    //         this.score = score;
    //     }
    // }
    class Teacher extends Person {
        constructor(name, age, price) {
            super(name, age);
            this.price = price;
        }
        toString() {
            console.log("Teacher....");
        }
    }
    // let p1 = new Person("巴御前",18); //无法创建抽象类的实例。ts(2511)
})();
