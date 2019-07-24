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

class Snake {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.size = 20;
        this.bodyLength = 1;
        //this.maxSpeed = 5;
        this.speed = { x: 2, y: 0};
        this.position = [
            {
                x: 260,
                y: 300,
            }
        ]
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        for (let i = 0; i < this.bodyLength; i++) { 
            if (i !== 0) {
                this.position.push(
                    {
                        x: this.position[0].x - (i * this.size),
                        y: this.position[0].y
                    }
                );
             }else{
                 this.position = [
                     {
                        x: this.position[i].x,
                        y: this.position[i].y
                     }
                 ]
             }

             ctx.fillRect(this.position[i].x, this.position[i].y, this.size, this.size);
        }
    }

    update() {
        this.position[0].x += this.speed.x;
    }
}

class Apple {
    constructor( x,y) {
        this.size = 10;
        
        this.position = {
            x: x,
            y: y,
        }
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath(); 
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, false); 
        ctx.fill();
    }
}
let canvas = document.getElementById('game-screen');
let context = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 540;
const framesPerSecond = 30;

let gameBoard = new GameBoard(GAME_WIDTH, GAME_HEIGHT);
let snake = new Snake(GAME_WIDTH, GAME_HEIGHT);
let apple = new Apple(310, 310);


window.onload = () => {
    init();

    setInterval(redrawScreen, 1000 / framesPerSecond);

}

function init() {
    drawGameTitleArea();
    gameBoard.draw(context);
    snake.draw(context);
    apple.draw(context);
}

function drawGameTitleArea() {
    //red apples
    context.fillStyle = "red";
    context.beginPath(); 
    context.arc(40, 40, 10, 0, 2 * Math.PI, false); 
    context.fill();

    //score text
    context.font = '28px fantasy';
    context.fillStyle = "black";
    context.fillText('0', 55, 50);

    //game title
    context.font = '32px fantasy';
    context.fillStyle = "black";
    context.fillText('SNAKE', 365, 50);
}

function redrawScreen() {
    var count = 0;
    console.log(count++);
    context.clearRect(0,0,800,600);
    drawGameTitleArea();
    gameBoard.draw(context);
    apple.draw(context);
    snake.update();
    snake.draw(context);
}