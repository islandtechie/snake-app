class GameBoard {
    constructor(width, height) {
       this.width = width;
       this.height = height;
    }

    draw(ctx){
        ctx.fillStyle = "green";
        ctx.fillRect(0, 60, this.width, this.height);
    }
}
class Snake {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.height = 20;
        this.width = 20;
        this.speed = 5;
        this.length = 6;

        this.position = [
            {
                x: 260,
                y: 300,
            }
        ]
    }

    calculateBodyPositions(length, headPostion) {
        console.log(headPostion.x);
        for (let i = 0; i < this.length; i++) { 
            if (i !== 0) {
               this.position.push(
                   {
                       x: headPostion.x - (i * 20),
                       y: 300
                   }
               );
            }else{
                this.position = [
                    {
                        x: headPostion.x,
                        y: 300,
                    }
                ]
            }
        }

        console.log(this.position);
    }

    draw(ctx) {


        ctx.fillStyle = 'black';
        for (let i = 0; i < this.position.length; i++) { 
            ctx.fillRect(this.position[i].x, this.position[i].y, this.height, this.width);
        }
    }

    moveLeft() {
        this.speed = -this.speed;
    }

    moveRight() {
        this.speed = -this.speed;
    }

    update(dt) {
        if (!dt) return;
        this.calculateBodyPositions(this.length, this.position[0]);
        this.position[0].x += this.speed / dt;
        //this.position.y -= this.speed / dt;
    }

    
}

class Apple {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.size = 10;
        

        this.position = {
            x: 310,
            y: 310,
        }
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath(); 
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, false); 
        ctx.fill();
    }
}

class InputHandler{ 
    constructor(snake) {
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 37:
                    snake.moveLeft();
                    break;
                case 38:
                    break;
                case 39:
                    snake.moveRight();
                    break;
                case 40:
                    break;
            }
        });
    }
}

//up 38 down 40 39 right 37 left 32 spacebar

let canvas = document.getElementById('game-screen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 540;
let lastTime = 0;



let gameBoard = new GameBoard(GAME_WIDTH, GAME_HEIGHT);
let snake = new Snake(GAME_WIDTH, GAME_HEIGHT);
let apple = new Apple(GAME_WIDTH, GAME_HEIGHT);
let inputHandler = new InputHandler(snake);






//game board
gameBoard.draw(ctx);
snake.draw(ctx);
apple.draw(ctx);

function gameLoop(timestamp) {
    
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,800,600)

    //red apples
    ctx.fillStyle = "red";
    ctx.beginPath(); 
    ctx.arc(40, 40, 10, 0, 2 * Math.PI, false); 
    ctx.fill();

    //score text
    ctx.font = '28px fantasy';
    ctx.fillStyle = "black";
    ctx.fillText('0', 55, 50);

    //game title
    ctx.font = '32px fantasy';
    ctx.fillStyle = "black";
    ctx.fillText('SNAKE', 365, 50);

    ctx.fillStyle = "green";
    ctx.fillRect(0,60,800, 540);

    //apple on board temp
    //red apples
     

    
    
    snake.update(dt);
    snake.draw(ctx);
    apple.draw(ctx);

    

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


/* //red apples
ctx.fillStyle = "red";
ctx.beginPath(); 
ctx.arc(40, 40, 10, 0, 2 * Math.PI, false); 
ctx.fill();

//score text
ctx.font = '28px fantasy';
ctx.fillStyle = "black";
ctx.fillText('0', 55, 50);

//game title
ctx.font = '32px fantasy';
ctx.fillStyle = "black";
ctx.fillText('SNAKE', 365, 50);

//apple on board temp
//red apples
ctx.fillStyle = "red";
ctx.beginPath(); 
ctx.arc(310, 310, 10, 0, 2 * Math.PI, false); 
ctx.fill(); */