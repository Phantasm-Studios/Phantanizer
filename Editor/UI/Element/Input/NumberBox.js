"use strict";

function NumberBox(parent)
{
	//Parent
    this.parent = (parent !== undefined) ? parent : document.body

	//ID
	var id = "number_box" + NumberBox.id;
	NumberBox.id++;

	//Create element
	this.element = document.createElement("input");
	this.element.type = "number";
	this.element.step = "0.1";
	this.element.style.position = "absolute";
	this.element.style.backgroundColor = Editor.theme.box_color;
	this.element.style.color = Editor.theme.text_color;
	this.element.style.borderStyle = "none";

	//Element atributes
	this.size = new THREE.Vector2(0,0);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;
	
	//Add element to document
	this.parent.appendChild(this.element);
}

//NumberBox ID counter
NumberBox.id = 0;

//Set if element if disabled
NumberBox.prototype.setDisabled = function(value)
{
	this.element.disabled = value;
}

//Set numberbox range
NumberBox.prototype.setRange = function(min, max)
{
	this.element.min = String(min);
	this.element.max = String(max);
}

//Set step
NumberBox.prototype.setStep = function(value)
{
	this.element.step = String(value);
}

//Set onchange callback
NumberBox.prototype.setOnChange = function(callback)
{
	this.element.onchange = callback;
}

//Set value
NumberBox.prototype.setValue = function(value)
{
	this.element.value = value;
}

//Get text
NumberBox.prototype.getValue = function()
{
	return parseFloat(this.element.value);
}

//Remove element
NumberBox.prototype.destroy = function()
{
	try
	{
		this.parent.removeChild(this.element);
	}
	catch(e){}
}

//Update
NumberBox.prototype.update = function(){}

//Update Interface
NumberBox.prototype.updateInterface = function()
{
	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}

	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
}
