class GameManager {
    constructor(gameBoardWidth, gameBoardheight) {
        this.gameBoard = new GameBoard(gameBoardWidth, gameBoardheight);
        this.snake = new Snake();
        this.inputHandler = new InputHandler(this.snake);
        this.appleLocation = {x: null, y: null};
        this.appleCell = {x: null, y: null};
        this.gameStatus = null;     
    }

    initializeGame() {
        this.generateRandomLocation();
        this.gameBoard.draw();
        this.drawSnake();
        this.drawApple();
    }

    detectCollision() {
        if (this.snake.body[0].x === this.gameBoard.width || 
            this.snake.body[0].x === -this.snake.size ||
            this.snake.body[0].y === this.gameBoard.titleHeight - this.snake.size || 
            this.snake.body[0].y === this.gameBoard.canvas.height) {
                this.gameStatus = 'GAME OVER';
                console.log(this.gameStatus);
        }

        if (this.snake.body[0].x === this.appleCell.x &&
             this.snake.body[0].y === this.appleCell.y) {
                this.addScore();
                this.generateRandomLocation();
                this.snake.grow();
                

        }
   
    }

    addScore() {
        this.gameBoard.scorelabel += 1;
    }


    drawSnake() {
        this.gameBoard.ctx.fillStyle = 'black';
        for (let i = 0; i < this.snake.body.length; i++) {
            this.gameBoard.ctx.fillRect(this.snake.body[i].x, this.snake.body[i].y, this.snake.size, this.snake.size);
        }
    }

    generateRandomLocation() {
        this.appleCell.x = Math.floor(Math.random() * this.gameBoard.gridX) * 20;
        this.appleCell.y = Math.floor(Math.random() * this.gameBoard.gridY) * 20 + 60;
        this.appleLocation.x = this.appleCell.x + 10;
        this.appleLocation.y = this.appleCell.y + 10;
    }
    

    drawApple() {
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