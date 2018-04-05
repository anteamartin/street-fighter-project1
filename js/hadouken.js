function Hadouken(canvas, ctx, x, y, direction_start) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.h = 20;
    this.w = 20;
    this.speed = 20;
    this.direction = direction_start;

}

Hadouken.prototype.draw = function () {
    this.ctx.fillRect(this.x, this.y, this.h, this.w);
};

Hadouken.prototype.move = function () {
    if (this.direction == "left") {
        this.x = this.x + this.speed;
    } else if (this.direction == "right") {
        this.x = this.x - this.speed;
    }

}
