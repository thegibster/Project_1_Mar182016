
var Enemy = function() {

    this.x = 0;
    this.y = 50;
    this.sprite = 'images/rasteroid.png';
    this.speed_x=0;
};
var loss = -1;
var win = 0;


Enemy.prototype.update = function(dt) {

    if (this.x >= 1150) {
        this.x = 0;
    } else {
        this.x += this.speed_x * dt;
    }

    document.getElementById("Loss").innerHTML = 'Losses: ' + loss;

};
Enemy.prototype.handleInput = function(dt) {


};



Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
    this.x = 600;
    this.y = 600;
    this.sprite = 'images/rspaceship3d.png';

};

Player.prototype.update = function(dt) {
    document.getElementById("Wins").innerHTML = 'Wins: ' + win;
    if (this.y <= 0) {
        //win += 1;
        console.log('You have avoided the poison comets.');

        // or reset method could go here
        // this.x = 500;
        // this.y = 400;
        // tool.y = 300;

    }

};
Player.prototype.handleInput = function(dt) {

    switch (dt) {

        case 'up':
            if (this.y > 0) {
                if (this.y === 0) {
                   // alert('Congrats you have won');
                   // reset();
                   console.log("meow")

                } else {
                    {
                        this.y -= 50;
                        PlaySound();
                    }
                }
            }
            break;
        case 'down':
            if (this.y < 650) {
                this.y += 50;
            }
            break;

        case 'left':
            if (this.x > 90) {
                this.x -= 50;
            }
            break;
        case 'right':
            if (this.x <1100) {
                this.x += 50;
            }
            break;
        default:
            break;


    }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Tool = function() {
    this.x = 0;
    this.y = 300;
    this.sprite = 'images/sratAxe.png';
    this.i = 0;
    this.speed_x=80;

};

Tool.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Tool.prototype.update = function(dt) {
  if (this.x >= 1150) {
        this.x = 0;
    } else {
        this.x += this.speed_x * dt;
    }

    document.getElementById("Points").innerHTML = 'Weapons Remain: ' + itemsCollected;


};
var  count =0;
var itemsCollected = 0;
var allEnemies = [];
var allCollectables = [];
var length =6;
var asteroidsPool=600;
var asteriodChangex=50;
for (var i = 0; i<=length; i++){
    allEnemies.push(new Enemy());
    allEnemies[i].x =asteriodChangex;
    if(asteroidsPool<=0){
      asteroidsPool=500;
    }
    else if(asteroidsPool>=100){
      asteroidsPool-=100;
    }

    else{
      asteroidsPool=600;
    }
    allEnemies[i].speed_x = asteroidsPool ;


    console.log(i)
}
// allEnemies[1].x = 0;
// allEnemies[1].y = 150;
// allEnemies[2].x = 0;
// allEnemies[2].y = 250;
 allEnemies[5].speed_x = 475;
allEnemies[4].speed_x = 420;
 allEnemies[1].speed_x = 135;

var player = new Player();
var tool = new Tool();
var glove = new Tool();
var plasmaGun  = new Tool();
var blaster = new Tool();
tool.x= 600;
tool.y= 475;
glove.y =70;
glove.x = 400;
glove.speed_x=200;
glove.sprite = 'images/sratGlv.png';
plasmaGun.y=150;
plasmaGun.x=500;
plasmaGun.speed_x=120;
plasmaGun.sprite ='images/sratPlas.png';
blaster.sprite = 'images/sratblast.png';
blaster.speed_x=145;
blaster.y = 300;
blaster.x= 700;
allCollectables.push(tool);
allCollectables.push(glove);
allCollectables.push(plasmaGun);
allCollectables.push(blaster);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

    // console.log(e.keyCode);
    console.log(player.x, player.y,"player");
     console.log(allCollectables[1].x,allCollectables[1].y,"glove");
    console.log(tool.x, tool.y,"tool");
});

//remove animation stuff
function removeThoseMations(){
  $('#boomSound').remove();
  $("#initialPage").remove();
  $("#sprite").remove();
  $("#aniWrd").remove();
  $('body').prepend('<audio src="sounds/SpaceInvaders.mp3" autoplay></audio>');
}

setTimeout(removeThoseMations,4000)
