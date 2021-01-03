var PLAY
var END
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);


 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,380,400,20);
  
  FoodGroup = new Group()
  obstacleGroup = new Group()

  
}


function draw(){
  background("green");
if(keyDown("space")&& monkey.y>280){
  monkey.velocityY = -10;
  
}
monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
Obstacle();
Banana();
drawSprites()  
}

function Obstacle(){
 if(frameCount%60===0){
   obstacle = createSprite(400,350);
   obstacle.velocityX=-3;
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;
   obstacleGroup.add(obstacle);
 }
}

function Banana(){
  if(frameCount%80===0){
    banana = createSprite(400,250);
    banana.velocityX=-3;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    FoodGroup.add(banana);
  }
}


