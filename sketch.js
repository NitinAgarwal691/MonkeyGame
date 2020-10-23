var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;

function preload(){
  
  
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,600);
monkey=createSprite(90,531.9,60,90);  
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.2;
FoodGroup=new Group();
obstacleGroup=new Group();
ground=createSprite(300,595,1200,10);
score=0;
}


function draw() {
background("skyblue");
score=score+Math.round(getFrameRate()/63.6);
if(ground.x<0) {
ground.x=300;
}
if(keyDown("space") && monkey.y>=528.6) {
monkey.velocityY=-15;
}
monkey.velocityY=monkey.velocityY+0.5;
ground.velocityX = -(6+score/60);
monkey.collide(ground);
spawnRock();
spawnBanana();
drawSprites();
textSize(30);
fill("black");
text("Survival Time = "+ score,200,90);
}


function spawnBanana() {
if(frameCount%80===0) {
banana=createSprite(627,300,60,90);
banana.addImage(bananaImage);
banana.scale=0.1;
banana.velocityX=-(6+score/60);
banana.y=Math.round(random(240,369));
banana.lifetime=123;
FoodGroup.add(banana);
}
}

function spawnRock() {
if(frameCount%300===0) {
obstacle=createSprite(621,561,60,90);
obstacle.addImage(obstacleImage);
obstacle.scale=1;
obstacle.velocityX=-(6+score/60);
obstacle.scale=0.2;
obstacle.lifetime=126;
obstacleGroup.add(obstacle);
}
}