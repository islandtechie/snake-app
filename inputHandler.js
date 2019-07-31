class InputHandler {
    constructor(snake) {
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 37:
                    snake.direction = 'LEFT';
                    break;
                case 38:
                    snake.direction = 'UP';
                    break;
                case 39:
                    snake.direction = 'RIGHT';
                    break;
                case 40:
                    snake.direction = 'DOWN';
                    break;
            }
        });
    }
}