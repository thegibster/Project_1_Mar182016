
var canvas = document.createElement('canvas');
var gameContain = $('#containTheGame');
gameContain.append(canvas);
gameContain.append('<div id="startScreen"><button id="startButton">Press To Start</button></div>');
gameContain.append('<div class="sky"><div class="cloud fcloud01"></div><div class="cloud fcloud02"></div></div>');
gameContain.append('<div class="sprite"></div>')
$('canvas').attr('id', 'myCanvas');
canvas.width = 1000;
canvas.height = 600;
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
$('#startButton').click(function() {
  $(this).hide('slow/400/fast', function() {

  });
});
// var imageObj = new Image();
//  imageObj.onload = function() {
//   ctx.drawImage(imageObj, 0, 0);
// };
// imageObj.src = 'images/Slickback.jpg';

ctx.beginPath();
ctx.arc(75,75,90,0,2*Math.PI);
ctx.stroke();



//window.addEventListener('resize', resizeCanvas, false);


// function resizeCanvas() {
//             canvas.width = window.innerWidth;
//             //canvas.height = window.innerHeight;

//     }
// resizeCanvas();









