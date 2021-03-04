class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.4,
            length:10
        }
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }
    release(){
        this.launcher.bodyA=null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA=this.launcher.bodyA.position
            var pointB=this.launcher.pointB
            stroke("white")
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}