function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    fondo = new Background(this.canvas, this.ctx)
    this.playeruno = new Player(this.canvas, this.ctx)
    
  }

Game.prototype.start = function () {
    var that = this;
   setInterval(function(){
    that.clear();
    fondo.draw();
    that.playeruno.draw();
    },300); 
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

// Game.prototype.draw = function(){
//     playeruno.draw();
//     fondo.draw();
// };

