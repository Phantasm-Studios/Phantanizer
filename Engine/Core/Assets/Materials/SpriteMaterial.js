function SpriteMaterial(options) {
	THREE.SpriteMaterial.call(this, options)

	this.path = "/"
}

SpriteMaterial.prototype = Object.create(THREE.SpriteMaterial.prototype)

SpriteMaterial.prototype.toJSON = function(meta) {
	var data = THREE.Material.prototype.toJSON.call(this, meta)

	data.nodes = this.nodes
	data.path = this.path

	return data
}