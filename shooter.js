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
    this.btrfly = this.add.sprite(x,y,'btrfly');
    this.btrfly = this.add.sprite(x += 46, y, 'btrfly');
  }
  create() {
    //physics
    game.physics.startSystem(Phaser.Physics.p2);
    //player
    this.char = this.add.sprite(140,400,'bxtrm');
    console.log(this.char);
    game.physics.p2.enable(this.char);
    this.cursors = game.input.keyboard.createCursorKeys();
    //enemies
    this.badguys(40,30);
  }
  update() {
    if (this.cursors.left.isDown) {
      player.body.x -= 3;
    }
    if (this.cursors.right.isDown) {
      player.body.x += 3;
    }
  }

}


var game = new Phaser.Game(320,568);
game.state.add('Play', Boot);
game.state.start('Play');
