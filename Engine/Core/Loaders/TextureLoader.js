"use strict"

function TextureLoader(manager)
{
	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager

	this.images = []
	this.videos = []
	this.fonts = []
}

TextureLoader.prototype.load = function(url, onLoad, onProgress, onError)
{
	var self = this
	var loader = new THREE.XHRLoader(this.manager)
	loader.load(url, (text) => {
		self.parse(JSON.parse(text), onLoad)
	}, onProgress, onError)
}

TextureLoader.prototype.parse = function(json, onLoad) {
	var texture = null
	var category = json.category

	// Video texture
	if (category === "Video") {
		if (json.video === undefined) {
			console.warn("TextureLoader: No video specified for", json.uuid)
		}
		if (this.videos[json.video] === undefined) {
			console.warn("TextureLoader: Undefined video", json.video)
		}

		texture = new VideoTexture(this.videos[json.video])
	}
	// Webcam texture
	else if (category === "Webcam") {
		texture = new WebcamTexture()
	}
	// Texture
	else {
		if (json.image === undefined) {
			console.warn("TextureLoader: No image specified for", json.uuid)
		}

		if (this.images[json.image] === undefined) {
			console.warn("TextureLoader: Undefined image", json.image)
		}

		texture = new Texture(this.images[json.image])
	}

	texture.uuid = json.uuid
	texture.name = json.name
	texture.mapping = json.mapping

	texture.offset = new THREE.Vector2(json.offset[0], json.offset[1])
	texture.repeat = new THREE.Vector2(json.repeat[0], json.repeat[1])
	texture.wrapS = json.wrap[0]
	texture.wrapT = json.wrap[1]

	texture.minFilter = json.minFilter
	texture.magFilter = json.magFilter

	texture.anisotropy = json.anisotropy
	texture.flipY = json.flipY

	if (json.path !== undefined) texture.path = json.path

	if (onLoad !== undefined) {
		onLoad(texture)
	}

	return texture
}

TextureLoader.prototype.setImages = function(images) {
	this.images = images
	return this
}

TextureLoader.prototype.setVideos = function(videos) {
	this.videos = videos
	return this
}

TextureLoader.prototype.setFonts = function(fonts) {
	this.fonts = fonts
	return this
}