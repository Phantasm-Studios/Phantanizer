"use strict"

function TextSprite(text, font) {
	THREE.Sprite.call(this, new SpriteMaterial({color: 0xffffff}))

	this.name = "sprite"
	this.type = "TextSprite"

	this.font = font
	this.text = text
}

TextSprite.prototype = Object.create(THREE.Sprite.prototype)

// Set font
TextSprite.prototype.setFont = function(font) {
	this.font = font
	this.setText()
}

// Set Text
TextSprite.prototype.setText = function(text) {
	if (text !== undefined) {
		this.text = text
	}

	// TODO: This
}

// Dispose Text Sprite
TextSprite.prototype.dispose = function() {
	if (this.material.dispose !== undefined) {
		this.material.dispose()
	}

	for(var i = 0; i < this.children.length; i++) {
		this.children[i].dispose()
	}
}

// Create JSON for object
TextSprite.prototype.toJSON = function(meta) {
	var material = this.material
	this.material = undefined

	var font = this.font
	var data = THREE.Sprite.prototype.toJSON.call(this, meta, (meta, object) => {
		font = font.toJSON(meta)
	})

	data.object.text = this.text
	data.object.font = this.uuid

	this.material = material

	return data
}