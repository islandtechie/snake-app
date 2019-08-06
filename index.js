const DEBUG = false;

const GAMEBOARD_WIDTH = 800;
const GAMEBOARD_HEIGHT = 540;

const gameManager = new GameManager(GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);

let gameTime = 4000/30;

if (DEBUG === true) {
    gameTime = 300;
    gameManager.snake.body = [{x: 300,y: 300}, {x: 320,y: 300}, {x: 340,y: 300},{x: 360,y: 300}, {x: 380,y: 300}, {x: 400,y: 300},{x: 420,y: 300}, {x: 440,y: 300}]
}

window.onload = () => {
    gameManager.initializeGame();
    setInterval(() => {
        gameManager.clearGameBoard();
        gameManager.updateScreen(); }, 
        gameTime
    ); 
}

