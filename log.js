class Log{
    constructor(x,y,h,angle){
        var options = {
            'restitution': 1.0,
            'friction': 1.0,
            'density': 0.08
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        Matter.Body.setAngle(this.body, angle);
        this.width = 20;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,20,20);

    }
}