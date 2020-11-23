var back,ground,score;
var bananaI,obstacleI,obstacleG,backI,score,playerA,player;

var bananaG;

function preload(){
  food=loadImage ("banana.png")

  backI = loadImage("jungle.jpg");
 playerA=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}
function setup() {
  createCanvas(600, 400);
  back=createSprite(width/2,height/2,600,400);
  back.addImage("back",backI);
 //back.x=back.width/2;
  back.scale= 0.55;
  player=createSprite(300,250,10,10);
  player.addAnimation("running Monkey",playerA);
    player.scale=0.2
} 
  
function draw() {
 if (frameCount % 50===0){
  spawnBanana()}   
  drawSprites();
  fill ("white")
  text(mouseX+","+mouseY,mouseX,mouseY);
  
}

function spawnBanana(){
 banana=createSprite(300,-5,20,20);
  banana.velocityY=+4
  banana.addAnimation ("banana",food);
  banana.scale=0.05

}

  
  function spawnObstacle(){
    
  
}