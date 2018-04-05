function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.fondo = new Background(this.canvas, this.ctx);
  this.playeruno = new Player(this.canvas, this.ctx, 50, "left", "red", 1);
  this.playerdos = new Player(this.canvas, this.ctx, 900, "right", "blue", 2);
  this.interval;
};

Game.prototype.playerCollisions = function () {
  var that = this;
  if (this.playeruno.isKicking) {
    if ((that.playeruno.x + that.playeruno.w + 40) > that.playerdos.x &&
      that.playeruno.x < that.playerdos.x + that.playerdos.w - 40 &&
      (that.playeruno.y + that.playeruno.h) >= that.playerdos.y) {
      
      if (this.playeruno.recentKick == false){
        this.playerdos.life -= 5;
        this.playeruno.recentKick = true 
        this.playeruno.playerRecentKick()
      }
    }
  }
  if (this.playerdos.isKicking) {
    if ((that.playeruno.x + that.playeruno.w + 40) > that.playerdos.x &&
      that.playeruno.x < that.playerdos.x + that.playerdos.w - 40 &&
      (that.playeruno.y + that.playeruno.h) >= that.playerdos.y) {
      
        if (this.playerdos.recentKick == false){
          this.playeruno.life -= 5;
          this.playerdos.recentKick = true 
          this.playerdos.playerRecentKick()
        }
    }
  }
};

Game.prototype.start = function () {
  this.interval = setInterval(function () {
    var that = this;
    this.clear();
    this.fondo.draw();
    this.playerdos.draw(this.playeruno);
    this.playeruno.draw(this.playerdos);
    this.playeruno.shoot();
    this.playerCollisions();
    this.playeruno.bullets.forEach((e,i) => {
      this.playeruno.collision(e,this.playerdos,i)
    });
    this.playerdos.bullets.forEach((e,i) => {
      this.playerdos.collision(e,this.playeruno,i)
    });
    if(this.playeruno.life == 0 || this.playerdos.life == 0){
      console.log("MUERTO")
      this.gameOver()
    }
  }.bind(this), 1000/60);
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.gameOver = function () {
  clearInterval(this.interval)
};