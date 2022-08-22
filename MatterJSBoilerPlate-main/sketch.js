const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;
var Pleft,Pright;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   var opitions = {
	   isStatic:false,
	   retituition:0.3,
	   density:1.2,
   };
    ball = Bodies.circle(260,100,20,opitions);
	World.add(world,ball);
    ground = new ground(width/2,670,width,20);
	Pleft = new ground(1100,600,20,120);
    Pright = new ground(1350,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40);
  ground.display();
  Pleft.display();
  Pright.display();
  drawSprites();
 
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	 }
 }


