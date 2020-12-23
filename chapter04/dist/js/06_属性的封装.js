"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //定义 getter & setter
        getAge() {
            return this.age;
        }
        setAge(age) {
            //可以在方法中使用具体的逻辑控制属性
            if (age > 0) {
                this.age = age;
            }
        }
    }
    ;
    let per = new Person("巴御前", 18);
    console.log(per.name);
    console.log(per);
    // console.log(per.age); //报错 - 属性“age”为私有属性，只能在类“Person”中访问。ts(2341)
    //使用 protected 修饰符
    class A {
        constructor(tag, tag2, tag3) {
            this.tag = tag;
            this.tag2 = tag2;
            this.tag3 = tag3;
        }
    }
    class B extends A {
        //在子类中，只能访问 public 和 protected 修饰符修饰的属性
        toString() {
            console.log(this.tag);
            // console.log(this.tag2); //属性“tag2”为私有属性，只能在类“A”中访问。ts(2341)
            console.log(this.tag3);
        }
    }
    //在 TS 中可以使用另一种方式指定 get/set
    class Student {
        constructor(name) {
            this._name = name;
        }
        //语法：get/set 属性名(){}
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
    }
    ;
    let stu = new Student("呀哈哈");
    stu.name = "巴御前2"; //可以像 public 一样进行访问
    console.log(stu.name);
    //可以直接将属性定义在构造函数中
    class C {
        constructor(name) {
            this.name = name;
            this.name = name;
        }
    }
})();
