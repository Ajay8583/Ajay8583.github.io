$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1100,400, 200, 90, "black");
    createPlatform(900, 500, 50, 50, "black");
    createPlatform(700, 600, 50, 50, "black");
    createPlatform(500, 650, 45, 45,"black");
    createPlatform(780,300,100,95,"black")


    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 50, 1, 0.5);
    createCollectable("diamond", 910, 170, 0.5, 0.7);
    createCollectable("grace", 710, 60, 0.7, 0.5);



    
    // TODO 4 - Create Cannons
    createCannon("top", 700, 1000);
createCannon("right", 650, 1000);
createCannon("left",400, 1500)
createCannon("right",400,1600)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
