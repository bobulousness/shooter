'use strict';
//booleans
var canShoot = true;
var startTime = false;
var goLeft = [];
var useTime = [];
var firsttime = false;
var existg = false;
var existb = false;
//parent sprite
var baddudes;
//collision groups
var bulcol;
var enemycol;
var pcol;
var sidecol;
var bbad;
var killer;
//arrays
var enemyarray = [];
var lv1S = [];
var lv1L = [];
var lv1DL = [];
var lv1DR = [];
var lv1R = [];
var lv1E = [];
//values
var w;
var q;
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
    this.load.image('edge','blckstpvrt.png');
  }
  badguys(x,y){
    w = 10;
    this.badbois(x,y);
    for ( q = 0; q<w;q++) {
      var t = q*1000
      useTime.push(0);
      lv1S[q] = game.add.tween(enemyarray[q]).to({x:16},4000+t,Phaser.Easing.Linear.None,true,0);
      lv1L[q] = game.add.tween(enemyarray[q]).to({x: 16},4000,Phaser.Easing.Linear.None,false,0);
      lv1DL[q] = game.add.tween(enemyarray[q]).to({y: enemyarray[q].y+46},1000,Phaser.Easing.Linear.None,false,0);
      lv1R[q] = game.add.tween(enemyarray[q]).to({x: 268},4000,Phaser.Easing.Linear.None,false,0);
      lv1S[q].chain(lv1DL[q]);
      lv1R[q].chain(lv1DR[q]);
      lv1DR[q] = game.add.tween(enemyarray[q]).to({y: enemyarray[q].y+92},1000,Phaser.Easing.Linear.None,false,0);
      lv1DL[q].chain(lv1R[q]);
      lv1R[q].chain(lv1DR[q]);
      lv1DR[q].chain(lv1L[q]);
      lv1L[q].chain(lv1DL[q]);
    }
    var badbulT = game.time.create(true);
    badbulT.loop(4000,this.badFire);
    badbulT.start();
  }

   badFire() {
     for (var i=0;i<w;i++) {
       bbad = game.add.sprite(enemyarray[i].x+15.5,enemyarray[i].y+36,'bbad');
       bbad.scale.setTo(3,6);
       bbad.angle = 180;
       killer = game.add.tween(bbad).to({y:600},5000,Phaser.Easing.Linear.None,true,0);
       console.log("it is done");
       existb = true;
      }
}
  eg() {
    existg = false;
    console.log("now is false");
  }

  badbois(x,y){
    for(var i=0;i<w;i++){
      //finish this up
      var t = i*46 ;
      enemyarray[i] = game.add.sprite(x+t,y,'btrfly');
    }
    console.log(enemyarray);
  }
  overlapCheck(g,h){
    console.log(g);
    console.log(h);
    if(enemyarray[h] != 0 && g.overlap(game.state.states.Play.bulgd)) {
      enemyarray[h] = 0;
      game.state.states.Play.bulgd.destroy();
    }
  }
  
  bullet() {
    if (firsttime  === false){
      this.bulgd = game.add.sprite(this.player.body.x,this.player.body.y - 33, 'bgud');
      this.bulgd.scale.setTo(3,6);
      firsttime = true;
      game.physics.p2.enable(this.bulgd);
      this.bulgd.body.velocity.y = -120;
      this.bulgd.autocull = true;
      this.bulgd.outOfCameraKill;
      existg = true;
      if (this.bulgd.inCamera === false) {
         existg = false;
      }
    } else if (this.bulgd.inCamera === false){
      this.bulgd = game.add.sprite(this.player.body.x,this.player.body.y - 33, 'bgud');
      this.bulgd.scale.setTo(3,6);
      game.physics.p2.enable(this.bulgd);
      this.bulgd.body.velocity.y = -120;
    }
  }
//find some way to try to get a bullet existence variable to be false
  
  bulletTimer() {
    game.time.removeAll();
    var timer = game.time.create(true);
    timer.add(4000,this.nowTrue);
    timer.start();
  }
  
  nowTrue(c) {
    canShoot = true;
  }
  starter() {
    startTime = true;
    console.log("game start");
  }


  death(body1,body2) {
    body1.sprite.kill();
    body2.sprite.kill();
    console.log("boom");
  }
  
  create() {
    //physics
    game.physics.startSystem(Phaser.Physics.P2JS);
    //collision group 
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.updateBoundsCollisionGroup();
    game.physics.p2.restitution = 0.8;
    enemycol = game.physics.p2.createCollisionGroup();
    bulcol = game.physics.p2.createCollisionGroup();
    pcol = game.physics.p2.createCollisionGroup();
    sidecol = game.physics.p2.createCollisionGroup();
    //player
    this.player = game.add.sprite(140,500,'bxtrm');
    game.physics.p2.enable(this.player);
    this.cursors = game.input.keyboard.createCursorKeys(); 
    this.player.body.collideWorldBounds = true;
    //enemies
    this.badguys(260,30);
    //starting delay
    var timer = game.time.create(true);
    timer.add(4000, this.starter);
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
      }
    }
    if (existb === true) {
        
      if(this.player.overlap(bbad)) {
        this.player.kill();
        bbad.kill();
        console.log("whyyyyyy");
      }
    }
    if (existg === true){
     enemyarray.forEach(this.overlapCheck);
      
    }
  }
}


var game = new Phaser.Game(320,568);
game.state.add('Play', Boot);
game.state.start('Play');
