"use strict";
(function () {
    // 定义一个变量的类型为通过 type 定义的类型，需要写对应的结构
    const obj = {
        name: "巴御前",
        age: 18
        // info: "archer" //对象文字可以只指定已知属性，并且“info”不在类型“myType”中。ts(2322) 
    };
    ;
    //作为类型声明
    const obj2 = {
        name: "巴御前",
        age: 16,
        gender: 1
        // info:"archar" //  对象文字可以只指定已知属性，并且“info”不在类型“myInterface”中。ts(2322)
    };
    /*
    可以在定义类时使用'实现(implements)' 接口
        - 实现：满足接口的要求
    */
    class Person {
        constructor(name, age, gender, info) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.info = info;
        }
    }
})();
