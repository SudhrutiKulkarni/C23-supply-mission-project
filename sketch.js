var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var brick1,brick2,brick3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	brick1=createSprite(400,655,200,20,width/2);
	brick1.shapeColor=("red");
	brick1.scale=0.5;
	
	brick2=createSprite(345,635,20,100,width/2);
	brick2.shapeColor=("red");
	brick2.scale=0.5;

	brick3=createSprite(455,635,20,100,width/2);
	brick3.shapeColor=("red");
	brick3.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 brick1=Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	 World.add(world,brick1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false);

    
  }
}



