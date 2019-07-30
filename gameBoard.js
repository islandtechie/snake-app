class GameBoard {
    constructor(width, height) {
       this.width = width;
       this.height = height;
    }

    draw(context){
        context.fillStyle = "green";
        context.fillRect(0, 60, this.width, this.height);
    }

}