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
    this.x=0;
    this.y=60;
    this.sprite = '/images/spaceshipBad.png';
    this.speed_x=2;
};

BadSpaceship.prototype.fire = function() {
    theX= this.x;
    theY=this.y;
    missle.render();
};
// BadSpaceship.prototype = new Spaceship();
// BadSpaceship.prototype.constructor = BadSpaceship;
// Spaceship render draws the spaceship in x,y cordplane
//BadSpaceship.prototype = inherit(Spaceship.prototype);
BadSpaceship.prototype.render = function(xVar,yVar) {
   var img = new Image();
   img.src = "images/spaceshipBad.png";
   //console.log("img load in render finc")
   img.onload = function(){
   // console.log("img load in bad space")

     ctx.drawImage(img,xVar||this.x,yVar||this.y);
   };
};

// Loop through all enmey spaceships and call thier rendering
function loopBadSpaceShips(badx,bady){
  for(var count = 0;count < allBadSpaceShips.length;count++){
    //console.log(allBadSpaceShips[count]+ "haha"+allBadSpaceShips[count].x,allBadSpaceShips[count].y)
    if(count %2==0){
      badx+=60;bady+=70;
      //allBadSpaceShips[count].update();
      allBadSpaceShips[count].render(badx,bady);
      badx+=20;bady+=70;
     // allBadSpaceShips[count].update()
    }
      else{
    allBadSpaceShips[count].render(badx,bady);
    badx+=20;bady+=70;
        }
  }

}

BadSpaceship.prototype.update= function(){

     if (this.y >= 500) {
        this.y = 0;
        console.log("c")
    } else {
        this.x += this.speed_x * dt;
        console.log("d",dt)
    }
}









