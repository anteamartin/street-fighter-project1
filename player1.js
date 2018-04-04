function Player(canvas, ctx) {
    this.x = 50;
    this.w = 100;
    this.h = 100;
    this.y = canvas.height - this.h - 50;
    this.canvas = canvas;
    this.ctx = ctx;
    this.moveRight = false;
    this.moveLeft = false;
    this.isJumping = false;
    this.isShooting = false;
    this.speed = 10;
    this.bullets = [];
    this.directionRight = true;
}

Player.prototype.draw = function () {
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
    //this.setListeners();
    this.move();

    this.bullets.forEach(function (b) {
        b.draw();
    })
};

Player.prototype.move = function () {
    if (this.moveRight) {
        this.moveR();
    } if (this.moveLeft) {
        this.moveL();
    } if (this.isJumping) {
        this.jump();
    } if (this.isShooting) {
        this.shoot()
    }
    this.gravity();
    this.bullets.forEach(function (b) {
        b.move();
    })
}


Player.prototype.moveR = function () {
    if (this.x < this.canvas.width - this.w) {
        this.x = this.x + this.speed;
    }
}

Player.prototype.moveL = function () {
    if (this.x > 0) {
        this.x = this.x - this.speed;
    }
}


Player.prototype.jump = function () {
    if (this.isJumping) {
        this.y -= 100
        if (this.y < 300) {
            this.isJumping = false
        }
    }
};

Player.prototype.gravity = function () {
    if (this.y < canvas.height - this.h - 50) {
        this.y = this.y + this.speed;
    }
};

Player.prototype.shoot = function () {
    if (this.isShooting) {
        if(this.bullets.length < 1){
            this.bullets.push(new Hadouken(this.canvas, this.ctx, this.x, this.y, this.directionRight))
        }
    }
};

