
var Engine = (function(global) {

    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 1200;
    canvas.height = 806;
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
      allCollectables.forEach(function(enemy){console.log(enemy.x,"x",enemy.y,"y")})
        allEnemies.forEach(function(enemy) {
            while( ((enemy.y+50 <= player.x-50)&& (enemy.y+50 >= player.x-50) )&&
                  ((enemy.x <= player.x-50)&&(enemy.x >= player.x-50))
              )


            {

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
            itemsCollected += 1;
            tool.update();
            tool.x = 0;
            tool.y = 1000;
            console.log("Oh ohhh you have tool collision");
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
        // tool.update();
        // plasmaGun.update();
        // glove.update();


    }


    function render() {

        var rowImages = [
                'images/routspace.png', // Top row is water
                'images/routspace.png', // Row 1 of 3 of stone
                'images/routspace.png', // Row 2 of 3 of stone
                'images/routspace.png', // Row 3 of 3 of stone
                'images/routspace.png', // Row 1 of 2 of grass
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png' ,
                'images/routspace.png',
                'images/routspace.png'// Row 2 of 2 of grass
            ],
            numRows = 10,
            numCols = 10,
            row, col;

        /* Loop through the number of rows and columns we've defined above
         * and, using the rowImages array, draw the correct image for that
         * portion of the "grid"
         */
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
