
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var bin1, bin2, bin3


function preload(){
    
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
  paper = new Paper();

    bin1 = new Dustbin();
    bin2 = new Dustbin();
    bin3 = new Dustbin();

    
}

function draw(){
    background(0);
    Engine.update(engine);


    
    ground.display();
    paper.display();
    bin1.display();
    bin2.display();
    bin3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}