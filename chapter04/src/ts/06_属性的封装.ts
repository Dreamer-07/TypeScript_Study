(function(){
    class Person{
        /* 
        普通的实例属性可以直接被实例直接访问(修改),这样可能会导致数据不正确
        TS 可以为属性添加权限修饰符
            - public 默认(公有的) 修饰的属性可以在任意位置访问(修改)默认值
            - private (私有的) 私有属性只能在当前类内进行修改(访问)
                - 可以通过在类中添加 get/set 方法，让外部可以进行修改(访问)
            - protected 受保护的，只能在当前类/当前类的子类中进行访问
        */
        name: string;

        //使用 privtae 修饰属性
        private age: number;

        constructor(name: string,age: number){
            this.name = name;
            this.age = age;
        }

        //定义 getter & setter
        getAge(){
            return this.age;
        }

        setAge(age: number){
            //可以在方法中使用具体的逻辑控制属性
            if(age > 0){
                this.age = age;
            }
        }
    };

    let per = new Person("巴御前",18);
    console.log(per.name);
    console.log(per);
    // console.log(per.age); //报错 - 属性“age”为私有属性，只能在类“Person”中访问。ts(2341)


    //使用 protected 修饰符
    class A{
        //只能在当前类/当前类的子类中进行访问
        protected tag: string;
        private tag2: string;
        public tag3: string;

        constructor(tag: string,tag2: string,tag3:string){
            this.tag = tag;
            this.tag2 = tag2;
            this.tag3 = tag3;
        }
    }

    class B extends A{
        //在子类中，只能访问 public 和 protected 修饰符修饰的属性
        toString(){
            console.log(this.tag);
            // console.log(this.tag2); //属性“tag2”为私有属性，只能在类“A”中访问。ts(2341)
            console.log(this.tag3);
        }
    }


    //在 TS 中可以使用另一种方式指定 get/set
    class Student{
        //避免属性名和方法一样
        private _name: string;

        constructor(name: string){
            this._name = name;
        }

        //语法：get/set 属性名(){}
        get name(){
            return this._name;
        } 

        set name(name: string){
            this._name = name;
        }
    };
    let stu = new Student("呀哈哈");
    stu.name = "巴御前2"; //可以像 public 一样进行访问
    console.log(stu.name);

    //可以直接将属性定义在构造函数中
    class C{

        constructor(public name: string){
            this.name = name; 
        }

    }
    
})()