class Drop{
    constructor(x,y){
        var options ={
            restitution: 0.5,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,5,options)
        this.radius = 3
        World.add(world, this.body);
    }

    update(dropCurrent){
     //  for(var i = 0; i<array.length;i++){
     //       var dropCurrent = array[i].body;
           if(dropCurrent.position.y > height){
                Matter.Body.setPosition(dropCurrent, {x: random(0,990), y: random(-10, 0)});
            }
       // }
    }

    display(){
       // for(var i = 0; i<array.length; i++){
         //   var currentDrop=array[i].body;
            stroke("lightblue");
            fill("lightblue");
            ellipseMode(RADIUS);
            ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
      //  }
    }

    
}