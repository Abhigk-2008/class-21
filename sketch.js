var fixedRect, movingRect

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() { createCanvas(1200,800);

   movingRect = createSprite(400, 200, 50, 80);

   movingRect.shapeColor = "green";
    movingRect.debug = false; 
    
    fixedRect = createSprite(600, 400, 80, 30);
     fixedRect.shapeColor = "green"; 
     fixedRect.debug = false;
     gameObject1 = createSprite(100, 100, 50, 50); 
     gameObject1.shapeColor = "green"; 
     gameObject2 = createSprite(200, 100, 50, 50);
     gameObject2.shapeColor = "green";
     gameObject3 = createSprite(300, 100, 50, 50);
     gameObject3.shapeColor = "green";
     gameObject4 = createSprite(400, 100, 50, 50);
     gameObject4.shapeColor = "green";
     }

     function draw() { background(0);  
      movingRect.x = mouseX; 
      movingRect.y = mouseY; 
      if (isTouching(movingRect,gameObject3)){
        movingRect.shapeColor = "red";
        gameObject3.shapeColor = "red";
     }
     else { movingRect.shapeColor = "green";
     gameObject3.shapeColor = "green"
       drawSprites(); }

function isTouching(Object1,Object2) { 

  if (Object1.x-Object2.x > Object2.width/2+Object1.width/2)
  {return true
 } 
 else {
return false
  }

}
