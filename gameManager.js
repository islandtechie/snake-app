class GameManager {
    constructor(gameBoardWidth, gameBoardheight) {
        this.gameBoard = new GameBoard(gameBoardWidth, gameBoardheight);
        this.snake = new Snake();
        this.inputHandler = new InputHandler(this.snake);       
    }

    initializeGame() {
        this.gameBoard.draw();
        this.drawSnake();
        this.drawApple();
    }

    detectCollision() {
        if (this.snake.body[0].x === this.gameBoard.width || 
            this.snake.body[0].x === -this.snake.size ||
            this.snake.body[0].y === this.gameBoard.titleHeight - this.snake.size || 
            this.snake.body[0].y === this.gameBoard.canvas.height) {
            console.log(this.snake.body[0].x);
            console.log(this.snake.body[0].y);
            console.log('ok hit');
        }
    }

    drawSnake() {
        this.gameBoard.ctx.fillStyle = 'black';
        for (let i = 0; i < this.snake.body.length; i++) {
            this.gameBoard.ctx.fillRect(this.snake.body[i].x, this.snake.body[i].y, this.snake.size, this.snake.size);
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
        this.gameBoard.draw();
        this.drawApple();
        this.snake.move();
        this.drawSnake();
        this.detectCollision();
    }

    clearGameBoard() {
        
        this.gameBoard.ctx.clearRect(0,0,800,600);
    }
}