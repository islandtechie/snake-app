class GameManager {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
    }

    init() {
        this.gameBoard.draw();
    }
}