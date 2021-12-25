var points1 = 0;
var points2 = 0;

const positionPlacarY = 26;

function goalPoint() {
  if(positionBallX > 590) {
    points1 += 1;
    songPonto.play();
  }
  if(positionBallX < 10) {
    points2 += 1;
    songPonto.play();
  }
}

function showPlacar() {
  includePoints(points1, 150);
  includeVersus(300);
  includePoints(points2, 450);
}

function includePoints(points, x) {
  fill(color(255,140,0));
  rect(x - 2, 8, 45, 22);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(points, x + 20, positionPlacarY);
}

function includeVersus(x) {
  textAlign(CENTER);
  textSize(16);
  fill(255);
  text('x', x, positionPlacarY);
}