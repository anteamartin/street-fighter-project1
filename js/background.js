function Background(canvas, ctx) {
  this.x = 0;
  this.y = 0;
  this.ctx = ctx;
  this.canvas = canvas;
  this.img = new Image();
  this.img.src = 'images/mbisonbackground.png';
  this.dx = 7;
};

Background.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x, this.y, this.canvas.width, this.canvas.height);
};