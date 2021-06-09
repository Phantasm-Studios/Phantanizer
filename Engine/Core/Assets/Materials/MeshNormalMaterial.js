function MeshNormalMaterial(options) {
	THREE.MeshNormalMaterial.call(this, options)

	this.path = "/"
}

MeshNormalMaterial.prototype = Object.create(THREE.MeshNormalMaterial.prototype)

MeshNormalMaterial.prototype.toJSON = function(meta) {
	var data = THREE.Material.prototype.toJSON.call(this, meta)

	data.nodes = this.nodes
	data.path = this.path

	return data
}