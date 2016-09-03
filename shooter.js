'use strict';

class PlayState {

  init() {
    //creating variables

  }
  preload() {
    this.load.image('bxtrm',beexterm.png);
  }
  create() {
    this.bxtrm = this.add.sprite(100,200,'bxtrm';
  }



-----------------------------------------------------------------------------------------------------------------------
var game = new Phaser.Game(320,568);
game.state.add('play', shooter.Play);
game.state.start('play');
