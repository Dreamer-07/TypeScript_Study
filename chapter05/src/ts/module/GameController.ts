// 游戏的控制器

// 导入使用的其他模块
import Food from "./Food";
import ScorePanel from "./ScorePanel"
import Snake from "./Snake";

class GameController{
    private food: Food;
    private scorePanel: ScorePanel;
    private snake: Snake;
    /* 
    游戏设计思路：不是按一下走一下，而是只控制方向，让其自己走
    所以还需要一个属性 direction，用来控制方向,初始化为空
    */
    private direction = ""; 
    // 蛇是否死亡,默认为 true
    private isLive = true;


    constructor(){
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();
        //调用初始化方法 - 开始游戏
        this.init();
    }

    //初始化游戏
    private init(){
        /* 
        开启全局监听键盘事件 
        虽然回调函数使用了 GC 中的，但回调函数的调用还是由 document 来执行
        这样会导致执行 keydownListener() 方法时 this 不是 GC 而是 document
        使用 bind() 函数可以绑定一个对象，该对象就是指定函数在执行时的 this 为指定的对象
        */
        document.addEventListener("keydown",this.keydownListener.bind(this));
        // 开始移动蛇
        this.run();
    }

    //键盘监听事件 - 负责修改移动的方向
    keydownListener(event:KeyboardEvent){
       //修改方向
       this.direction = event.key;
    }

    // 移动蛇,根据不同方向，自动移动蛇
    run(){
        // 获取当前蛇坐标
        let x = this.snake.X;
        let y = this.snake.Y;

        /* 
        event.key 获取按下键的名称 
            chrome      ie
            ArrowLeft   Left
            ArrowRight  Right
            ArrowUp     Up
            ArrowDown   Down
        */
        switch(this.direction){
            // 向左
            case "ArrowLeft":
            case "Left":
                x -= 10;
                break;
            // 向右
            case "ArrowRight":
            case "Right":
                x += 10;
                break;
            // 向上
            case "ArrowUp":
            case "Up":
                y -= 10;
                break;
            // 向下
            case "ArrowDown":
            case "Down":
                y += 10;
                break;
        }
        
        //判断是否吃到食物乐
        this.checkEat(x,y);

        //修改坐标
        try{
            this.snake.X = x;
            this.snake.Y = y;
        }catch (e){
            alert(e.message + " GEME OVER!");
            //设置死亡
            this.isLive = false;
        }
        

        /* 
        只有在存活时才可以执行定时器
        开启一个定时器，时蛇能向一个方向前进
        使用 bind 同理，修改 this 为 this
        同时，移动的间隔应该随着游戏 level 的提高而提高(增加难度)
        */
       this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.getLevel() - 1) * 20)
    }

    //判断是否吃到了
    checkEat(X: number,Y: number){
        if(X === this.food.X && Y === this.food.Y){
            // 改变食物位置
            this.food.change();
            // 分数+1
            this.scorePanel.addScore();
            // 添加身体
            this.snake.addBody();
        }
    }
}

export default GameController;