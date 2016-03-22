// function spaceship(){
//   this.name="The Falcon";
//   this.position;
//   this.moveMe;
//   this.fire= function missle(){
//         this.explode;
//         this.launch;


// }

// }

// spaceship.prototype.length = 1;
// missle.prototype.length = 1;

var FPS = 30;
setInterval(function() {
  //update();
  draw();
}, 1000/FPS);

//function update() {  }
function draw() {
  canvas.fillStyle = "#FF0320"; // Set color to black
  canvas.fillText("Sup Bro!", 350, 350);
}
