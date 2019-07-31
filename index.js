const GAMEBOARD_WIDTH = 800;
const GAMEBOARD_HEIGHT = 540;

const gameManager = new GameManager(GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);

window.onload = () => {
    gameManager.initializeGame();

    let framesPerSecond = 10;

    setInterval(() => { 
        gameManager.clearGameBoard();
        gameManager.updateScreen(); }, 
        150
    ); 
}