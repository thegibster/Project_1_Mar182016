
var Engine = (function(global) {

    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 1200;
    canvas.height = 780;
    doc.body.appendChild(canvas);

    function main() {

        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;


        update(dt);
        render();


        lastTime = now;


        win.requestAnimationFrame(main);
    }


    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    function checkCollisions() {
      //allCollectables.forEach(function(enemy){console.log(enemy.x,"x",enemy.y,"y")})
        allEnemies.forEach(function(enemy) {
            // while( ((enemy.y <= player.y+20)&& (enemy.y >= player.y-20) )&&
            //       ((enemy.x <= player.x+20)&&(enemy.x >= player.x-20))
            //console.log("should collision")
            while( (enemy.x >= player.x-50 && enemy.x <=player.x+50)&&
              (enemy.y >= player.y-50 && enemy.y <= player.y +50))


            {
                console.log("should collision")
                //console.log("Oh ohhh you have collision");
                alert("You have been asteroid Smacked");
                reset();
                break;
            }


        });

    }

    function toolCollision() {

      allCollectables.forEach(function(tool){
        if ((((tool.x <= player.x) && (tool.x >= player.x -50)) &&
           (( tool.y >= player.y)&&(tool.y -20 >= player.y))) && count <3)


        { if(count < 3){

            tool.update();
            tool.x = 0;
            tool.y = 1000;
            console.log("Oh ohhh you have tool collision");
            itemsCollected += 1;
            count ++;

        }else{
          return null;
          }
      }


      });
    }


    function update(dt) {
        updateEntities(dt);
        checkCollisions();
        toolCollision();
    }


    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
        allCollectables.forEach(function(tool) {
            tool.update(dt);
        });


    }


    function render() {

        var rowImages = [
                'images/routspace.png',
                'images/routspace.png',
                'images/routspace.png',
                'images/routspace.png',
                'images/routspace.png',
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png'
            ],
            numRows = 20,
            numCols = 20,
            row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {

                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities();
    }


    function renderEntities() {

        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
        tool.render();
        plasmaGun.render();
        glove.render();
    }

    function reset() {

        // noop
        player.x = 400;
        player.y = 600;
        var addIt = 60;
        allEnemies.forEach(function(enemy) {
            enemy.y = addIt;
            addIt += 80;
        });
        tool.x = 0;
        tool.y = 300;
        loss += 1;

        document.removeEventListener('keyup', function(e) {
            var allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };
        })
    }


    Resources.load([
        'images/rasteroid.png',
        'images/rspaceship3d.png',
        'images/routspace.png',
        'images/sratPlas.png',
        'images/sratAxe.png',
        'images/sratGlv.png'

    ]);
    Resources.onReady(init);


    global.ctx = ctx;
})(this);
