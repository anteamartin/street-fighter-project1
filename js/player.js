function Player(canvas, ctx, x_start, direction_start, color, p) {
    this.x = x_start;
    this.w = 100;
    this.h = 100;
    this.life = 100;
    this.fillColor = color
    this.y = canvas.height - this.h - 50;
    this.canvas = canvas;
    this.ctx = ctx;
    this.moveRight = false;
    this.moveLeft = false;
    this.isJumping = false;
    this.isShooting = false;
    this.isKicking = false;
    this.speed = 10;
    this.bullets = [];
    this.direction = direction_start;
    this.numberPlayer = p;
    this.paint = false;
    this.ko = false;
    this.recentKick = false;
    this.enemie;
    this.prueba = false;
};

Player.prototype.draw = function (enemie) {
    this.enemie = enemie;
    this.ctx.fillStyle = this.fillColor;
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
    this.ctx.fillStyle = "yellow";
    if (this.direction == "right") {
        this.ctx.fillRect(this.x, this.y, this.w / 2, this.h / 2)
    } else {
        this.ctx.fillRect(this.x + this.w / 2, this.y, this.w / 2, this.h / 2)
    }
    this.move();
    this.drawHealth();
    this.bullets.forEach(function (b) {
        b.draw();
    })
    this.lifebar()
};




Player.prototype.move = function (enemie) {
    this.collisionBetween()
    if (this.moveRight) {
        this.moveR();
    } if (this.moveLeft) {
        this.moveL();
    } if (this.isJumping) {
        this.jump();
    } if (this.isShooting) {
        this.shoot()
    }
    if (this.paint) {
        this.drawKick()
    }
    this.gravity();
    this.bullets.forEach(function (b) {
        b.move();
    })
};

Player.prototype.moveR = function () {
    if (this.x < this.canvas.width - this.w*2.1) {
        this.x = this.x + this.speed;
    }
};

Player.prototype.moveL = function () {
    if (this.x > 120) {
        this.x = this.x - this.speed;
    }
};

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
        if (this.bullets.length < 1) {
            this.bullets.push(new Hadouken(this.canvas, this.ctx, this.x, this.y, this.direction))
        }
    }
};

Player.prototype.kick = function () {

    if (this.isKicking !== true) {
        this.isKicking = true;
        this.paint = true;
        if (this.numberPlayer == 1) {
            this.ctx.fillStyle = "green"
            this.ctx.fillRect(this.x + this.w, this.y, 40, 40)
            setTimeout(function () {
                this.isKicking = false
                this.paint = false;
            }.bind(this), 1000);
        }

        if (this.numberPlayer == 2) {
            this.ctx.fillStyle = "green"
            this.ctx.fillRect(this.x - 40, this.y, 40, 40)
            setTimeout(function () {
                this.isKicking = false
                this.paint = false;
            }.bind(this), 1000);
        }
    }
};

Player.prototype.drawKick = function () {
    if (this.numberPlayer == 1) {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.x + this.w, this.y, 40, 40)
    }

    if (this.numberPlayer == 2) {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.x - 40, this.y, 40, 40)
    }
};

Player.prototype.lifebar = function () {
    if (this.life < 0) this.death()
};

Player.prototype.death = function () {
    this.ko = true
    this.life = 0
};

Player.prototype.drawHealth = function () {
    this.ctx.fillStyle = "green"
    this.ctx.strokeStyle = "black"
    this.ctx.strokeRect(this.x, this.y - 40, this.w, 10)
    this.ctx.fillRect(this.x, this.y - 40, this.life, 10)
};

Player.prototype.playerRecentKick = function () {
    setTimeout(function () {
        this.recentKick = false
    }.bind(this), 999);

};

Player.prototype.collision = function (bullet, player, i) {
    if (player.x < bullet.x + bullet.w && player.x + player.w > bullet.x &&
        player.y < bullet.y + bullet.h && player.y + player.h > bullet.y) {
        this.bullets.splice(i, 1)
        player.life -= 20;
    }
};

Player.prototype.collisionBetween = function () {
    if(this.numberPlayer == 1){
        if( this.x + this.w < this.enemie.x) {
            this.prueba = false
        } 
        else if (this.numberPlayer) {
            this.prueba = true
            this.x = this.x - 20;
        }
    }
    if(this.numberPlayer == 2){
        if( this.x > this.enemie.x + this.enemie.w) {
            this.prueba = false
        } 
        else if (this.numberPlayer) {
            this.prueba = true
            this.x = this.x + 20;
        }  
    }
}