
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);
    engine = Engine.create();
	world = engine.world;
    
	ground = new Ground(600,60,500,50);
	ball1 = new Ball(640,400,50);
  ball2 = new Ball(680,400,50);
  ball3 = new Ball(720,400,50);
  ball4 = new Ball(760,400,50);
  ball5 = new Ball(800,400,50);
	rope1 = new Rope(ball1.body,ground.body,-40,10)
	rope2 = new Rope(ball2.body,ground.body,-20,10)
  rope3 = new Rope(ball3.body,ground.body,0,10)
  rope4 = new Rope(ball4.body,ground.body,20,10)
  rope5 = new Rope(ball5.body,ground.body,40,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 }
 function keyPressed(){
 if(keyCode === UP_ARROW){
 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-40})
 }  
 }



