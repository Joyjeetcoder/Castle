class Ground{
    constructor(w,h){
        var options = {
            isStatic:true
        }
        this.g = Bodies.rectangle(200,390,w,h,options);
        World.add(world,this.g);
        this.w = w;
        this.h = h;
    }
    display(){
        rectMode(CENTER);
        rect(this.g.position.x,this.g.position.y,this.w,this.h);
    }
}