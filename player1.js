function Player(canvas, ctx) {
    this.x = 50;
    this.w = 100;
    this.h = 100;
    this.y = canvas.height-this.h - 50;
    this.canvas = canvas;
    this.ctx = ctx;
    this.moveRight = false;
    this.moveLeft = false;
    this.isJumping = false;

}

Player.prototype.draw = function () {
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
    this.setListeners();
};

Player.prototype.move = function () {

}


Player.prototype.moveR = function () {
    this.x = this.x + 5;
    console.log(this.x)
    
}

Player.prototype.moveL = function () {
    this.x = this.x - 5;
    console.log(this.x)
    
}

Player.prototype.setListeners = function () {
    document.onkeydown = function (event) {
        if (event.keyCode === 68) {
            this.moveRight = true;
            this.moveR();
        } else if (event.keyCode === 65) {
            this.moveLeft = true;
            this.moveL();
        } else if (event.keyCode === 87) {
            this.isJumping = true;
        }
    }.bind(this);
};

Player.prototype.jump = function () {
    
}

