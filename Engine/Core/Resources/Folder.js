"use strict"

function Folder(name) {
	this.name = (name !== undefined) ? name : "Folder"
	this.uuid = THREE.Math.generateUUID()
	this.type = "Folder"
	this.path = "/"
}

Folder.prototype.setPath = function(path) {
	if (path !== undefined) {
		this.path = path
	}
}

Folder.prototype.toJSON = function(meta) {
	var data = {}

	data.name = this.name
	data.uuid = this.uuid
	data.path = this.path

	return data
}