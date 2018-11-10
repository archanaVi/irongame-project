// Welcome page, disapears on click
var ball
var player1
var player2
var selectPlayer
var shellImg = new Image()
shellImg.src = './images/shell.png'
var toadImg = new Image()
  toadImg.src = './images/toad.png'
  var marioImg = new Image()
  marioImg.src = './images/mario.png'
var interId 
$('.start-btn').click(function () {
  $('.starter-text').hide()
  selectPlayer = new SelectPlayer()
  selectPlayer.draw()
  player1 = new Player1()
  player1.draw()
  player2 = new Player2()
  player2.draw()
  ball = new Ball()
  ball.draw()
  $('.start-game').toggle()
  interId = setInterval(update, 20)
  $('.mario-lost').hide()
  $('.toad-lost').hide()
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
  this.x = 0
  this.y = 110
  this.width = width
  this.height = height
  this.vx = 0
  this.vy = 0
}

Player1.prototype.draw = function () {
    this.ctx.drawImage(marioImg, this.x, this.y, 70, 86)
}

// Display Player 2

function Player2 (x, y, width, height) {
  this.ctx = document.getElementById('canvas').getContext('2d')
  this.x = 562
  this.y = 120
  this.width = width
  this.height = height
  this.vx = 0
  this.vy = 0
}

Player2.prototype.draw = function () {
    this.ctx.drawImage(toadImg, this.x, this.y, 65, 63)
}

// Adding Ball

function Ball (x, y) {
  this.ctx = document.getElementById('canvas').getContext('2d')
  this.x = 300
  this.y = 150
  this.vx = -2
  this.vy = 2
}

Ball.prototype.draw = function () {
    this.ctx.drawImage(shellImg, this.x, this.y, 45, 43)
}

// Animating the ball

function update () {
  ctx = document.getElementById('canvas').getContext('2d')
  ctx.clearRect(0, 0, 1064, 600)
  player1.draw()
  player2.draw()
  ball.draw()
  ball.x += ball.vx
  ball.y += ball.vy
}



// Adding limits to the ball

function update () {
  ctx = document.getElementById('canvas').getContext('2d')
  ctx.clearRect(0, 0, 1064, 600)
  player1.draw()
  player2.draw()
  ball.draw()
  ball.update(player1, player2)
}

Ball.prototype.update = function (player1, player2) {
  this.x += this.vx
  this.y += this.vy
  var ball_topleftx = this.x
  var ball_toplefty = this.y
  var ball_bottomleftx = this.x
  var ball_bottomlefty = this.y - 43
  var ball_toprightx = this.x + 45
  var ball_toprighty = this.y
  var ball_bottomrightx = this.x + 45
  var ball_bottomrighty = this.y - 43

  if (this.y < 0) {
    this.y = 10
    this.vy = -this.vy
  } else if (this.y > 300) {
    this.y = 300
    this.vy = -this.vy
  }

  if (
    ball_topleftx < 70 &&
    ball_toplefty <= player1.y + 86 &&
    ball_toplefty >= player1.y - 86
  ) {
    this.vy = -this.vy
    this.vx += 1.1
  }

  if (
    ball_bottomleftx < 70 &&
    ball_bottomlefty >= player1.y - 86 &&
    ball_bottomlefty >= player1.y + 86
  ) {
    this.vy = -this.vy
    this.vx += 1.1
  }

  if (
    ball_toprightx > 562 &&
    ball_toprighty <= player2.y + 63 &&
    ball_toprighty >= player2.y - 63
  ) {
    //this.vy = -this.vy
    this.vx = -this.vx
  }

  if (
    ball_bottomrightx > 562 &&
    ball_bottomrightx <= player2.y + 63 &&
    ball_bottomrighty >= player2.y - 63
  ) {
    this.vy = -this.vy
    this.vx = -this.vx
  }

  if (this.x < 0) {
    $('.mario-lost').show()
    clearInterval (interId)
  }

  if (this.x > 630) {
    $('.toad-lost').show()
    clearInterval (interId)
    }

}
// Controls player 1

var keysDown = {}

window.addEventListener('keydown', function (event) {
  keysDown[event.keyCode] = true
  var value = event.keyCode
  if (value == 81) {
    // up arrow
    this.player1.move(0, -8)
  } else if (value == 87) {
    // right arrow
    this.player1.move(0, 8)
  }
})

Player1.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  this.vx = x
  this.vy = y
  if (this.y < 0) {
    // all the way to the left
    this.y = 0
  } else if (this.y > 250) {
    // all the way to the right
    this.y = 250
  }
}

// Control player 2
var keysUp = {}

window.addEventListener('keyup', function (event) {
  keysUp[event.keyCode] = true
  var value = event.keyCode
  if (value == 38) {
    // q for up
    this.player2.move(0, -10)
  } else if (value == 40) {
    // w for down
    this.player2.move(0, 10)
  }
})

Player2.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  this.vx = x
  this.vy = y
  if (this.y < 0) {
    this.y = 0
  } else if (this.y > 250) {
    this.y = 250
  }
}
