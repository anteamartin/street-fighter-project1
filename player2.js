function Player2(canvas, ctx) {
    this.x = 900;
    this.w = 100;
    this.h = 100;
    this.y = canvas.height-this.h - 50;
    this.canvas = canvas;
    this.ctx = ctx;
    this.moveRight = false;
    this.moveLeft = false;
    this.isJumping = false;
    this.speed = 10;
    
}

Player2.prototype.draw = function () {
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
    //this.setListeners();
    this.move();
};

Player2.prototype.move = function () {
    if(this.moveRight){
        this.moveR();
    } if(this.moveLeft) {
        this.moveL();
    } if (this.isJumping){
        this.jump();
    }
    this.gravity();
}


Player2.prototype.moveR = function () {
    if (this.x < this.canvas.width - this.w){
        this.x = this.x + this.speed;
    }
}

Player2.prototype.moveL = function () {
    if(this.x > 0){
        this.x = this.x - this.speed;
    }
}

// Player2.prototype.setListeners = function () {
//     document.onkeydown = function (event) {
//         if (event.keyCode === 76) {
//             this.moveRight = true;
//         } else if (event.keyCode === 74) {
//             this.moveLeft = true;
//         } else if (event.keyCode === 73) {
//             this.isJumping = true;
//         }
//     }.bind(this);
//     document.onkeyup = function (event) {
//         if (event.keyCode === 76) {
//             this.moveRight = false;
//         } else if (event.keyCode === 74) {
//             this.moveLeft = false;
//         } else if (event.keyCode === 73) {
//             this.isJumping = false;
//         }
//     }.bind(this);
// };

Player2.prototype.jump = function () {
    if (this.isJumping) {
        this.y -= 100
        if (this.y < 300) {
          this.isJumping = false
        }
    }
};

Player2.prototype.gravity = function () {
 if (this.y < canvas.height-this.h - 50){
     this.y = this.y + this.speed;
 }
};