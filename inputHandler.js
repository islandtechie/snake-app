class InputHandler {
    constructor(snake) {
        document.addEventListener('keydown', (e) => {
            switch(e.keyCode) {
                case 37:
                    if (snake.direction === 'RIGHT') {return;}
                    snake.direction = 'LEFT';
                    break;
                case 38:
                    if (snake.direction === 'DOWN') {return;}
                    snake.direction = 'UP';
                    break;
                case 39:
                    if (snake.direction === 'LEFT') {return;}
                    snake.direction = 'RIGHT';
                    break;
                case 40:
                    if (snake.direction === 'UP') {return;}
                    snake.direction = 'DOWN';
                    break;
            }
        });
    }
}