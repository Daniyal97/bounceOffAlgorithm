var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  
fixedRect = createSprite(100,200,50,50);
fixedRect.shapeColor= "white";
fixedRect.debug=true;
fixedRect.velocityX = 3;

movingRect= createSprite (1000,200,50,50);
movingRect.shapeColor ="red";
movingRect.debug=true;
movingRect.velocityX = -3;
}

function draw() {
  background("black");  
  console.log(fixedRect.x - movingRect.x);
/*movingRect.x = mouseX;
movingRect.y = mouseY;*/

if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
 fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
 movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 ){
  fixedRect.velocityX = fixedRect.velocityX *(-1);
  movingRect.velocityX = movingRect.velocityX *(-1);
}



  
  drawSprites();
}