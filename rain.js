class Rain{
    constructor(){
        this.body=Bodies.circle(Math.round(random(0,400)),0,5);
        World.add(world, this.body);
    }
    display(){
        fill("blue");
        circle(this.body.position.x,this.body.position.y,5);
    }
}