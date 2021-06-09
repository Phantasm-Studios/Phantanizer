"use strict"

THREE.Material.prototype.nodes = {}

THREE.Material.prototype.updateNodes = function(nodes) {
	if (this.nodes !== undefined) {
		this.nodes = {}
		this.nodes = nodes
	}
}

THREE.Material.prototype.setPath = function(path) {
	if (path !== undefined) {
		this.path = path
	}
}