const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,350,70,70);   
    box2=new Box(920,350,70,70);
    pig1 =new Pig(810,350,50,50)
    box3=new Box(700,280,70,70)
    box4=new Box(920,280,70,70)
    box5=new Box(810,250,70,70)
    pig2=new Pig(810,300,50,50);
    log1=new Log(810,300,20,300, PI/2)
    log2=new Log(810,250,20,300, PI/2)
    log3=new Log(730,160,20,150, PI/7)
    log4=new Log(870,160,20,150, PI/-4)
    bird1=new Bird(500,160,50,50)
    ground=new Ground(600,height,1200,30); 

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}