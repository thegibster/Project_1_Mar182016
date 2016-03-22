
//var c = $('#myCanvas');
var c = document.getElementById("myCanvas");
var ctx=c.getContext('2d');
var lastTime;

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    spaceship.handleInput(allowedKeys[e.keyCode]);

});
Spaceship = function() {
    this.x = 200;
    this.y = 400;
    this.sprite = '/images/spaceship.png';

};

Spaceship.prototype.render = function(xVar,yVar) {
   var img = new Image();
   img.src = "images/spaceship.png";
   img.onload = function(){

     ctx.drawImage(img,xVar||this.x,yVar||this.y);



   };
};


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
                        console.log("up")
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
Spaceship.prototype.update = function(dt) {
    //document.getElementById("Wins").innerHTML = 'Wins: ' + win;


};

function main() {

        var now = Date.now();
        var dt = (now - lastTime) / 1000.0;

        update(dt);
        render();
        lastTime = now;
        window.requestAnimationFrame(main);
        main();
    }
function render(){
  renderAll();
}
function renderAll() {
  spaceship.render();
}


var spaceship =new Spaceship();
spaceship.render();
var spaceship2 =new Spaceship();
spaceship2.render(300,400);
var spaceship3 =new Spaceship();
spaceship2.render(500,400);
spaceship.handleInput();
$(document).on("load",main);
