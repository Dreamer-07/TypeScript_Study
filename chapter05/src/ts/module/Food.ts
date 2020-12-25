//在 module 文件中负责类的编写

//Food 类
class Food{
    // 定义一个与之对应绑定的元素
    private _element: HTMLElement;

    constructor(){
        // 通过 id 找到页面中对应的组件并初始化
        // 由于 TS 为了防止找不到对应的元素，这里会报一个错 不能将类型“HTMLElement | null”分配给类型“HTMLElement”。
        // 可以在后面加上一个 ! 表示'断言'
        this._element = document.getElementById("food")!;
    }

    // 获取水平横轴坐标
    get X(){
        return this._element.offsetLeft;
    }

    // 获取水平纵向坐标
    get Y(){
        return this._element.offsetTop;
    }

    /* 
    设置一个方法在蛇将 Food 吃掉之后，需要改变 Food 的位置 
        - 规定：
            1. 位置只能生成在 0-290 的位置(X,Y);
            2. 由于 Snake 一次走的间距为10，所以还需要规定 Food 的位置只能生成在以 10 为整数的位置
    */
    change(){
        /* 
        通过 Math.random 生成 0~1 的数(不包括0,1),将得到的数 * 29,得到 0 ~ 29 的数
        通过 Math.round 四舍五入得到的数(包括0,29),在将得到的数 * 29,得到坐标
        */
        this._element.style.left = (Math.round(Math.random() * 29) * 10 + "px")
        this._element.style.top = (Math.round(Math.random() * 29) * 10 + "px")
    }
}

//设置对外暴露接口
export default Food;