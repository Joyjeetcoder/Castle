class Box{
    constructor(x,y,w,h){
        var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
        this.b = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.b);
        this.W = w;
        this.H =h;
    }
    display(){
        var pos =this.b.position;
    var angle = this.b.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.W, this.H);
    pop();
    }

}