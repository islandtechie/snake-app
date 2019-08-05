class Snake {
    constructor() {
        this.size = 20;
        this.speed = 20;
        this.direction = 'RIGHT';
        this.body = [
            {
                x: 260,
                y: 300
            }
        ];
    }

    move() {
        if (this.direction === 'RIGHT') {
            let head = {x: this.body[0].x + this.size, y: this.body[0].y}
            for (let i = 0; i < this.body.length; i++) {
                if (i < 1) {
                    this.body.unshift(head);
                    this.body.pop();
                }
            }
        }
        if (this.direction === 'LEFT') {
            let head = {x: this.body[0].x - this.size, y: this.body[0].y}
            for (let i = 0; i < this.body.length; i++) {
                if (i < 1) {
                    this.body.unshift(head);
                    this.body.pop();
                }
            }
        }
        if (this.direction === 'UP') {
            let head = {x: this.body[0].x, y: this.body[0].y - this.size}
            
            for (let i = 0; i < this.body.length; i++) {
                if (i < 1) {
                    this.body.unshift(head);
                    this.body.pop();
                }
            }
        }
        if (this.direction === 'DOWN') {
            let head = {x: this.body[0].x, y: this.body[0].y + this.size}
            for (let i = 0; i < this.body.length; i++) {
                if (i < 1) {
                    this.body.unshift(head);
                    this.body.pop();
                }
            }
        }
    }
}