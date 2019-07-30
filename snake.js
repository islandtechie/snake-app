class Snake {
    constructor() {
        this.size = 20;
        this.speed = 1;
        this.direction = 'RIGHT';
        this.body = [
            {
                x: 260,
                y: 300
            }
        ];
    }

    move(direction) {
        this.direction = direction;
    }
}