function Tiger(canvas, ctx, x, y, direction) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speed = 20;
    this.directionLeft = direction;
}

Tiger.prototype.draw = function () {
    this.ctx.fillRect(this.x, this.y, 20, 20);
    this.move();
};

Tiger.prototype.move = function () {
 if(this.directionLeft){
     this.moveI();
 }else{
     this.moveD();
 }
}

Tiger.prototype.moveD = function () {
    this.x = this.x + this.speed
}
Tiger.prototype.moveI = function () {
    this.x = this.x + -this.speed
}