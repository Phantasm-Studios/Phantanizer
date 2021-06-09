"use strict";

function Sprite(material)
{
	THREE.Sprite.call(this, material);

	this.name = "sprite";
	this.type = "Sprite";

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
	this.defaultComponents.push(new ObjectComponent())
}

Sprite.prototype = Object.create(THREE.Sprite.prototype);

Sprite.prototype.dispose = function()
{
	if(this.material.dispose !== undefined)
	{
		this.material.dispose();
	}

	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].dispose();
	}
}
