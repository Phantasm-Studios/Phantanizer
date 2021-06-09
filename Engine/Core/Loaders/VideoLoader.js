"use strict"

function VideoLoader(manager) {
	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager
}

VideoLoader.prototype.load = function(url, onLoad, onProgress, onError) {
	var self = this
	var loader = new THREE.XHRLoader(this.manager)
	loader.load(url, (text) => {
		self.parse(JSON.parse(text), onLoad)
	}, onProgress, onError)
}

VideoLoader.prototype.parse = function(json, onLoad) {
	var video = new Video()

	video.name = json.name
	video.uuid = json.uuid
	video.format = json.uuid
	video.encoding = json.encoding
	video.data = json.data
	if (json.path !== undefined) video.path = json.path

	return video
}