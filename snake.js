class Snake {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.size = 20;
        this.bodyLength = 1;
        this.maxSpeed = 2;
        this.speed = { x: 2, y: 0};
        this.position = [
            {
                x: 260,
                y: 300,
            }
        ]
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        for (let i = 0; i < this.bodyLength; i++) { 
            if (i !== 0) {
                this.position.push(
                    {
                        x: this.position[0].x - (i * this.size),
                        y: this.position[0].y
                    }
                );
             }else{
                 this.position = [
                     {
                        x: this.position[i].x,
                        y: this.position[i].y
                     }
                 ]
             }

             ctx.fillRect(this.position[i].x, this.position[i].y, this.size, this.size);
        }
    }

    update() {
        this.position[0].x += this.speed.x;
        this.position[0].y += this.speed.y;
    }

    moveLeft() {
        this.speed.x = -this.maxSpeed;
        this.speed.y = 0;
        console.log('left',this.speed.x);
    }

    moveRight() {
        this.speed.x = this.maxSpeed;
        this.speed.y = 0;
        console.log('right',this.speed.x);
    }

    moveUp() {
        this.speed.y = -this.maxSpeed;
        this.speed.x = 0;
        console.log('up',this.speed.y);
    }

    moveDown() {
        this.speed.y = this.maxSpeed;
        this.speed.x = 0;
        console.log('up',this.speed.y);
    }
}
