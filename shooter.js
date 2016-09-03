'use strict';

class Boot {

  init() {
    //creating variables

  }
  preload() {
    this.load.image('bxtrm',beexterm.png);
  }
  create() {
    this.bxtrm = this.add.sprite(100,200,'bxtrm');
  }

}


var game = new Phaser.Game(320,568);
game.state.add('play', Boot.Play);
game.state.start('play');
