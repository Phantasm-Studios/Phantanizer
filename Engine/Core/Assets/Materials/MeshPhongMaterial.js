function MeshPhongMaterial(options) {
	THREE.MeshPhongMaterial.call(this, options)

	this.path = "/"
}

MeshPhongMaterial.prototype = Object.create(THREE.MeshPhongMaterial.prototype)

MeshPhongMaterial.prototype.toJSON = function(meta) {
	var data = THREE.Material.prototype.toJSON.call(this, meta)

	data.nodes = this.nodes
	data.path = this.path

	return data
}