"use strict";

function Text(parent)
{
	//Parent
    this.parent = (parent !== undefined) ? parent : document.body

	//ID
	var id = "txt" + Text.id;
	Text.id++;

	//Create element
	this.element = document.createElement("div");
	this.element.style.position = "absolute";
	this.element.style.display = "flex";
	this.element.style.justifyContent = "center";
	this.element.style.alignItems = "center";
	this.element.style.pointerEvents = "none";
	this.element.style.color = Editor.theme.text_color;
	
	//Span element
	this.span = document.createElement("span");
	this.span.style.whiteSpace = "nowrap";
	this.span.innerHTML = "text";
	this.element.appendChild(this.span);

	//Element atributes
	this.fit_content = false;
	this.fit_parent = false;
	this.size = new THREE.Vector2(0, 0);
	this.position = new THREE.Vector2(0, 0);
	this.visible = true;

	//Add element to document
	this.parent.appendChild(this.element);
}

//Text conter
Text.id = 0;

//Text alignment
Text.CENTER = 0;
Text.LEFT = 1;

//Set Text
Text.prototype.setText = function(text)
{
	this.span.innerHTML = text;
}

//Set Text Size
Text.prototype.setTextSize = function(size)
{
	this.element.style.fontSize = size + "px";
}

//Set Text Color
Text.prototype.setTextColor = function(color)
{
	this.element.style.color = color;
}

//Set text alignment
Text.prototype.setAlignment = function(align)
{
	if(align === Text.CENTER)
	{
		this.element.style.justifyContent = "center";
	}
	else if(align === Text.LEFT)
	{
		this.element.style.justifyContent = "";
	}
}

//Remove element
Text.prototype.destroy = function()
{
	try
	{
		this.parent.removeChild(this.element);
	}
	catch(e){}
}

//Set text visibility
Text.prototype.setVisibility = function(value)
{
	this.visible = value;

	if(this.visible)
	{
		this.element.style.visibility = "visible";
		this.span.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
		this.span.style.visibility = "hidden";
	}
}

//Update
Text.prototype.update = function(){}

//Update Interface
Text.prototype.updateInterface = function()
{
	//Fit parent
	if(this.fit_parent)
	{
		this.size.x = this.parent.offsetWidth;
		this.size.y = this.parent.offsetHeight; 
	}

	//Fit size to text
	if(this.fit_content)
	{
		this.size.x = this.span.clientWidth;
	}

	//Set visibility
	if(this.visible)
	{
		this.element.style.visibility = "visible";
		this.span.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
		this.span.style.visibility = "hidden";
	}

	//Update base element
	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
}
