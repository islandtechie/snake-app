class InputHandler {
    constructor(snake) {
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 37:
                    snake.move('LEFT');
                    break;
                case 38:
                    snake.move('UP');
                    break;
                case 39:
                    snake.move('RIGHT');
                    break;
                case 40:
                    snake.move('DOWN');
                    break;
            }
        });
    }
}