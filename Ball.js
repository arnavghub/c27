class Ball {
constructor(x,y,r){
var options = {
    'restitution':1.0,
    'density':0.5,
    'isStatic':false,
    'friction':0
}
this.x=x;
this.y=y;
this.r=r
this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)
World.add(world,this.body)
} 
display(){
//imageMode(CENTER);
var ballpos = this.body.position;
push();
translate(ballpos.x,ballpos.y)
rectMode(CENTER)
fill("purple")
ellipse(0,0,this.r,this.r)
pop();
} 
}