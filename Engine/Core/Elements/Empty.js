"use strict"

// Empty constructor
function Empty() {
	THREE.Object3D.call(this)

	this.name = "empty"
	this.type = "Group"

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
	this.defaultComponents.push(new ObjectComponent())
}

// Super prototype
Empty.prototype = Object.create(THREE.Object3D.prototype);
