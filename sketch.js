const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var binwall;
var G;
var wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	binwall = new bin(638,290,0,0);

	wall1 = new ExBin(545,300,5,220);
	wall2 = new ExBin(731,300,5,220);

	paper = new Paper(100,370);

	G = new Ground(400,400);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
   
  background("lightblue");
  G.display();
  wall1.display();
  wall2.display();

  paper.display();



  binwall.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x:185,y:-285});
	}
}