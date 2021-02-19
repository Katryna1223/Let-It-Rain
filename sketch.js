const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine, world, drops = [], maxDrops, umbrella, thunder;
var thunder1, thunder2;
function preload(){
   thunder1 = loadImage('images/thunderbolt/1.png');
   thunder2 = loadImage('images/thunderbolt/2.png');
}

function setup(){
   createCanvas(1000, 1100);
   engine = Engine.create();
   world = engine.world;  
   umbrella = new Umbrella(width/2, 700);
   
   maxDrops = 150;
   for(var i = 0; i<maxDrops; i++){
    drops.push(new Drop(random(10, 990), random(-100, 0)));
   }

}

function draw(){
    background(0);
    //the moon
    fill(255);
    ellipse(30, 40, 150, 150);
    
    Engine.update(engine);
    umbrella.display();
    for(var i = 0; i<drops.length; i++){
    
        var currentDrop = drops[i];
        currentDrop.display();
        currentDrop.update(currentDrop.body);
    }
    if(frameCount%70===0){
        showThunder();  
    }
    
  
    drawSprites();
}
function showThunder(){
    var rand = Math.round(random(1,2));
   // if(frameCount%80===0){
        thunder = createSprite(random(50,1070), random(10,70), 10, 10);
        switch(rand){
            case 1: thunder.addImage("t1",thunder1);
            break;
            case 2: thunder.addImage("t2", thunder2);
            break;
            default: break;
        }
        thunder.scale = random(0.6, 1);
        thunder.lifetime = 20;
    
   // }
    }
   

  


