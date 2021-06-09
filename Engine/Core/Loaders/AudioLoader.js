"use strict"

function AudioLoader(manager) {
	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager
}

AudioLoader.prototype.load = function(url, onLoad, onProgress, onError) {
	var self = this	

	var loader = new THREE.XHRLoader(this.manager)
	loader.load(url, (text) => {
		self.parse(JSON.parse(text), onLoad)
	}, onProgress, onError)
}

AudioLoader.prototype.parse = function(json) {
	var audio = new Audio()

	audio.name = json.name
	audio.uuid = json.uuid
	audio.encoding = json.encoding
	audio.format = "arraybuffer"
	audio.data = ArraybufferUtils.fromBase64(json.data)

	if (json.path !== undefined) audio.path = json.path

	return audio
}
