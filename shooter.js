'use strict';





-----------------------------------------------------------------------------------------------------------------------
var game = new Phaser.Game(320,568);
game.state.add('play', shooter.Play);
game.state.start('play');
