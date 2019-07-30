class GameManager {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
    }

    initializeGame() {
        this.gameBoard.draw();
    }
}