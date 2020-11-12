class Paper{
  constructor(x,y){
  var options = {
      isStatic : false,
      'restitution' : 0.6,
      'density' : 1.5,
      'fricition' : 0.0
  }
  this.body = Bodies.rectangle(x,y,70,70,options);
  this.width = 70;
  this.height = 70;
  this.image = loadImage("paper.png");

  World.add(world,this.body);
}
display(){
  var pos = this.body.position;
  push();
  translate(pos.x,pos.y);
  imageMode(CENTER);
  //stroke("red");
  //fill("white");
  image(this.image,0,0,70,70);
  pop();
}
}