var fixedRect, movingRect;
var rect1,rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(200,500,50,100);
  rect1.shapeColor="pink";
  rect2 = createSprite(100,400,100,50);
  rect2.shapeColor="pink";
  
  rect2.velocityX=1;
  fixedRect.velocityX=-1;



}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  

 if(isTouching(movingRect,rect1)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
 }else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "pink";
 }
  bounceOff(fixedRect,rect2);
  drawSprites();
}


