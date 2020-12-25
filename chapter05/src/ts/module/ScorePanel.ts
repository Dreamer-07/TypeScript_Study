// 信息面板
class ScorePanel{
    //设置默认的分数和信息
    private score = 0;
    private level = 1;
    //设置分数和信息对应的元素
    private scoreElement: HTMLElement;
    private levelElement: HTMLElement;
    //设置最大等级和升级分数
    private maxLevel: number;
    private upScore: number;
    
    constructor(maxLevel: number = 10,upScore: number = 10){
        this.scoreElement = document.getElementById("score_info")!;
        this.levelElement = document.getElementById("level_info")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    };

    // get set
    getSocre(){
        return this.score;
    }

    getLevel(){
        return this.level;
    }

    //加分
    addScore(){
        //修改页面的信息以及保存的信息
        this.scoreElement.innerHTML = ++this.score + ""
        //如果分数满足了升级需要的，就提升等级 && 等级不超过指定的最大等级
        if(this.score % this.upScore == 0 && this.level < this.maxLevel){
            this.addLevel();
        }
    }

    //升级
    private addLevel(){
        this.levelElement.innerHTML = ++this.level + ""
    }
}

export default ScorePanel;