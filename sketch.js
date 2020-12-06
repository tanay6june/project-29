const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box11,box12,box13,box14,box15,box16;
var shot;
var ground;
var polygon,polygonImage;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);


    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
     box6 = new Box(700,320,70,70);
    box7 = new Box(920,320,70,70);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,240,70,70);
    box10 = new Box(390,160,70,70);
     box11 = new Box(420,320,70,70);
    box12 = new Box(450,320,70,70);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,240,70,70);
    box15 = new Box(420,160,70,70);
    box16 = new Box(390,155,30,40);

    polygon = new Polygon(200,50)

     shot = new Shot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  
   ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
   
   slingshot.display();    
}

function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

