class Snake {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.height = 20;
        this.width = 20;
        this.speed = 2;

        this.position = {
            x: 200,
            y: 300,
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width);
    }

    update(dt) {
        if (!dt) return;
        this.position.x += this.speed / dt;
        this.position.y -= this.speed / dt;
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

let canvas = document.getElementById('game-screen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 540;
let lastTime = 0;



let snake = new Snake(GAME_WIDTH, GAME_HEIGHT);
let apple = new Apple(GAME_WIDTH, GAME_HEIGHT);



//game board
ctx.fillStyle = "green";
ctx.fillRect(0,60,800, 540);
snake.draw(ctx);
apple.draw(ctx);

function gameLoop(timestamp) {
    
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,60,800,540)

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