
var canvas = document.createElement('canvas');
var gameContain = $('#containTheGame');
gameContain.append(canvas);
gameContain.append('<div id="startScreen"><button id="startButton">Press To Start</button></div>');
gameContain.append('<div class="sky"><div class="cloud fcloud01"></div><div class="cloud fcloud02"></div></div>');
//gameContain.append('<div class="sprite"></div>')
$('canvas').attr('id', 'myCanvas');
canvas.width = 1000;
canvas.height = 600;
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
$('#startButton').click(function() {
  $(this).hide('slow/400/fast', function() {

  });
    gameContain.append('<div class="sprite"></div>');
   gameContain.append( '<div class="missle"></div>');

   var trackMissle=$('.missle');
    $(document).on("click",function(){
    var x = trackMissle.position();
    console.log(x.left);
    console.log(x.top);
    // the position only appears after the button creates the div missle , else itll fail
});
});

$(".sprite").on("animationend",function(){
    // do something here
    $(this).fadeOut("fast");
 });


document.addEventListener('keyup', function(e) {
     console.log(e.keyCode);
     // key f = e.Keycode 70
});
$(document).on("keyup", function(e){
  if(e.keyCode==70)
 { gameContain.append('<div class="sprite"></div>')}
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









