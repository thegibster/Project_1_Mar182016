
var canvas = document.createElement('canvas');
var gameContain = $('#containTheGame');
gameContain.append(canvas);
gameContain.append('<div id="startScreen"><button id="startButton">Press To Start</button></div>');
gameContain.append('<div class="sky"><div class="cloud fcloud01"></div><div class="cloud fcloud02"></div></div>');
//gameContain.append('<div class="sprite"></div>')
$('canvas').attr('id', 'myCanvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
$('#startButton').click(function() {
  $(this).hide('slow/400/fast', function() {

  });
    gameContain.append('<div class="sprite"></div>');


   var trackMissle=$('.missle');
    $(document).on("click",function(){
    var x = trackMissle.position();
    console.log(x.left);
    console.log(x.top);
    // the position only appears after the button creates the div missle , else itll fail
});
});

//This is where the missle is treated as an function of the spaceship but as a function to call for testing.
 function removeMissle(){

      $('.missle').remove();
  }
 function removeSprite(){
      $('.sprite').remove();

  }
function theMissleLaunch (){
  gameContain.append( '<div class="missle"></div>');
  setTimeout(removeMissle,2000);

}
gameContain.append( '<div class="spaceship"></div>');
var spaceShip = {
  name:"The Falcon",
  fire:theMissleLaunch,
  missiles: [],
  moveMe: function(){
    $(document).on("keyup", function(e){

      if(e.keyCode==37){
        $('.spaceship').animate({left: "-=1"}, 0); }
      else if(e.keyCode==38){
        $('.spaceship').animate({top: "-=1"}, 0);}
      else if(e.keyCode==39){
      $('.spaceship').animate({left: "+=1"}, 0);}
      else if(e.keyCode==40){
      $('.spaceship').animate({top: "+=1"}, 0);}
})},
 moveMeCont: function(){
    $(document).on("keypress", function(e){
       while(e.keyCode==37){
        console.log("left key")

        $('.spaceship').animate({left: "-=5"}, 0);}
      while(e.keyCode==38){
        $('.spaceship').animate({top: "-=5"}, 0);}
      while(e.keyCode==39){
      $('.spaceship').animate({left: "+=5"}, 0);}
      while(e.keyCode==40){
      $('.spaceship').animate({top: "+=5"}, 0);}
    })
}}



var trackSpaceShip=$('.spaceship');
    $(document).on("load",function(){
    var x = trackSpaceShip.position();
    console.log(x.left);
    console.log(x.top);
  });




// End of missle obj funciton tester





$(".sprite").on("animationend",function(){
    // do something here
    $(this).fadeOut("fast");
 });


document.addEventListener('keyup', function(e) {
     console.log(e.keyCode);
     // key f = e.Keycode 70
});
$(document).on("keyup", function(e){
  if(e.keyCode==70){
    gameContain.append('<div class="sprite"></div>');
     setTimeout(removeSprite,800);
  }
});
$(document).on("keyup", function(e){
 { spaceShip.moveMe();}
});
$(document).on("keyup", function(e){
  if(e.keyCode==77){
    spaceShip.fire()
    setTimeout(removeMissle,2000);
  }
});



// var imageObj = new Image();
//  imageObj.onload = function() {
//   ctx.drawImage(imageObj, 0, 0);
// };
// imageObj.src = 'images/Slickback.jpg';

// ctx.beginPath();
// ctx.arc(75,75,90,0,2*Math.PI);
// ctx.stroke();

// function onMouseOver(evt){
//   console.log(evt.pageX+" X cord");
//   console.log(evt.pageY +" Y cord");
// }
// $(document).on("mousemove",onMouseOver);


//window.addEventListener('resize', resizeCanvas, false);


// function resizeCanvas() {
//             canvas.width = window.innerWidth;
//             //canvas.height = window.innerHeight;

//     }
// resizeCanvas();




// create instances of the objects and have the objects call upon themselves




