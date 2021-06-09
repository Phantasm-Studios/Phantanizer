"use strict";

function Canvas(parent)
{
	//Parent
    this.parent = (parent !== undefined) ? parent : document.body
	
	//ID
	var id = "canvas" + Canvas.id;
	Canvas.id++;

	//Create canvas
	this.element = document.createElement("canvas");
	this.element.id = id;
	this.element.style.position = "absolute";

	this.element.ondrop = function(event)
	{
		event.preventDefault();
	};

	this.element.ondragover = function(event)
	{
		event.preventDefault();
	};

	//Element atributes
	this.fit_parent = false;
	this.size = new THREE.Vector2(0,0);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;
	
	//Add element to document
	this.parent.appendChild(this.element);
}

//Canvas counter
Canvas.id = 0;

//Remove element
Canvas.prototype.destroy = function()
{
	try
	{
		this.parent.removeChild(this.element);
	}
	catch(e){}
}

//Update
Canvas.prototype.update = function(){}

//Update division Size
Canvas.prototype.updateInterface = function()
{
	//Fit parent
	if(this.fit_parent)
	{
		this.size.x = this.parent.offsetWidth;
		this.size.y = this.parent.offsetHeight; 
	}

	//Set visiblity
	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}

	//Update canvas
	this.element.width = this.size.x;
	this.element.height = this.size.y;
	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
}
