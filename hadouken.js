function Hadouken(canvas, ctx, x, y, direction) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speed = 20;
    this.directionRight = direction;
}

Hadouken.prototype.draw = function () {
    this.ctx.fillRect(this.x, this.y, 20, 20);
    this.move();
};

Hadouken.prototype.move = function () {
 if(this.directionRight){
     this.moveD();
 }else{
     this.moveI();
 }
}

Hadouken.prototype.moveD = function () {
    this.x = this.x + this.speed
}
Hadouken.prototype.moveI = function () {
    this.x = this.x + -this.speed
}