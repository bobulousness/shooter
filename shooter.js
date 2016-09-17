'use strict';

class Boot {

  init() {
    //creating variables

  }
  preload() {
    this.load.image('bxtrm','beexterm.png');
    this.load.image('bgud','bulgd.png');
    this.load.image('bbad','bulbd.png');
    this.load.image('btrfly','btrfly.png');
  }
  badguys(x,y) {
    this.btrfly = game.add.sprite(x,y,'btrfly');
    //this.btrfly = game.add.sprite(x += 46, y, 'btrfly');
  }
  
  
  create() {
    //physics
    game.physics.startSystem(Phaser.Physics.P2JS);
    //player
    this.player = game.add.sprite(140,400,'bxtrm');
    console.log(this.player);
    game.physics.p2.enable(this.player);
    this.cursors = game.input.keyboard.createCursorKeys();
    //enemies
    //this.badguys(40,30);
    this.btrfly = game.add.sprite(40,30,'btrfly');
  }
  update() {
    if (this.cursors.left.isDown) {
      this.player.body.x -= 3;
    }
    if (this.cursors.right.isDown) {
      this.player.body.x += 3;
    }
    if (this.btrfly.body.x = 280) {
      this.btrfly.body.velocity.x = -4;
    } else if (this.btrfly.body.x = 40) {
      this.btrfly.body.velocity.x = 4;
    }
  }

}


var game = new Phaser.Game(320,568);
game.state.add('Play', Boot);
game.state.start('Play');
