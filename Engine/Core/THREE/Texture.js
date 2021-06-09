"use strict"

// Texture JSON serialiser
THREE.Texture.prototype.toJSON = function(meta) {
	// Check if this texture was already serialised
	if (meta.textures[this.uuid] !== undefined) {
		return meta.textures[this.uuid]
	}

	// Serialise texture data
	var data = {
		metadata: {
			version: PHANTANIZER.VERSION,
			type: "Texture"
		},

		uuid: this.uuid,
		name: this.name,
		category: this.category,

		mapping: this.mapping,

		repeat: [this.repeat.x, this.repeat.y],
		offset: [this.offset.x, this.offset.y],
		wrap: [this.wrapS, this.wrapT],

		minFilter: this.minFilter,
		magFilter: this.magFilter,
		anisotropy: this.anisotropy,

		flipY: this.flipY
	}

	meta.textures[this.uuid] = data
	return data
}
