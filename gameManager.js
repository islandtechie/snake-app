class GameManager {
    constructor(gameBoardWidth, gameBoardheight) {
        this.gameBoard = new GameBoard(gameBoardWidth, gameBoardheight);
        this.snake = new Snake();
    }

    initializeGame() {
        this.gameBoard.draw();
        this.drawSnake();
    }

    drawSnake() {
        this.gameBoard.ctx.fillStyle = 'black';
        for (let i = 0; i < this.snake.position.length; i++) { 
            this.gameBoard.ctx.fillRect(this.snake.position[i].x, this.snake.position[i].y, this.snake.size, this.snake.size);
        }
    }
}