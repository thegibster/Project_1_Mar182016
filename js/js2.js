var c = document.getElementById("myCanvas");
var ctx=c.getContext('2d');
var x = 0;
var y = 200;
var dx = 2;
var dy = 0;
var now,lastTime
var spaceship = new Spaceship();
var missle =  new Missle();
var loss = -1;
var wins = 0;
var points =0;


function drawSpaceShip() {
 spaceship.render(x,y);
  missle.render(x+3,y+3);
  loopBadSpaceShips();
   document.getElementById("Wins").innerHTML = 'Wins: ' + wins;
    document.getElementById("Loss").innerHTML = 'Losses: ' + loss;
     document.getElementById("Points").innerHTML = 'Points: ' + points;
}



function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawSpaceShip();
    if(x>c.width-200){
      x=x;
      y=y
    }
    else{
    x += dx;
    y += dy;
    }
}
// Spaceship Object Constructor
function Spaceship() {
    this.x = x;
    this.y = y;
    this.sprite = '/images/spaceship.png';

};
// Spaceship render draws the spaceship in x,y cordplane
Spaceship.prototype.render = function(xVar,yVar) {
   var img = new Image();
   img.src = "images/spaceship.png";
   img.onload = function(){

     ctx.drawImage(img,xVar||this.x,yVar||this.y);



   };
};

//End of Spaceship Object Constructor

// Missle Object Constructor
function Missle() {
    this.x = x;
    this.y = y;
    this.sprite = '/images/missle1.png';

};

Missle.prototype.render = function(xVar,yVar) {
   var img = new Image();
   img.src = "images/missle1.png";
   img.onload = function(){
     ctx.drawImage(img,xVar||this.x,yVar||this.y);
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


setInterval(draw, 10); // runs infinitly calling draw and subsequent calls
