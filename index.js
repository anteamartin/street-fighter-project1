window.onload = function() {
    var game = new Game("canvas");
  
    game.start();

    document.onkeydown = function (event) {
        if (event.keyCode === 68) {
            game.playeruno.moveRight = true;
        } else if (event.keyCode === 65) {
            game.playeruno.moveLeft = true;
        } else if (event.keyCode === 87) {
            game.playeruno.isJumping = true;
        }
        else if (event.keyCode === 76) {
            game.playerdos.moveRight = true;
        } else if (event.keyCode === 74) {
            game.playerdos.moveLeft = true;
        } else if (event.keyCode === 73) {
            game.playerdos.isJumping = true;
        }
    }
    document.onkeyup = function (event) {
        if (event.keyCode === 68) {
        game.playeruno.moveRight = false;
        } else if (event.keyCode === 65) {
        game.playeruno.moveLeft = false;
        } else if (event.keyCode === 87) {
        game.playeruno.isJumping = false;
        }
        else if (event.keyCode === 76) {
            game.playerdos.moveRight = false;
        } else if (event.keyCode === 74) {
            game.playerdos.moveLeft = false;
        } else if (event.keyCode === 73) {
            game.playerdos.isJumping = false;
        }
    }
  };