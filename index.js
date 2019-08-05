const DEBUG = false;

const GAMEBOARD_WIDTH = 800;
const GAMEBOARD_HEIGHT = 540;

const gameManager = new GameManager(GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);

let gameTime = 4000/30;

if (DEBUG === true) {
    gameTime = 1000;
    gameManager.snake.body = [{x: 60,y: 60}]
}

window.onload = () => {
    gameManager.initializeGame();
    setInterval(() => {
        gameManager.clearGameBoard();
        gameManager.updateScreen(); }, 
        gameTime
    ); 
}

