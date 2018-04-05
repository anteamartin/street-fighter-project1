function Hadouken(canvas, ctx, x, y, direction_start) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.h = 80;
    this.w = 80;
    this.speed = 20;
    this.direction = direction_start;

}

Hadouken.prototype.draw = function () {
    var img = new Image();
    img.src = "images/hadoukenbala.png";
    this.ctx.drawImage(img, this.x, this.y, this.w, this.h);
};

Hadouken.prototype.move = function () {
    if (this.direction == "left") {
        this.x = this.x + this.speed;
    } else if (this.direction == "right") {
        this.x = this.x - this.speed;
    }

}
