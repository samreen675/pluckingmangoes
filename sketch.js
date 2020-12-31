
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
	boy = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    ground = new Ground(600,height,1200,20);
    tree = new Tree(800,680,10,10);
    mango1 = new Mango(800,100,10);
    stone1 = new stone(100,600,10);
    sling = new Slingshot(stone1.body, {x: 100,y:500})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  image(boy, 100,450,200,300)
ground.display()
tree.display()
mango1.display()
stone1.display()
sling.display()
  drawSprites();
 
}



