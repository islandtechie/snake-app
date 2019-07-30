const GAMEBOARD_WIDTH = 800;
const GAMEBOARD_HEIGHT = 540;

const gameManager = new GameManager(GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
const inputHandler = new InputHandler(gameManager.snake);

window.onload = () => {
    gameManager.initializeGame();
    let framesPerSecond = 20;
    setInterval(gameManager.updateScreen, 1000 / framesPerSecond);
  
}