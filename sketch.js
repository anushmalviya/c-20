
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 200,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(800, 400, 50, 50);
  fixedRect.shapeColor = "red";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "red";
  
  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;

}


function draw() {
  background(0,0,0);  
 
bounceOff(movingRect,fixedRect);
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 

}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
    {

object1.velocityX = object1.velocityX * (-1);
object2.velocityX = object2.velocityX * (-1);
    }

   if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
  

  object1.velocityY = object1.velocityY * (-1);
object2.velocityY = object2.velocityY * (-1);
    }
}


