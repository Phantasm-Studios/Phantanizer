"use strict"

function ImageLoader(manager) {
	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager
}

ImageLoader.prototype.load = function(url, onLoad, onProgress, onError) {
	var self = this
	var loader = new THREE.XHRLoader(this.manager)
	loader.load(url, function(text)
	{
		self.parse(JSON.parse(text), onLoad)
	}, onProgress, onError)
}

ImageLoader.prototype.parse = function(json, onLoad) {
	var image = new PHANTANIZER.Image()
	
	image.name = json.name
	image.uuid = json.uuid
	image.format = json.forma
	image.encoding = json.encoding
	image.data = json.data
	if (json.path !== undefined) image.path = json.path

	return image
}
