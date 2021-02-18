const Bodies=Matter.Bodies; 
const Engine=Matter.Engine;
const World=Matter.World; 

var house1, house2, house3, house4;
var virus;
var engine;
var world;
var corona, edges;
var object1, object2; 
var p1, p2, p3, p4, p5, p6, p7, p8;
var player;
var score = 0;

function setup() {

  createCanvas(800,400);
  strokeWeight(12);
  stroke("orange");

  player = createSprite(20,200,20,20);
  player.shapeColor = "blue";

  house1 = createSprite(100, 0, 200, 200);
  house1.shapeColor = "white"; 

  strokeWeight(12);
  stroke("orange");
  house2 = createSprite(700, 0, 200, 200);
  house2.shapeColor = "white";

  strokeWeight(12);
  stroke("orange");
  house3 = createSprite(100, 350, 200, 200);
  house3.shapeColor = "white";

  strokeWeight(12);
  stroke("orange");
  house4 = createSprite(700, 350, 200, 200);
  house4.shapeColor = "White";
  
  house4.depth = player.depth;
  player.depth = player.depth + 4;

  corona = createSprite(400, 200, 40, 40);
  corona.shapeColor = "red";

  // top left 
  p1 = createSprite(150,50,20,20);
  p1.shapeColor = "green";
  // p1_body = Bodies.rectangle(150,50,20,20);

  p2 = createSprite(120,50,20,20);
  p2.shapeColor = "green";

  // bottom left 
  p3 = createSprite(110,350,20,20);
  p3.shapeColor = "green";

  p4 = createSprite(140,350,20,20);
  p4.shapeColor = "green";

  //top right
  p5 = createSprite(700,75,20,20);
  p5.shapeColor = "green";

  p6 = createSprite(740,75,20,20);
  p6.shapeColor = "green";

  // bottom right
  p7 = createSprite(720, 350 ,20,20);
  p7.shapeColor = "green"; 

  p8 = createSprite(750, 350,20,20);
  p8.shapeColor = "green";

  engine = Engine.create();
  world = engine.world;

// speed of player 1
 p1.velocityY = 1;

}



function draw() {
  background(0,0,0);  
  corona.velocityX = -5; 
  corona.velocityY = -2; 
  edges = createEdgeSprites();

  score = score + Math.round(frameRate()/60);
  text(score,700,50);
  console.log(score);


  // allow for player movement 
  if (keyDown(UP_ARROW)){
    player.y = player.y - 2; 
  }
  if (keyDown(DOWN_ARROW)){
    player.y = player.y + 2; 
  }
  if (keyDown(LEFT_ARROW)){
    player.x = player.x - 2; 
  }
  if (keyDown(RIGHT_ARROW)){
    player.x = player.x + 2; 
  }
  
  corona.bounceOff(edges[3]);
  corona.bounceOff(house4);
  corona.bounceOff(edges[2]);
  corona.bounceOff(house3);
  corona.bounceOff(edges[1]);
  corona.bounceOff(house2);
  corona.bounceOff(edges[0]);
  corona.bounceOff(house1);

  p1.bounceOff(edges[3]);
  p1.bounceOff(house4);
  p1.bounceOff(edges[2]);
  p1.bounceOff(house3);
  p1.bounceOff(edges[1]);
  p1.bounceOff(house2);
  p1.bounceOff(edges[0]);

  p2.bounceOff(edges[3]);
  p2.bounceOff(house4);
  p2.bounceOff(edges[2]);
  p2.bounceOff(house3);
  p2.bounceOff(edges[1]);
  p2.bounceOff(house2);
  p2.bounceOff(edges[0]);

  p3.bounceOff(edges[3]);
  p3.bounceOff(house4);
  p3.bounceOff(edges[2]);
  p3.bounceOff(edges[1]);
  p3.bounceOff(house2);
  p3.bounceOff(edges[0]);

  p4.bounceOff(edges[3]);
  p4.bounceOff(house4);
  p4.bounceOff(edges[2]);
  p4.bounceOff(edges[1]);
  p4.bounceOff(house2);
  p4.bounceOff(edges[0]);

  p5.bounceOff(edges[3]);
  p5.bounceOff(house4);
  p5.bounceOff(edges[2]);
  p5.bounceOff(house3);
  p5.bounceOff(edges[1]);
  p5.bounceOff(edges[0]);

  p6.bounceOff(edges[3]);
  p6.bounceOff(house4);
  p6.bounceOff(edges[2]);
  p6.bounceOff(house3);
  p6.bounceOff(edges[1]);
  p6.bounceOff(edges[0]);
  p6.bounceOff(house1);

  p7.bounceOff(edges[3]);
  p7.bounceOff(edges[2]);
  p7.bounceOff(house3);
  p7.bounceOff(edges[1]);
  p7.bounceOff(house2);
  p7.bounceOff(edges[0]);

  p8.bounceOff(edges[3]);
  p8.bounceOff(edges[2]);
  p8.bounceOff(house3);
  p8.bounceOff(edges[1]);
  p8.bounceOff(house2);
  p8.bounceOff(edges[0]);

  // make corona bounce off of p1
  if (corona.isTouching(p1)){
    p1.shapeColor = "red";
    corona.bounceOff(p1);
    corona.velocityX = 2;
    corona.velocityY = 4;

   }

   // to make p2 get corona if p1 has corona 
   if (p1.shapecolor === "red" &&  p1.x === 150 || p1.y === 50 ){
     p1.velocityX = 0;
     p1.velocityY = 0;
     p2.velocityX = 1;

     if (p1.isTouching(p2)){
       p2.shapeColor = "red";
       p1.bounce(p2);
       p1.velocityY = 1;
       corona.x = 400;
       corona.y = 200; 
       corona.velocityX = 1;
       corona.velociyY = 1;
       p3.velocityX = 1.2; 
       p3.velocityY = 1;

     }
   }
  
   if (p3.isTouching(p1)){
     p3.shapeColor = "red";
   }

   if (p2.isTouching(p4)){
     p4.shapeColor = "red";
   }

   if (p3.shapeColor === "red" && p3.isTouching(p4)){
     p4.shapeColor = "red"; 
     
   }

   if (p1.x === 400 && p1.y === 200){
     p1.velocityX = 0;
     p1.velocityY = 0;
   }

   if (p4.shapeColor === "red"){
    p4.velocityX = 5;
    p7.velocityX = -5;
   }

   if (p4.isTouching(p7)){
     p7.shapeColor = "red";
     p8.velocityX = -5;
     p5.velocityX = -2;
     p5.velocityY = 2;
     p6.velocityX = -2;
     p6.velocityY = 2;
   }

   if (p7.isTouching(p8)){
    p8.shapeColor = "red";
  }

  if (p8.isTouching(p5)){
    p5.shapeColor = "red";
  }

  if (p8.isTouching(p6)){
    p6.shapeColor = "red";
  }

  drawSprites();
}


  