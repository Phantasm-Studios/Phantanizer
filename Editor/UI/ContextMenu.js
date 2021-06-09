"use strict";

function ContextMenu(parent)
{
    // Parent
    this.parent = (parent !== undefined) ? parent : document.body
	
	//ID
	var id = "ctx" + Button.id;
	ContextMenu.id++;

	//Create element
	this.element = document.createElement("div");
	this.element.id = id;
	this.element.style.position = "absolute";
	this.element.style.zIndex = "300";

	//Atributes
	this.size = new THREE.Vector2(130,20);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;

	//Options
	this.options = [];

	//Click event
	var self = this;

	//Mouse over and mouse out events
	this.element.onmouseleave = function()
	{
		self.destroy();
	};

	//Update element
	this.updateInterface();

	//Add element to document
	this.parent.appendChild(this.element);
}

//ContextMenu ID counter
ContextMenu.id = 0;

//Set Text
ContextMenu.prototype.setText = function(text)
{
	this.text.setText(text);
}

//Remove element
ContextMenu.prototype.destroy = function()
{	
	try
	{
		this.parent.removeChild(this.element);
	}
	catch(e){}

	for(var k = 0; k < this.options.length; k++)
	{
		this.options[k].destroy();
	}
}

//Update
ContextMenu.prototype.update = function(){}

//Remove option from dropdown menu
ContextMenu.prototype.removeOption = function(index)
{
	if(index >= 0 && index < this.options.length)
	{
		this.options[index].destroy();
		this.options.splice(index, 1);
	}
}

//Add new Option to dropdown menu
ContextMenu.prototype.addOption = function(name, callback)
{
	var button = new Button(this.element);
	button.element.style.zIndex = "10000";
	button.text.setAlignment(Text.LEFT);
	button.text.position.x = 25;
	button.setText(name);
	button.visible = this.expanded;
	button.updateInterface();

	var self = this;
	button.setCallback(function()
	{
		callback();
		self.updateInterface();
		self.destroy();
	});

	this.options.push(button);
	this.updateInterface();
}

//Update interface
ContextMenu.prototype.updateInterface = function()
{
	//Update Options
	for(var i = 0; i < this.options.length; i++)
	{
		this.options[i].size.set(this.size.x, this.size.y);
		this.options[i].position.set(0, (this.size.y*i));
		this.options[i].visible = this.visible;
		this.options[i].updateInterface();
	}

	//Set visibility
	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}

	//Element position and size
	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = (this.size.y * this.options.length)+ "px";
}
