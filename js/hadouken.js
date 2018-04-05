function Hadouken(canvas, ctx, x, y, direction_start) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.h = 50;
    this.w = 50;
    this.speed = 20;
    this.direction = direction_start;

}

Hadouken.prototype.draw = function () {
    if(this.direction == "left")
    var img = new Image();
    img.src = "images/hadoukenbala.png";
    this.ctx.drawImage(img, this.x, this.y, this.w, this.h);

    if(this.direction == "right")
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
