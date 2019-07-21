let canvas = document.getElementById('game-screen');
let ctx = canvas.getContext('2d');

//game board
ctx.fillStyle = "green";
ctx.fillRect(0,60,800, 540);
ctx.fillStyle = "black";
ctx.fillRect(200,300,90,20);



//red apples
ctx.fillStyle = "red";
ctx.beginPath(); 
ctx.arc(40, 40, 10, 0, 2 * Math.PI, false); 
ctx.fill();

//score text
ctx.font = '28px fantasy';
ctx.fillStyle = "black";
ctx.fillText('0', 55, 50);

//game title
ctx.font = '32px fantasy';
ctx.fillStyle = "black";
ctx.fillText('SNAKE', 365, 50);

//apple on board temp
//red apples
ctx.fillStyle = "red";
ctx.beginPath(); 
ctx.arc(310, 310, 10, 0, 2 * Math.PI, false); 
ctx.fill();