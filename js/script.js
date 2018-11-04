// Welcome page, disapears on click

$('.start-btn').click(function () {
  $('.starter-text').hide()
  var selectPlayer = new SelectPlayer()
  selectPlayer.draw()
  var player1 = new Player1 ()
  player1.draw()
  var player2 = new Player2 ()
  player2.draw()
  var ball = new Ball ()
  ball.draw()
})

// The game board is drawn

function SelectPlayer () {
  this.ctx = document.getElementById('canvas').getContext('2d')
}

SelectPlayer.prototype.draw = function () {
  var img = new Image()
  img.onload = function () {
    this.ctx.drawImage(img, 350, 100, 720, 408)
  } .bind(this); //pour forcer le context d'execution 
  img.src = './images/inside_frame.png'
};

// Adding Player 1

function Player1(x, y, width, height) {
  this.ctx = document.getElementById('canvas').getContext('2d')
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
}

Player1.prototype.draw = function() {
  var img = new Image()
  img.onload = function () {
    this.ctx.drawImage(img, 400, 260, 70, 86)
  } .bind(this); //pour forcer le context d'execution 
  img.src = './images/mario.png'
};

// Adding Player 2

function Player2(x, y, width, height) {
  this.ctx = document.getElementById('canvas').getContext('2d')
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
}

Player2.prototype.draw = function() {
  var img = new Image()
  img.onload = function () {
    this.ctx.drawImage(img, 954, 275, 65, 63)
  } .bind(this); //pour forcer le context d'execution 
  img.src = './images/toad.png'
};

// Adding Ball

function Ball(x, y) {
  this.ctx = document.getElementById('canvas').getContext('2d')
  this.x = x;
  this.y = y;
  this.x_speed = 0;
  this.y_speed = 0;
}

Ball.prototype.draw = function() {
  var img = new Image()
  img.onload = function () {
    this.ctx.drawImage(img, 690, 280, 45, 43)
  } .bind(this); //pour forcer le context d'execution 
  img.src = './images/shell.png'
};

function Player() {
  this.paddle = new Paddle(175, 580, 500, 1000);
}


function Computer() {
 this.paddle = new Paddle(175, 10, 50, 10);
}

Player.prototype.render = function() {
  this.paddle.render();
};

Computer.prototype.render = function() {
  this.paddle.render();
};

var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);

var render = function() {
  player.render();
  computer.render();
  ball.render();
};

// Animating
/*
$('.start-game').click(function () {
  var update = function() {
  ball.update();
})

Ball.prototype.update = function() {
  this.x += this.x_speed;
  this.y += this.y_speed;
};
*/
