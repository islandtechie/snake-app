class Apple {
    constructor( x,y) {
        this.size = 9;
        
        this.position = {
            x: x,
            y: y,
        }
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath(); 
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, false); 
        ctx.fill();
    }
}