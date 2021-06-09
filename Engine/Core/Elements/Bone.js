"use strict";

//Bone constructor
function Bone()
{
	THREE.Bone.call(this);

	this.name = "bone";

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
	this.defaultComponents.push(new ObjectComponent())
}

// Super prototype
Bone.prototype = Object.create(THREE.Bone.prototype);
