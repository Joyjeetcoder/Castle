const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,b1,b2,b3,b4,b5,b6,world;
var engine;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,20);
  b1 = new Box(200,200,200,40);
  b2 = new Box(120,180,40,40);
  b3 = new Box(280,180,40,40);
  b4 = new Box(180,180,40,40);
  b5 = new Box(220,180,40,40);
  b6 = new Box(200,140,40,40);




}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  drawSprites();
}