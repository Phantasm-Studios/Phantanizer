"use strict";

function AmbientLight(hex)
{
	THREE.AmbientLight.call(this, hex);
	
	this.name = "ambient_light";

	this.matrixAutoUpdate = false;

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
	this.defaultComponents.push(new ObjectComponent())
	this.defaultComponents.push(new LightComponent())
}

//Function Prototype
AmbientLight.prototype = Object.create(THREE.AmbientLight.prototype);