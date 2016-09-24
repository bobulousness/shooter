'use strict';

class Boot {

  init() {
    //creating variables
  var velo = 20
  }
  preload() {
    this.load.image('bxtrm','beexterm.png');
    this.load.image('bgud','bulgd.png');
    this.load.image('bbad','bulbd.png');
    this.load.image('btrfly','btrfly.png');
    
  }
  badguys(x,y) {
    this.btrfly = game.add.sprite(x,y,'btrfly');
    this.btrfly1 = game.add.sprite(x += 46, y, 'btrfly');
  }
  
  bullet() {
     this.bulgd = game.add.sprite(this.player.body.x,this.player.body.y);
     sprite.scale.setTo(3,6);
     game.physics.p2.enable(this.bulgd);
     this.bulgd.body.velocity.x = 30;
     
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
    this.badguys(40,30);
    game.physics.p2.enable(this.btrfly);
    game.physics.p2.enable(this.btrfly1);
  }
  update() {
    if (this.cursors.left.isDown) {
      this.player.body.x -= 3;
    }
    if (this.cursors.right.isDown) {
      this.player.body.x += 3;
    }
    if (this.cursors.up.isDown) {
      this.bulgd = game.add.sprite(this.player.body.x,this.player.body.y);
      game.physics.p2.enable(this.bulgd)
      
    }
    /*if (this.btrfly.body.x = 280) {
      this.btrfly.body.velocity.x = -14;
      console.log(this.btrfly.body)
    } else if (this.btrfly.body.x = 40) {
      this.btrfly.body.velocity.x = 14;
    }*/
  }

}


var game = new Phaser.Game(320,568);
game.state.add('Play', Boot);
game.state.start('Play');
