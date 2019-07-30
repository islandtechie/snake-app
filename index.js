const GAMEBOARD_WIDTH = 800;
const GAMEBOARD_HEIGHT = 540;
const gameBoard = new GameBoard(GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);

const gameManager = new GameManager(gameBoard);

gameManager.initializeGame();