var rect1,rect2;


function setup() {
  createCanvas(800,400);
  rect1=createSprite(100, 100, 70, 70);
  rect1.shapeColor="yellow";
  rect2=createSprite(200, 200, 50, 50);
  rect2.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  rect2.x=mouseX;
  rect2.y=mouseY;
  console.log(rect1.x-rect2.x)
  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect1.width/2+rect2.width/2&&
    rect1.y-rect2.y<rect1.height/2+rect2.height/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2){
    rect2.shapeColor="blue";
    rect1.shapeColor="pink";
  }
  else{
    rect1.shapeColor="yellow";
    rect2.shapeColor="red";
  }
 
  drawSprites();
}