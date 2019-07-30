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

    drawSnake() {
        this.gameBoard.ctx.fillStyle = 'black';
        for (let i = 0; i < this.snake.body.length; i++) { 
            this.gameBoard.ctx.fillRect(this.snake.body[i].x, this.snake.body[i].y, this.snake.size, this.snake.size);
        }
    }

    updateSnake() {
        switch(this.snake.direction) {
            case 'LEFT':
                this.snake.body.x -= this.snake.speed;
                break;
            case 'UP':
                this.snake.body.y -= this.snake.speed;
                break;
            case 'RIGHT':
                this.snake.body.x += this.snake.speed;
                break;
            case 'DOWN':
                this.snake.body.y += this.snake.speed;
                break;
        };
    }

    drawApple() {
        this.apple = new Apple(310, 310);
        this.gameBoard.ctx.fillStyle = "red";
        this.gameBoard.ctx.beginPath(); 
        this.gameBoard.ctx.arc(this.apple.position.x, this.apple.position.y, this.apple.size, 0, 2 * Math.PI, false); 
        this.gameBoard.ctx.fill();
    }

    updateScreen() {
        this.updateSnake();
        this.drawSnake();
    }
}