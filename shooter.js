'us strict';

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
    this.btrfly = this.add.sprite(x += 41, y, 'btrfly');
  }
  create() {
    this.bxtrm = this.add.sprite(140,400,'bxtrm');
  }

}


var game = new Phaser.Game(320,568);
game.state.add('Play', Boot);
game.state.start('Play');
