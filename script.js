let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;
const ballRadius = 10;

const paddleHeight = 10;
const paddleWidth = 80;
let paddleX = 300;
let paddleY = canvas.height - paddleHeight;

let dx = 2;
let dy = -2;

const keyDownHandler = (event) => {
  console.log(event);
  if (event.keyCode == 39) {
    if (paddleX < canvas.width - paddleWidth) {
      paddleX += 10;
    }
  } else if (event.keyCode == 37) {
    if (paddleX > 0) {
      paddleX -= 10;
    }
  }
}

document.addEventListener("keydown", keyDownHandler);


// ctx.rect(20, 40, 200, 100);
// ctx.arc(300, 300, 50, 0, Math.PI * 2);

// ctx.fillStyle = 'red';
// ctx.stroke();

const drawBall = () => {
  if ((x + dx > canvas.width - ballRadius) || (x + dx < ballRadius)) {
    dx = -dx;
  }
  if ((y + dy > canvas.height - ballRadius) || (y + dy < ballRadius)) {
    dy = -dy;
  }
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
};

const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
  console.log(paddleX, paddleY);
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  x += dx;
  y += dy;
};




setInterval(draw, 10);
