"use strict"

// Create Vector3 from JSON data
THREE.Vector3.fromJSON = function(data)
{
	return new THREE.Vector3(data.x, data.y, data.z)
}

// Serialise to JSON
THREE.Vector3.prototype.toJSON = function() {
	return {
		x: this.x,
		y: this.y,
		z: this.z
	}
}