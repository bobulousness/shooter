'use strict';
var canShoot = true;
var startTime = false;
var baddudes;
var bulcol;
var enemycol;
var pcol;
var sidecol;
var w;
var elength;
class Boot {
  
  init() {
    //creating variable
  
  }
  preload() {
    this.load.image('bxtrm','beexterm.png');
    this.load.image('bgud','bulgd.png');
    this.load.image('bbad','bulbd.png');
    this.load.image('btrfly','btrfly.png');
    
  }
  badguys(x,y) {
    baddudes = this.game.add.sprite(x,y,'btrfly');
    game.physics.p2.enable(baddudes);
    w = 4
    this.badbois(x,y);
    baddudes.body.kinematic = true;
    baddudes.body.velocity.x = -60;
    elength = baddudes.children.length;
    //collision groups
    baddudes.body.setCollisionGroup(enemycol);
    baddudes.body.collides(bulcol,this.death,this);
    for (var i = 0; i < elength;i++) {
      game.physics.p2.enable(baddudes.children[i]);
      baddudes.children[i].body.setCollisionGroup(enemycol);
      baddudes.children[i].body.collides(bulcol,this.death,this);
      baddudes.children[i].body.kinematic = true;
    }
  }
  badbois(x,y) {
    for (var i=0;i < w; i++) {
      var t = i * 46;
      baddudes.addChild(game.add.sprite(x + t - 234, y-30, 'btrfly'));
    }
  }
  
  bullet() {
    canShoot = false;
    this.bulgd = game.add.sprite(this.player.body.x,this.player.body.y - 33, 'bgud');
    this.bulgd.scale.setTo(3,6);
    game.physics.p2.enable(this.bulgd);
    this.bulgd.body.velocity.y = -120;
    this.bulgd.body.kinematic = true;
    this.bulgd.body.setCollisionGroup(bulcol);
    this.bulgd.body.collides(enemycol,this.death,this);
    this.bulletTimer();
  }
  
  bulletTimer() {
    game.time.removeAll();
    var timer = game.time.create(true);
    timer.loop(4000,this.nowTrue);
    timer.start();
  }
  
  nowTrue(c) {
    canShoot = true; 
  }
  nowFalse() {
    startTime = true;
  }

  death(body1,body2) {
    body1.destroy();
  }
  
  create() {
    //physics
    game.physics.startSystem(Phaser.Physics.P2JS);
    //collision groups
    enemycol = game.physics.p2.createCollisionGroup();
    bulcol = game.physics.p2.createCollisionGroup();
    pcol = game.physics.p2.createCollisionGroup();
    //player
    this.player = game.add.sprite(140,400,'bxtrm');
    game.physics.p2.enable(this.player);
    this.player.body.kinematic = true;
    this.cursors = game.input.keyboard.createCursorKeys();
    this.player.body.setCollisionGroup(pcol);
    //enemies
    this.badguys(280,30);
    //starting delay
    var timer = game.time.create(true);
    timer.loop(10000, this.nowFalse);
    timer.start();
  }
  update() {
    if (this.cursors.left.isDown) {
      this.player.body.x -= 3;
    }
    if (this.cursors.right.isDown) {
      this.player.body.x += 3;
    }
    if (this.cursors.up.isDown) {
      if (canShoot === true) {
        this.bullet();
        console.log("fire");
      }else {
        console.log("you cannot shoot!");
      }
    }
    if (baddudes.body.x >= 270) {
      baddudes.body.velocity.x = -60;
      if (startTime === true){
        baddudes.body.y += 46
        for(var i = 0; i < w; i++) {
          baddudes.children[i].body.velocity.x =-60;
          baddudes.children[i].body.y += 46;
        }
      }

    } 
    if (baddudes.children[3].body.x <= 46) {
      baddudes.body.velocity.x = 60;
      for (var i = 0; i < w;i++) {
          baddudes.children[i].body.velocity.x = 60;
          baddudes.children[i].body.y += 46;
      }
      baddudes.body.y += 46;
    }
   
  }

}


var game = new Phaser.Game(320,568);
game.state.add('Play', Boot);
game.state.start('Play');
