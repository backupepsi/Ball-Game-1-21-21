var   score, redimg, orangeimg, yellowimg, greenimg, playerimg, player, blueimg, binimg, cannonimg, ground, gameState; 

function preload(){
 redimg = loadImage("1red.png");
 orangeimg = loadImage("2orange.png");
 yellowimg = loadImage("3yellow.png");
 greenimg = loadImage("4green.png");
 blueimg = loadImage("5blue.png");
 playerimg = loadImage("player_ball.png");
 binimg = loadImage("bin.png");
 cannonimg = loadImage("cannon.png"); 
}
function setup() {
  createCanvas(2000, 1500); 
  
  for(var i = 400; i<1230; i = i+200){
    red = createSprite(i, 100, 50, 50);
    red.addImage("Red Ball", redimg);
    red.scale = 0.83;
  }
  
  for(var i = 400; i<1230; i = i+200){
    orange = createSprite(i, 250, 50, 50);
    orange.addImage("Orange Ball", orangeimg);
    orange.scale = 0.83;

  }
  
  for(var i = 400; i<1230; i = i+200){
    yellow = createSprite(i, 400, 50, 50);
    yellow.addImage("Yellow Ball", yellowimg);
    yellow.scale = 0.83;
  }
  
  for(var i = 400; i<1230; i = i+200){
    green = createSprite(i, 550, 50, 50);
   green.addImage("Green Ball", greenimg);
   green.scale = 0.83;
  }
  
  for(var i = 400; i<1230; i = i+200){
    blue = createSprite(i, 700, 50, 50);
    blue.addImage("Blue Ball", blueimg);
    blue.scale = 0.83;
  }
  
gameState = "begin";

 ground = createSprite(width/2,height-10, width, 20);
 cannon = createSprite(width/2, height-20, 15, 30);
 cannon.addImage("Cannon", cannonimg);
 cannon.scale = 1.2;

 player = createSprite(width/2, height-288, 50,50);
 player.addImage("Player Ball", playerimg);
 player.scale = 0.65

 bottomborder = createSprite(width/2, 1289, width, 2);
 bottomborder.visible = false;

 leftborder = createSprite(1, height/2,2 , height);
 leftborder.visible = false;

 rightborder = createSprite(1999, height/2, 2, height);
 rightborder.visible = false;

 topborder = createSprite(width/2, 1, width, 2);
 topborder.visible = false;
  
velX = random(-50, 50);
velY = random(-50,-25);
  
}

function draw() {
  background(0);
  drawSprites();

  ground.shapeColor = "brown";

  cannon.collide(ground);

  if(keyDown("RIGHT_ARROW")){
    cannon.x +=5;
  }
  if(keyDown("LEFT_ARROW")){
    cannon.x -=5;
  }
 if(gameState==="begin"){
   player.x = cannon.x
 }

 if(keyDown("R")){
  gameState = "begin";
}

 if (player.isTouching(bottomborder||topborder||leftborder||rightborder)){
   gameState = "begin";
 }
if(keyDown("SPACE")){
  gameState = "play";
  player.velocityX = velX;
  player.velocityY = velY;
}




}