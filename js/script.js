// Welcome page, disapears on click
var ball;
var player1;
var player2;
var selectPlayer;
$('.start-btn').click(function () {
  $('.starter-text').hide()
  selectPlayer = new SelectPlayer()
  selectPlayer.draw()
  player1 = new Player1()
  player1.draw()
  player2 = new Player2()
  player2.draw()
  ball= new Ball()
  ball.draw()
  $('.start-game').toggle()
})

// The game board is drawn

function SelectPlayer () {
  this.ctx = document.getElementById('canvas').getContext('2d')
}

SelectPlayer.prototype.draw = function () {
  var img = new Image()
  img.onload = function () {
    this.ctx.drawImage(img, 350, 100, 720, 408)
  }.bind(this) // pour forcer le context d'execution
  img.src = './images/inside_frame.png'
}

// Display Player 1

function Player1 (x, y, width, height) {
  this.ctx = document.getElementById('canvas').getContext('2d')
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.x_speed = 0
  this.y_speed = 0
}

Player1.prototype.draw = function () {
  var img = new Image()
  img.onload = function () {
    this.ctx.drawImage(img, 400, 260, 70, 86)
  }.bind(this) // pour forcer le context d'execution
  img.src = './images/mario.png'
}

// Display Player 2

function Player2 (x, y, width, height) {
  this.ctx = document.getElementById('canvas').getContext('2d')
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.x_speed = 0
  this.y_speed = 0
}

Player2.prototype.draw = function () {
  var img = new Image()
  img.onload = function () {
    this.ctx.drawImage(img, 954, 275, 65, 63)
  }.bind(this) // pour forcer le context d'execution
  img.src = './images/toad.png'
}

// Adding Ball

function Ball (x, y) {
  this.ctx = document.getElementById('canvas').getContext('2d')
  this.x = 690
  this.y = 280
  this.vx = 2
  this.vy = 5
  this.radius = 5
}

Ball.prototype.draw = function () {
  var img = new Image()
  img.onload = function () {
    this.ctx.drawImage(img, this.x, this.y, 45, 43)
  }.bind(this)
  img.src = './images/shell.png'
}

// Animating the ball

function update () {
  ctx = document.getElementById('canvas').getContext('2d')
  ctx.clearRect (0,0,1064,600)
  selectPlayer.draw()
  player1.draw()
  player2.draw()
  ball.draw()
  ball.x += ball.vx
  ball.y += ball.vy
}
setInterval(update, 1000)

