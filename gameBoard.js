class GameBoard {
    constructor(width, height) {
       this.width = width;
       this.height = height;
       this.canvas = document.getElementById('game-screen');
       this.ctx = this.canvas.getContext('2d');;
    }

    draw(){
        this.drawScoreLabel();
        this.drawGameTitle()
        this.drawBoard();
    }

    drawScoreLabel() {
        this.ctx.fillStyle = "red";
        this.ctx.beginPath(); 
        this.ctx.arc(40, 40, 10, 0, 2 * Math.PI, false); 
        this.ctx.fill();

        this.ctx.font = '28px fantasy';
        this.ctx.fillStyle = "black";
        this.ctx.fillText('0', 55, 50);
    }

    drawGameTitle() {
        this.ctx.font = '32px fantasy';
        this.ctx.fillStyle = "black";
        this.ctx.fillText('SNAKE', 365, 50);
    }

    drawBoard() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 60, this.width, this.height);
    }

}