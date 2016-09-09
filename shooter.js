'use strict';

class Boot {

  init() {
    //creating variables

  }
  preload() {
    this.load.image('bxtrm','beexterm.png');
  }
  create() {
    this.bxtrm = this.add.sprite(100,400,'bxtrm');
  }

}


var game = new Phaser.Game(320,568);
game.state.add('Play', Boot);
game.state.start('Play');
