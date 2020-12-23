(function () {
    class Person{
        name: string;
        age: number;

        constructor(name: string,age: number){
            this.name = name;
            this.age = age;
        }

        toString(){
            console.log("Person...");
        }
    }

    /* 在定义类的时，可以使用 extends 继承于其他类
        - 语法: A extends B; 此时 B 是父类，A 是子类
        - 使用继承后，子类将会拥有父类的所有方法和属性
        - 通过继承可以将多个具有共同特征的类共有的代码抽取出来 
        - ocp 原则：对扩展开发，对修改关闭
        - 方法重写：如果在子类中定义了和父类相同的方法，则子类方法会覆盖掉父类方法(针对于子类实例)
    */
    class Student extends Person{
        score: number;

        constructor(name: string,age: number,score: number){
            //通过 super - 如果在子类中写了构造函数，在子类构造函数中必须调用父类的构造方法
            super(name,age);
            this.score = score;
        }

        toString(){
            console.log("Stundet..");
        }
    }

    class Teacher extends Person{
        price: number;

        constructor(name: string,age: number,price: number){
            super(name,age);
            this.price = price;
        }

        toString(){
            console.log("Teacher....");
        }
    }

    let stu = new Student("巴御前",16,100);
    console.log(stu);
    stu.toString();

    let tea = new Teacher("咕哒夫",17,100000);
    console.log(tea);
    tea.toString();
})();