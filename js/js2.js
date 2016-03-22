var c = document.getElementById("myCanvas");
var ctx=c.getContext('2d');
var x = 0;
var y = 200;
var dx = 2;
var dy = 0;
var now,lastTime
var spaceship = new Spaceship();


function drawSpaceShip() {
 spaceship.render(x,y);

}



function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawSpaceShip();
    if(x>c.width-300){
      x=x;
      y=y
    }
    else{
    x += dx;
    y += dy;
    }
}

function Spaceship() {
    this.x = x;
    this.y = y;
    this.sprite = '/images/spaceship.png';

};

Spaceship.prototype.render = function(xVar,yVar) {
   var img = new Image();
   img.src = "images/spaceship.png";
   img.onload = function(){

     ctx.drawImage(img,xVar||this.x,yVar||this.y);



   };
};


setInterval(draw, 10);
