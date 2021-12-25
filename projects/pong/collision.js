var isCollision = false;

function checkCollision() {
  // My code
  // if(
  //   (positionBallX - raio < positionRect1X + rectWidth) &&
  //   (positionBallY - raio < positionRect1Y + rectHeight) && 
  //   (positionBallY + raio > positionRect1Y)
  // ) {
  //    return true;
  // }
  // return false;
  
  // Library use
  return collideRectCircle(
    positionRect1X,
    positionRect1Y,
    rectWidth,
    rectHeight,
    positionBallX,
    positionBallY,
    raio
  ) || 
  collideRectCircle(
    positionRect2X,
    positionRect2Y,
    rectWidth,
    rectHeight,
    positionBallX,
    positionBallY,
    raio
  );
  
}