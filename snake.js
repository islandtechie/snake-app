class Snake {
    constructor() {
        this.size = 20;
        this.speed = 0;
        this.position = [
            {
                x: 260,
                y: 300
            },
            {
                x: 240,
                y: 300
            },
            {
                x: 220,
                y: 300
            },
            {
                x: 200,
                y: 300
            }
        ]
    }

    move(direction) {
        if (direction === 'RIGHT') {
            console.log('move right');
        }
        if (direction === 'LEFT') {
            console.log('move left');
        }
        if (direction === 'UP') {
            console.log('move up');
        }
        if (direction === 'LEFT') {
            console.log('move down');
        }

    }
}