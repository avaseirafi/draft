class dustbin
{
	constructor(x,y,width,height,angle)
	{
		this.body=Bodies.rectangle(x,y,width,height);
		this.width=width;
		this.height=height;
		this.angle=0;
		this.image=loadImage("sprites/dustbingreen.png");
		World.add(world,this.body);
	}
	dislay()
	{
		var angle=this.body.angle;
		push()
		translate(this.body.position.x,this.body.position.y);
		imageMode(CENTER)
		image(this.image,0,0,this.dustbinWidth, this.wallThickness);
		pop()
			
	}

}