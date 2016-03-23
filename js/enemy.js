var allBadSpaceShips = [];

var BadSpaceshipInstance;
var length =4;
for (var i = 0; i< length; i++){
    allBadSpaceShips.push(new BadSpaceship());
}
allBadSpaceShips[0].x = 0;
allBadSpaceShips[0].y = 140;
allBadSpaceShips[1].x = 30;
allBadSpaceShips[1].y = 225;
allBadSpaceShips[2].x = 200;
allBadSpaceShips[2].y = 140;
allBadSpaceShips[3].x = 100;
allBadSpaceShips[3].y = 305;
// allBadSpaceShips[0].speed_x = 75;
// allBadSpaceShips[1].speed_x = 120;
// allBadSpaceShips[2].speed_x = 95;

// BadSpaceship.prototype.render = function() {
//   for (var i =0;i<allBadSpaceShips.length;i++){
//     ctx.drawImage(img, this.x, this.y);
//   }
// };

function BadSpaceship() {
    this.sprite = '/images/spaceshipBad.png';
};

BadSpaceship.prototype = new Spaceship();
BadSpaceship.prototype.constructor = BadSpaceship;
// Spaceship render draws the spaceship in x,y cordplane
//BadSpaceship.prototype = inherit(Spaceship.prototype);
BadSpaceship.render = function(xVar,yVar) {
   var img = new Image();
   img.src = "images/spaceshipBad.png";
   img.onload = function(){

     ctx.drawImage(img,xVar||this.x,yVar||this.y);
   };
};

// Loop through all enmey spaceships and call thier rendering
function loopBadSpaceShips(){
  for(var count = 0;count < allBadSpaceShips;count++){
    allBadSpaceShips[count].render();
  }
}









