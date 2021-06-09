"use strict";

function DropdownList(parent)
{
	//Parent
    this.parent = (parent !== undefined) ? parent : document.body

	//ID
	var id = "droplist" + DropdownList.id;
	DropdownList.id++;

	//Create element
	this.element = document.createElement("select");
	this.element.style.position = "absolute";
	this.element.style.backgroundColor = Editor.theme.box_color;
	this.element.style.color = Editor.theme.text_color;
	this.element.style.borderStyle = "none";

	//Element atributes
	this.values = [];
	this.size = new THREE.Vector2(0,0);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;

	//Add element to document
	this.parent.appendChild(this.element);
}

//DropdownList ID counter
DropdownList.id = 0;

//Set if element if disabled
DropdownList.prototype.setDisabled = function(value)
{
	this.element.disabled = value;
}

//Set onchange callback
DropdownList.prototype.setOnChange = function(callback)
{
	this.element.onchange = callback;
}

//Add element
DropdownList.prototype.addValue = function(text, value)
{
	var option = document.createElement("option");
	option.innerHTML = text;
	this.values.push(value);
	this.element.appendChild(option);
}

//Get DropdownList value
DropdownList.prototype.getValue = function()
{
	if(this.element.selectedIndex > -1)
	{
		return this.values[this.element.selectedIndex];
	}
	return null;
}

//Set dropdown list value
DropdownList.prototype.setValue = function(value)
{
	//Get value index
	for(var i = 0; i < this.values.length; i++)
	{
		if(this.values[i] === value)
		{
			this.element.selectedIndex = i;
			break;
		}
	}

	//If value not found set selectedIndex to -1
	if(i === this.values.length)
	{
		this.element.selectedIndex = -1;
	}
}

//Get dropdownlist selected index
DropdownList.prototype.getSelectedIndex = function()
{
	return this.element.selectedIndex;
}

//Set dropdownlist selected index
DropdownList.prototype.setSelectedIndex = function(index)
{
	this.element.selectedIndex = index;
}

//Remove element
DropdownList.prototype.destroy = function()
{
	try
	{
		this.parent.removeChild(this.element);
	}
	catch(e){}
}

//Update
DropdownList.prototype.update = function(){}

//Update Interface
DropdownList.prototype.updateInterface = function()
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
