function Player2(canvas, ctx) {
    this.x = 900;
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
    this.directionLeft = true;
    this.isKicking = false
}

Player2.prototype.draw = function () {
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
    //this.setListeners();
    this.move();

    this.bullets.forEach(function (b) {
        b.draw();
    })
};

Player2.prototype.move = function () {
    if (this.moveRight) {
        this.moveR();
    } if (this.moveLeft) {
        this.moveL();
    } if (this.isJumping) {
        this.jump();
    } if (this.isShooting) {
        this.shoot()
    } if (this.isKicking) {
        this.kick();
    }
    this.gravity();
    this.bullets.forEach(function (b) {
        b.move();
    })
}


Player2.prototype.moveR = function () {
    if (this.x < this.canvas.width - this.w) {
        this.x = this.x + this.speed;
    }
}

Player2.prototype.moveL = function () {
    if (this.x > 0) {
        this.x = this.x - this.speed;
    }
}


Player2.prototype.jump = function () {
    if (this.isJumping) {
        this.y -= 100
        if (this.y < 300) {
            this.isJumping = false
        }
    }
};

Player2.prototype.kick = function () {
    var that = this;
    if ((that.playeruno.x + that.playeruno.w) > that.playerdos.x &&
  that.playeruno.x < that.playerdos.x + that.playerdos.w &&
  (that.playeruno.y + that.playeruno.h) >= that.playerdos.y) {
console.log("CHOCASTE") 
}
    
    // if (this.isKicking) {
    //     this.w += 200
    //     if (this.w < 100) {
    //         this.isKicking = false
    //     }
    // }
};

Player2.prototype.gravity = function () {
    if (this.y < canvas.height - this.h - 50) {
        this.y = this.y + this.speed;
    }
};
Player2.prototype.shoot = function () {
    if (this.isShooting) {
        if (this.bullets.length < 1){
            this.bullets.push(new Tiger(this.canvas, this.ctx, this.x, this.y, this.directionLeft))
    }
}
};