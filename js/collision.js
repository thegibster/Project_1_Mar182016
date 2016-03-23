function checkCollisions() {
    allMissles.forEach(function(missle) {
        while (((missle.y > spaceship.y - 20) && (missle.y < player.y + 20)) &&
            ((missle.x > spaceship.x - 20) && (missle.x < spaceship.x + 20)))
        {
            //console.log("Oh ohhh you have collision");
            alert("You have been missled :)!!!");
            reset();
            break;
        }
    })
}
