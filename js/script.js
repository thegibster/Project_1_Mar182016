
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
$('canvas').attr('id', 'myCanvas');
canvas.width = 1400;
canvas.height = 600;
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var imageObj = new Image();
imageObj.onload = function() {
  ctx.drawImage(imageObj, 0, 0);
};
imageObj.src = 'images/Slickback.jpg';

ctx.beginPath();
ctx.arc(75,75,90,0,2*Math.PI);
ctx.stroke();










