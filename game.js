function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.fondo = new Background(this.canvas, this.ctx)
    this.playeruno = new Player(this.canvas, this.ctx)
    this.playerdos = new Player2(this.canvas, this.ctx)
    
  }

Game.prototype.start = function () {
    var that = this;
   setInterval(function(){
    that.clear();
    that.fondo.draw();
    that.playerdos.draw();
    that.playeruno.draw();
    },1000/60); 
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.setListeners = function() {
        
    };
