function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.fondo = new Background(this.canvas, this.ctx)
  this.playeruno = new Player(this.canvas, this.ctx)
  this.playerdos = new Player2(this.canvas, this.ctx)

}

Game.prototype.playerDirections1 = function () {
  if (this.playeruno.x < this.playerdos.x) {
    return true;
  }
  else {
    return false;
  }
};
Game.prototype.playerDirections2 = function () {
  if (this.playerdos.x > this.playeruno.x) {
    return true;
  }
  else {
    return false;
  }
};

Game.prototype.playerCollision1 = function () {
  if (this.playeruno.x < this.playerdos.x) {
    return true;
  }
  else {
    return false;
  }
};

Game.prototype.playerCollision2 = function () {
  if (this.playerdos.x > this.playeruno.x) {
    return true;
  }
  else {
    return false;
  }
};


// Game.prototype.playerCollisions = function () {
//   var that = this;
//   if ((that.playeruno.x + that.playeruno.w) > that.playerdos.x &&
//   that.playeruno.x < that.playerdos.x + that.playerdos.w &&
//   (that.playeruno.y + that.playeruno.h) >= that.playerdos.y) {
// console.log("CHOCASTE") 
// }
// };

Game.prototype.start = function () {
  var that = this;
  setInterval(function () {
    that.clear();
    that.fondo.draw();
    that.playerdos.draw();
    that.playeruno.draw();
    that.playeruno.shoot();
    that.playeruno.directionRight = that.playerDirections1()
    that.playerdos.directionLeft = that.playerDirections2()
    // that.playerCollisions();
  }, 1000 / 60);
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

