class Hexagon{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body=Bodies.circle(x,y,40,options);
        this.diameter=40;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER);
        fill("red");
        stroke("red");
        circle(pos.x,pos.y,this.diameter);
    }
}