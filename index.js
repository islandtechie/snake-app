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


let canvas = document.getElementById('game-screen');
let context = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 540;

let gameBoard = new GameBoard(GAME_WIDTH, GAME_HEIGHT);

window.onload = () => {
    console.log('ready');

    drawGameTitleArea();
    gameBoard.draw(context);

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