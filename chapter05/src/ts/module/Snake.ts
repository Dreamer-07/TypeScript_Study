// 定义蛇类
class Snake{
    // 对应的蛇(容器)元素
    private element: HTMLElement;
    // 蛇头
    private head: HTMLElement;
    // 蛇身(包括蛇头) - HTMLCollection:一个动态的 HTML 元素集合
    private body: HTMLCollection;

    constructor(){
        this.element = document.getElementById("snake")!;
        this.head = this.element.querySelector("#head") as HTMLElement;
        this.body = this.element.getElementsByTagName("div");
    }

    //获取蛇头的 X 坐标
    get X(){
        return this.head.offsetLeft;
    }

    //设置蛇头 X 坐标
    set X(value){
        //如果坐标相同，就不修改
        if(this.X === value){
            return;
        }
        //判断是否装到墙了
        if(value < 0 || value > 290){
            //如果撞到就抛出异常
            throw new Error("撞到墙了,Game Over!");
        }
        /* 
        防止掉头
            1. 判断是否存在第二个身体部分 && 判断移动的位置是否是第二个身体的位置
            2. 判断是向哪个方向前进，向其的反方向前进即可
        */
        if(this.body[1] && value === (this.body[1] as HTMLElement).offsetLeft){
            if(this.X > value){ // 如果是向左掉头。就向右前进
                value = this.X + 10;
            }else{
                value = this.X - 10 // 如果是向右掉头，就向左前进
            }   
        }
        // 在移动蛇头之前，先移动蛇的身体
        this.moveBody();

        this.head.style.left = value + "px";
    }

    //获取蛇头的 Y 坐标
    get Y(){
        return this.head.offsetTop;
    }

    //设置蛇头的 Y 坐标
    set Y(value){
        //如果坐标相同，就不修改
        if(this.Y === value){
            return;
        }

        //判断是否装到墙了
        if(value < 0 || value > 290){
            //如果撞到就抛出异常
            throw new Error("撞到墙了!");
        }

        // 和 X 同理
        if(this.body[1] && value === (this.body[1] as HTMLElement).offsetTop){
            if(this.Y > value){ // 如果是向左掉头。就向右前进
                value = this.Y + 10;
            }else{
                value = this.Y - 10 // 如果是向右掉头，就向左前进
            }  
        }

        // 在移动蛇头之前，先移动蛇的身体
        this.moveBody();

        this.head.style.top = value + "px";
        
        // 检查蛇头和蛇身是否撞到
        this.checkHeadBody();
    }



    //升级时添加身体
    addBody(){
        /* 
        this.element.insertAdjacentHTML：向当前元素内部添加 HTML 代码
            - 第一个参数：指定位置; beforeend:结束标签之前
            - 第二个参数：要添加的 HTML 代码
        */
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    };

    // 移动身体
    moveBody(){
        //从最后一个开始移动蛇的身体,蛇头由 set 方法移动，这里指移动身体
        for(let i = this.body.length - 1; i > 0;i--){
            // 获取前一个身体的位置，将其赋值给当前身体
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.body[i - 1] as HTMLElement).offsetTop;

            (this.body[i] as HTMLElement).style.left = X + "px";
            (this.body[i] as HTMLElement).style.top = Y + "px";
        }
    }

    // 检查蛇头和蛇身是否撞到
    checkHeadBody(){
        for(let i = 1; i < this.body.length; i++){
            // 获取身体元素
            let bd = (this.body[i] as HTMLElement);
            // 判断是否相撞
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //如果相等，就抛出异常
                throw new Error("吃到身体了!");
            }
        }
    }
}

export default Snake;