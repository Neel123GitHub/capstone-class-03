
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//level-1
	block1=new Block(625,250,45,65);
	block2=new Block(625,320,45,65);
	block3=new Block(575,320,45,65);
	block4=new Block(675,320,45,65);
	block5=new Block(625,390,45,65);
	block6=new Block(575,390,45,65);
	block7=new Block(675,390,45,65);
	block8=new Block(525,390,45,65);
	block9=new Block(725,390,45,65);
	block10=new Block(625,460,45,65);
	block11=new Block(575,460,45,65);
	block12=new Block(675,460,45,65);
	block13=new Block(525,460,45,65);
	block14=new Block(725,460,45,65);
	block15=new Block(475,460,45,65);
	block16=new Block(775,460,45,65);
	platform1=new Platform(625,470,370,10);

	//level-2
	block17=new Block(900,100,45,65);
	block18=new Block(900,170,45,65);
	block19=new Block(850,170,45,65);
	block20=new Block(950,170,45,65);
	block21=new Block(900,240,45,65);
	block22=new Block(850,240,45,65);
	block23=new Block(950,240,45,65);
	block24=new Block(800,240,45,65);
	block25=new Block(1000,240,45,65);
	platform2=new Platform(900,290,270,10);

	//hexagon
	hexagon=new Hexagon(150,300);

	//ground
	ground=new Platform(625,700,1250,20);

	//making the launcher
	launcher=new Launcher(hexagon.body,{x:150,y:300});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  drawSprites();

  stroke("black")
  textSize(25)
  fill("black")
  text("Drag mouse to destroy the blocks!!!",200,100);

fill("black")
block1.display();
fill("white");
block2.display();
block3.display();
block4.display();
fill("black");
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
fill("white");
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
fill("black");
block17.display();
fill("white");
block18.display();
block19.display();
block20.display();
fill("black");
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
hexagon.display();
launcher.display();
fill("black");
stroke("black");
platform1.display();
fill("white");
stroke("white");
platform2.display();
fill("black");
stroke("black");
ground.display();
}

function mouseDragged(){
	Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher.release();
}