function Background(canvas, ctx) {
    this.x = 0;
    this.y = 0;
    this.ctx = ctx;
    this.canvas = canvas;
  
    this.img = new Image();
    this.img.src = 'images/mbisonbackground.png';
  
    this.dx = 7;
  }
  
  Background.prototype.draw = function() {
    var that = this;
    this.img.onload = function() {
        that.ctx.drawImage(that.img, that.x, that.y, that.canvas.width, that.canvas.height);}
    };
    


