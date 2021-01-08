class String{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            lenght:10
        }
        this.money= Constraint.create(options)
        World.add(world,this.money)

    }
    display(){
        if(this.money.bodyA){
            var pointA=this.money.bodyA.position;
            strokeWeight(6);
        line(pointA.x,pointA.y,this.money.pointB.x,this.money.pointB.y)
        }
        

    }
    
fly(){
    this.money.bodyA=null;
}
}
