class GameManager {
    constructor(gameBoardWidth, gameBoardheight) {
        this.gameBoard = new GameBoard(gameBoardWidth, gameBoardheight);
        this.snake = new Snake();
        this.inputHandler = new InputHandler(this.snake);
        this.appleLocation = {x: null, y: null}       
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

    generateRandomLocation(cooordinate) {
        if (cooordinate === 'x'){
            return Math.floor(Math.random() * (this.gameBoard.canvas.width));
        }else {
            return Math.floor(Math.random() * (this.gameBoard.canvas.height - this.gameBoard.titleHeight) + this.gameBoard.titleHeight);
        }
        
    }
    

    drawApple() {
        this.appleLocation.x = this.generateRandomLocation('x');
        this.appleLocation.y = this.generateRandomLocation('y');
        console.log('x', this.appleLocation.x);
        console.log('y', this.appleLocation.y);

        if (this.appleLocation.x === this.snake.body[0].x || this.appleLocation.y === this.snake.body[0].y) {

        }
        this.apple = new Apple(this.appleLocation.x, this.appleLocation.y);
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