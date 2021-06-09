function MeshDepthMaterial(options) {
	THREE.MeshDepthMaterial.call(this, options)

	this.path = "/"
}

MeshDepthMaterial.prototype = Object.create(THREE.MeshDepthMaterial.prototype)

MeshDepthMaterial.prototype.toJSON = function(meta) {
	var data = THREE.Material.prototype.toJSON.call(this, meta)

	data.nodes = this.nodes
	data.path = this.path

	return data
}