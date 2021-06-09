"use strict"

function FontAsset(parent) {
	Asset.call(this, parent)

	this.font = null
    this.setIcon(Interface.file_dir + "Icons/Assets/Font.png")

	// Self pointer
	var self = this

    // Image
    this.image = document.createElement("img")
    this.image.style.position = "absolute"
    this.image.style.top =  "5px"
    this.element.appendChild(this.image)

	// Context menu event
	this.element.oncontextmenu = function(e) {
		var context = new ContextMenu()
		context.size.set(130, 20)
		context.position.set(e.clientX - 5, e.clientY - 5)

		context.addOption("Rename", () => {
			if (self.font !== null) {
				self.font.name = prompt("Rename font", self.font.name)
				Editor.updateObjectViews()
			}
		})

		context.addOption("Delete", () => {
			if (self.font !== null && confirm("Delete font?")) {
				Editor.program.removeFont(self.font, Editor.default_font)
				Editor.updateObjectViews()
			}
		})

		context.addOption("Reverse glyphs", () => {
			if (self.font !== null && confirm("Reverse font glyps?")) {
				// TODO: This
				alert("Glyph reversing is not implemented yet")
			}
		})

		context.addOption("Copy", () => {
			if (self.font !== null) {
				try {
					Editor.clipboard.set(JSON.stringify(self.font.toJSON()), "text")
				} catch(e) {}
			}
		})
	}

	// Drag start
	this.element.ondragstart = function(e) {
		// Insert into drag buffer
		if (self.font !== null) {
			e.dataTransfer.setData("uuid", self.font.uuid)
			DragBuffer.pushDragElement(self.font)
		}

		// To avoid camera movement
		Mouse.updateKey(Mouse.LEFT, Key.KEY_UP)
	}

	// Drag end
	this.element.ondragend = function(e) {
		// Try to remove font from drag buffer
		var uuid = e.dataTransfer.getData("uuid")
		var obj = DragBuffer.popDragElement(uuid)
	}
}

FontAsset.prototype = Object.create(Asset.prototype)

// Set object to file
FontAsset.prototype.setFont = function(font) {
	if (font instanceof Font) {
		this.font = font
		this.updateMetadata()
	}
}

// Update font preview
FontAsset.prototype.updateMetadata = function() {
	if (this.font !== null) {
        // TODO: Font preview
		this.image.src = Interface.file_dir + "Icons/Assets/Font.png"

		this.setText(this.font.name)
		this.path = this.font.path
	}
}

// Update Interface
FontAsset.prototype.updateInterface = function() {
    Asset.prototype.updateInterface.call(this)

    // Update image
    this.image.width = this.size.x * this.scale.x
    this.image.height = this.size.y * this.scale.y
    this.image.style.left = ((this.size.x - (this.size.x * this.scale.x))/2) + "px"
}
