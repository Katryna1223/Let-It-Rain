class Drop{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.drops = []
        World.add(world, this.body);
    }
   /*
    update(body){
        for(var i = 0; i<this.drops.length; i++){
            if(body.position.y>905){
                Matter.Body.setPosition(body, {x: random(10, 990), y: random(-10, 0)});
            }
        }
    }
    */
    display(){
        if(this.body.position.y<0){
            var positions = [this.body.position.x, this.body.position.y]
            this.drops.push(positions);
        }

        for(var i=0; i<this.drops.length; i++){
            /*
            console.log(this.drops);
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            ellipseMode(CENTER);
            fill(173, 216, 230);
            */
           ellipseMode(CENTER);
             ellipse(this.drops[i][0], this.drops[i][1], 10);
         //   pop();
        }
        console.log(this.drops);
        
    }
}