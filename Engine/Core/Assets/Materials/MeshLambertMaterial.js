function MeshLambertMaterial(options) {
	THREE.MeshLambertMaterial.call(this, options)

	this.path = "/"
}

MeshLambertMaterial.prototype = Object.create(THREE.MeshLambertMaterial.prototype);

MeshLambertMaterial.prototype.toJSON = function(meta) {
	var data = THREE.Material.prototype.toJSON.call(this, meta)

	data.nodes = this.nodes
	data.path = this.path

	return data
}