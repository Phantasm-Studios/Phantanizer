"use strict";

//Text texture constructor
function TextTexture(text, font, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding)
{
	THREE.Texture.call(this, document.createElement("canvas"), mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding)

	this.image.width = 2048
	this.image.height = 2048

	this.context = this.image.getContext("2d")
	this.context.font = "Normal 500px Arial"
	this.context.textAlign = "center"
	this.context.fillStyle = "#FFFFFF"
	this.context.fillText("text", this.image.width/2, this.image.height/2)

	this.name = "text"
	this.category = "Text"
	this.path = "/"

	this.text = "text"
	this.font = font

	this.needsUpdate = true
}

// Super prototypes
TextTexture.prototype = Object.create(THREE.Texture.prototype)

// Set path
TextTexture.prototype.setPath = function(path) {
	if (path !== undefined) {
		this.path = path
	}
}

TextTexture.prototype.toJSON = function(meta) {
	var data = THREE.Texture.prototype.toJSON.call(this, meta)

	data.path = this.path

	return data
}