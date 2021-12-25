var songPonto;
var songRaquete;
var songTrilha;

function loadSounds() {
  songPonto = loadSound("songs/ponto.mp3");
  songRaquete = loadSound("songs/raquete.mp3");
  songTrilha = loadSound("songs/trilha.mp3");
}

function preload() {
  loadSounds();
  // (function loadSounds() {
  //   songPonto = loadSound("songs/ponto.mp3");
  //   songRaquete = loadSound("songs/raquete.mp3");
  //   songTrilha = loadSound("songs/trilha.mp3");
  // })();
}

function setup() {
  createCanvas(600, 500);
  songTrilha.loop();
}

function draw() {
  background(0);
  
  showCircle();
  
  changePositionBall();
  
  showRacket(1);
  changeRectPosition(1);
  showRacket(2);
  changeRectPositionByCircle();

  if(checkCollision()) {
    speedCircleX *= -1;
    songRaquete.play();
  }
  
  showPlacar();
  goalPoint();
}

function changePositionBall() {
  changePositionBallX();
  changePositionBallY();
}


