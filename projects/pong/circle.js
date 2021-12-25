var positionBallX = 300;
var positionBallY = 200;
let sizeBall = 20;
const raio = sizeBall / 2;


var speedCircleX = 6;
var speedCircleY = 6;

function showCircle() {
  circle(positionBallX, positionBallY, sizeBall);
}

function changePositionBallX() {
  positionBallX += speedCircleX;
  if(positionBallX > (width - raio) || positionBallX < raio) {
    speedCircleX *= -1;
    // if(sizeBall > 10) decreaseSizeBall();
  }
}

function changePositionBallY() {
  positionBallY += speedCircleY;
  if(positionBallY > (height - raio) || positionBallY < raio) {
    speedCircleY *= -1;
    // if(sizeBall > 10) decreaseSizeBall();
  }
}

function decreaseSizeBall(quantity = 0.5) {
  sizeBall -=quantity;
}
