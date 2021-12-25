var positionRect1X = 5;
var positionRect1Y = 200;

var positionRect2X = 585;
var positionRect2Y = 200;

var rectWidth = 10;
var rectHeight = 90;

var rectSpeed = 10;
var rectSpeedEnemy = 10;

var enemyError = 0;

function showRacket(player) {
  if(player === 1) {
    rect(positionRect1X, positionRect1Y, rectWidth, rectHeight);
  } else {
    rect(positionRect2X, positionRect2Y, rectWidth, rectHeight);
  }
}

function changeRectPosition(player) {
  if(keyIsDown(UP_ARROW) ) {
     if (player === 1) {
       if(positionRect1Y > 0) positionRect1Y += -rectSpeed;
     } else {
       if(positionRect2Y > 0) positionRect2Y += -rectSpeed;
     }
  }
  if(keyIsDown(DOWN_ARROW) ) {
     if (player === 1) {
       if(positionRect1Y < (height - rectHeight)) positionRect1Y += rectSpeed;
     } else {
       if(positionRect2Y < (height - rectHeight)) positionRect2Y += rectSpeed;
     }
  }
}

function changeRectPositionByCircle(player) {
  rectSpeedEnemy = positionBallY - positionRect2Y - rectWidth / 2 - 30;
  positionRect2Y += rectSpeedEnemy + enemyError;
  calculateEnemyError();
}

function calculateEnemyError() {
  if (points2 >= points1) {
    enemyError += 1
    if (enemyError >= 39){
    enemyError = 40
    }
  } else {
    enemyError -= 1
    if (enemyError <= 35){
    enemyError = 35
    }
  }
}