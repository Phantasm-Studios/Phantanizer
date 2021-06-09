"use strict";

// Mesh constructor
function Mesh(geometry, material)
{
	THREE.Mesh.call(this, geometry, material);

	this.name = "model";

	this.receiveShadow = true;
	this.castShadow = true;

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
	this.defaultComponents.push(new ObjectComponent())
}

// Super prototype
Mesh.prototype = Object.create(THREE.Mesh.prototype);

// Dispose model
Mesh.prototype.dispose = function()
{
	//Dipose material and geometry
	if(this.material.dispose !== undefined)
	{
		this.material.dispose();
	}
	this.geometry.dispose();

	//Dipose children
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].dispose();
	}
}