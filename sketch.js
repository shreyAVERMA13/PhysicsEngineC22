
const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies


var myengine, myworld

var ground;

var ball;
var ball2;

function setup() {
  createCanvas(400,400);

 myengine = Engine.create();

 myworld = myengine.world;


 var options = {
   isStatic: true
 }
 ground = Bodies.rectangle(200,380,400,20,options)
 World.add(myworld,ground)



 console.log(ground)

 var options={
   restitution:1
 }
 ball=Bodies.circle(200,50,20,options)
 World.add(myworld,ball)

 var options={
   restitution:1.8
 }

 ball2=Bodies.circle(50,150,30,options)
 World.add(myworld,ball2)

 //console.log(object.position.y)

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  Engine.update(myengine)

  rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)

ellipseMode(RADIUS)
ellipse(ball2.position.x,ball2.position.y,30,30)
  drawSprites();
}