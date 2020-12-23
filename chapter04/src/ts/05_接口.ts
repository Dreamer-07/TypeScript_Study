(function(){
    // 可以使用 type 描述一个对象的类型
    type myType = {
        name: string,
        age: number;
    };

    // 定义一个变量的类型为通过 type 定义的类型，需要写对应的结构
    const obj: myType = {
        name: "巴御前",
        age: 18
        // info: "archer" //对象文字可以只指定已知属性，并且“info”不在类型“myType”中。ts(2322) 
    }

    /* 
    使用 interface 关键字声明一个接口
    接口的主要作用是定义一个类的结构(规范)，定义一个类应该包含哪些属性和方法
        - 可以在定义类的使用去限制类的结构 
        - 接口中的所有属性(方法)都不能定义实际的值 

    同时，接口也可以作为一个类型声明去使用
        - 与类型别名不同的时，接口可以定义多个重名，使用时以全部和起来的为准
    */
    interface myInterface {
        name: string,
        age: number;
    };

    interface myInterface {
        gender: 1 | 0;
    }

    //作为类型声明
    const obj2: myInterface = {
        name: "巴御前",
        age: 16,
        gender: 1
        // info:"archar" //  对象文字可以只指定已知属性，并且“info”不在类型“myInterface”中。ts(2322)
    }

    /* 
    可以在定义类时使用'实现(implements)' 接口
        - 实现：满足接口的要求
    */
    class Person implements myInterface{
        name: string;
        age: number;
        gender: 0 | 1;
        info: string;

        constructor(name: string,age: number,gender: 0 | 1,info: string){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.info = info;
        }

    }
})()