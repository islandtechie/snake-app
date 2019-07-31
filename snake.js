class Snake {
    constructor() {
        this.size = 20;
        this.speed = 5;
        this.direction = 'RIGHT';
        this.body = [
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
        ];
    }

    move() {
        if (this.direction === 'RIGHT') {
            for (let i = 0; i < this.body.length; i++) {
                this.body[i].x += this.speed;
            }
        }
        if (this.direction === 'LEFT') {
            for (let i = 0; i < this.body.length; i++) {
                this.body[i].x -= this.speed;
            }
        }
        if (this.direction === 'UP') {
            for (let i = 0; i < this.body.length; i++) {
                this.body[i].y -= this.speed;
            }
        }
        if (this.direction === 'DOWN') {
            for (let i = 0; i < this.body.length; i++) {
                this.body[i].y += this.speed;
            }
        }
    }
}