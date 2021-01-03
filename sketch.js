//Create variables
var ground, groundImage,
  bow, bowImage,
  red, redballoonImage,
  blue, blueballoonImage,
  green, greenballoonImage,
  pink, pinkballoonImage,
  arrow, arrowImage,
  selectballoon;

//load images
function preload() {
  groundImage = loadImage("background0.png")
  bowImage = loadImage("bow0.png")
  redballoonImage = loadImage("red_balloon0.png")
  blueballoonImage = loadImage("blue_balloon0.png")
  pinkballoonImage = loadImage("pink_balloon0.png")
  greenballoonImage = loadImage("green_balloon0.png")
  arrowImage = loadImage("arrow0.png")
}

function setup() {
  createCanvas(400, 400);

  //create background
  ground = createSprite(0, 45, 800, 800);
  ground.addImage("background", groundImage);
  ground.x = ground.width / 2;
  ground.scale = 2;

  bow = createSprite(380, 20, 20, 20);
  bow.addImage(bowImage);

}

function redBalloon() {
  red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(redballoonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueballoonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(greenballoonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkballoonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale=1.5;
}


function draw() {

  background(220);
  
  //to make random balloons appear
  var selectBalloon = Math.round(random(1, 4));
  console.log(selectBalloon);

  if (World.frameCount % 80 == 0) {
    if (selectBalloon == 1) {
      redBalloon();
    } else if (selectBalloon == 2) {
      greenBalloon();
    } else if (selectBalloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  //create infinite scrolling background
  ground.velocityX = -2;

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //set bow's y position relative to mouse
  bow.y = mouseY

  //release the arrow when space is pressed
  if (keyDown("space")) {
    createArrow();
    arrow.y = bow.y;
  }
  drawSprites();
}

function createArrow() { //createArrow
  arrow = createSprite(360, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}