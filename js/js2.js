var c = document.getElementById("myCanvas");
var ctx=c.getContext('2d');
var x = 920;
var y = 200;
var badx = 0;
var bady = 250;
var dx = 0;
var dy = 2;
var now,lastTime
var spaceship = new Spaceship();
var missle =  new Missle();
var loss = -1;
var wins = 0;
var points =0;
var launch = false;


function drawSpaceShip() {
  if(launch==true){
    spaceship.render();
   missle.render(spaceship.x+10,spaceship.y+10);
 //spaceship.fire();
  loopBadSpaceShips(x,y);

   document.getElementById("Wins").innerHTML = 'Wins: ' + wins;
    document.getElementById("Loss").innerHTML = 'Losses: ' + loss;
     document.getElementById("Points").innerHTML = 'Points: ' + points;
  }
  else {
 spaceship.render();
 // missle.render(x+3,y+3);
 //spaceship.fire();
  loopBadSpaceShips(x,y);

   document.getElementById("Wins").innerHTML = 'Wins: ' + wins;
    document.getElementById("Loss").innerHTML = 'Losses: ' + loss;
     document.getElementById("Points").innerHTML = 'Points: ' + points;
}
}



function draw() {
  now = Date.now();
  dt = (now - lastTime) / 1000.0;
  lastTime=now;
    ctx.clearRect(0, 0, c.width, c.height);
    drawSpaceShip();
    if(y>532 ){
      x=x;
      y=10;
      badx=badx;
      bady=bady;
    }
    else{
    x += dx;
    y += dy;
    bady+=dy;
    badx+=dy;
    }
}
// Spaceship Object Constructor
function Spaceship() {
    this.x = 100;
    this.y = 500;
    this.sprite = '/images/spaceship.png';

};
// Spaceship render draws the spaceship in x,y cordplane
Spaceship.prototype.render = function() {
   var img = new Image();
   img.src = "images/spaceship.png";
   this.x+=5;this.y+=5;
   img.onload = function(){

     ctx.drawImage(img,this.x,this.y);
     console.log(this.x,this.y)



   };
};

Spaceship.prototype.fire = function() {

    missle.render(x,y);
    launch=true;

};
//End of Spaceship Object Constructor

// Missle Object Constructor
function Missle() {
    this.x = x;
    this.y = y;
    this.sprite = '/images/missle1.png';

};

Missle.prototype.render = function(thex,they) {
   var img = new Image();
   img.src = "images/missle1.png";
   img.onload = function(){
     ctx.drawImage(img,thex,they);
   };
};
// Missle.prototype.hitObject(){
//   // want to have the hit counter increase here if the missle hit
//   //whether its an enemy missle or player missle based on type of
//   //player/enemy object
//    sudo code
//     if((this.x <= OtherObject.x && this.x <= OtherObject.x)&&
//         (this.y <= OtherObject.x && this.x <= OtherObject.x)



//       );

//     }                                               ){}


// }

// End of Missle Object Constructor

Spaceship.prototype.handleInput = function(dt) {

    switch (dt) {

        case 'up':
            if (this.y > 0) {
                if (this.y === 0) {
                    alert('Congrats you have won');
                    reset();

                } else {
                    {
                        this.y -= 83;
                        this.fire();
                        console.log("up fire")
                    }
                }
            }
            break;
        case 'down':
            if (this.y < 400) {
                this.y += 83;
                console.log("check1");
            }
            break;

        case 'left':
            if (this.x > 0) {
                this.x -= 107;
                 console.log("check2");
            }
            break;
        case 'right':
            if (this.x < 400) {
                this.x += 107;
                 console.log("check3");
            }
            break;
        default:
            break;


    }
};
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    spaceship.handleInput(allowedKeys[e.keyCode]);

});


setInterval(draw, 10); // runs infinitly calling draw and subsequent calls
