document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 37:
            snake.moveLeft();
            break;
        case 38:
            snake.moveUp();
            break;
        case 39:
            snake.moveRight();
            break;
        case 40:
            snake.moveDown();
            break;
    }
});

let canvas = document.getElementById('game-screen');
let context = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 540;

let gameBoard = new GameBoard(GAME_WIDTH, GAME_HEIGHT);
let snake = new Snake(GAME_WIDTH, GAME_HEIGHT);
let apple = new Apple(310, 310);


window.onload = () => {
    init();
    let framesPerSecond = 20;
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
    context.clearRect(0,0,800,600);
    drawGameTitleArea();
    gameBoard.draw(context);
    apple.draw(context);
    snake.update();
    snake.draw(context);
}