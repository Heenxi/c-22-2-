const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  var canvas =createCanvas(400,400);

  engine=Engine.create();
world=engine.world;

ground=Bodies.rectangle(200,100,50,50);
World.add(world,ground);

ball=Bodies.circle(200,100,20)
World.add(world,ball);


console.log(object);
console.log(object.position.x)
}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ball.positon.x,ball.position.y,20,20);
}