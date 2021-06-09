"use strict"

function AudioAsset(parent) {
	Asset.call(this, parent)

	this.audio = null
    this.setIcon(Interface.file_dir + "Icons/Assets/Audio.png")

	// Self pointer
	var self = this

    // Image
    this.image = document.createElement("img")
    this.image.style.position = "absolute"
    this.image.style.top = "5px"
    this.element.appendChild(this.image)

	// Context menu event
	this.element.oncontextmenu = function(e) {
		var context = new ContextMenu()
		context.size.set(130, 20)
		context.position.set(e.clientX - 5, e.clientY - 5)

		context.addOption("Rename", () => {
			if (self.audio !== null) {
				self.audio.name = prompt("Rename audio", self.audio.name)
				Editor.updateObjectViews()
			}
		})

		context.addOption("Delete", () => {
			if (self.audio !== null && confirm("Delete audio?")) {
                Editor.program.removeAudio(self.audio, Editor.default_audio)
                Editor.updateObjectViews()
			}
		})

		context.addOption("Copy", () => {
			if (self.audio !== null) {
				try {
					Editor.clipboard.set(JSON.stringify(self.audio.toJSON()), "text")
				} catch(e) {}
			}
		})
	}

	// Drag start
	this.element.ondragstart = function(e) {
		// Insert audio into drag buffer
		if (self.audio !== null) {
			e.dataTransfer.setData("uuid", self.audio.uuid)
			DragBuffer.pushDragElement(self.audio)
		}

		// To avoid camera movement
		Mouse.updateKey(Mouse.LEFT, Key.KEY_UP)
	}

	// Drag end
	this.element.ondragend = function(e) {
		// Try to remove audio from drag buffer
		var uuid = e.dataTransfer.getData("uuid")
		var obj = DragBuffer.popDragElement(uuid)
	}
}

AudioAsset.prototype = Object.create(Asset.prototype)

// Set object to file
AudioAsset.prototype.setAudio = function(audio) {
	if (audio instanceof Audio) {
		this.audio = audio
		this.updateMetadata()
	}
}

// Update material preview
AudioAsset.prototype.updateMetadata = function() {
	if (this.audio !== null) {
        // TODO: Audio preview graph
		this.image.src = Interface.file_dir + "Icons/Assets/Audio.png"

		this.setText(this.audio.name)
		this.path = this.audio.path
	}
}

// Update Interface
AudioAsset.prototype.updateInterface = function() {
    Asset.prototype.updateInterface.call(this)

    // Update image
    this.image.width = this.size.x * this.scale.x
    this.image.height = this.size.y * this.scale.y
    this.image.style.left = ((this.size.x - (this.size.x * this.scale.x))/2) + "px"
}
