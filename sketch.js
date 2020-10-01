var mr,fr;

function setup() {
  createCanvas(800,400);
  mr = createSprite(100, 200, 50, 30);
  fr = createSprite(600, 200, 40, 80);
  mr.velocityX=3;
  fr.velocityX=-3;

  mr.shapeColor = "green";
  fr.shapeColor = "green";

  mr.debug = true;
  fr.debug = true;
}

function draw() {
  background(230); 
  
  //mr.x = mouseX;
  //mr.y = mouseY;

  /*if(fr.x - mr.x <= fr.width/2 + mr.width/2 && 
    mr.x - fr.x <= fr.width/2 + mr.width/2){*/
  if (Math.abs(fr.x-mr.x) <= mr.width/2+fr.width/2 && Math.abs(fr.y-mr.y) <= mr.height/2+fr.height/2){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
    mr.velocityX=(-1)*mr.velocityX;
    fr.velocityX=(-1)*fr.velocityX;
  } else {
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }
  drawSprites();
}