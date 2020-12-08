class Shot{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.shot=Constraint.create(options)
		World.add(world,this.shot)
	}

	attach(body){
		this.Shot.bodyA=body;
	}

	fly()
	{
		this.shot.bodyA=null;
	}

	display()
	{
		if(this.shot.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}