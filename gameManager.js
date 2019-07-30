class GameManager {
    constructor(gameBoardWidth, gameBoardheight) {
        this.gameBoard = new GameBoard(gameBoardWidth, gameBoardheight);
        this.snake = new Snake();
        
    }

    initializeGame() {
        this.gameBoard.draw();
        this.drawSnake();
        this.drawApple();
    }

    drawSnake() {
        this.gameBoard.ctx.fillStyle = 'black';
        for (let i = 0; i < this.snake.position.length; i++) { 
            this.gameBoard.ctx.fillRect(this.snake.position[i].x, this.snake.position[i].y, this.snake.size, this.snake.size);
        }
    }

    drawApple() {
        this.apple = new Apple(310, 310);
        this.gameBoard.ctx.fillStyle = "red";
        this.gameBoard.ctx.beginPath(); 
        this.gameBoard.ctx.arc(this.apple.position.x, this.apple.position.y, this.apple.size, 0, 2 * Math.PI, false); 
        this.gameBoard.ctx.fill();
    }

    updateScreen() {
        
    }
}