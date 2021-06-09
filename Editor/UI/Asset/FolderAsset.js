"use strict"

function FolderAsset(parent, type) {
	Asset.call(this, parent)

	// Self pointer
	var self = this

	this.folder = null
    this.setIcon(Interface.file_dir + "Icons/Misc/Folder.png")

    // Folder icon
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
			if (self.folder !== null) {
				var newName = prompt("Rename folder", self.folder.name)

				if(newName !== null) {
					for(var i = 0; i < Interface.asset_explorer.files.length; i++) {
						var file = Interface.asset_explorer.files[i]
	
						if (file.path === self.folder.path + self.folder.name + "/") {
							var newPath = self.folder.path + newName + "/"
	
							if (file.material !== undefined) {
								file.material.setPath(newPath)
							} else if (file.audio !== undefined) {
								file.audio.setPath(newPath)
							} else if (file.blocks !== undefined) {
								file.blocks.setPath(newPath)
							} else if (file.font !== undefined) {
								file.font.setPath(newPath)
							} else if (file.texture !== undefined) {
								file.texture.setPath(newPath)
							}
						}
					}
	
					self.folder.name = newName
				}

				Editor.updateObjectViews()
			}
		})

		context.addOption("Delete", () => {
			if (self.folder !== null && confirm("Delete folder?")) {
				Editor.program.removeFolder(self.folder)
				Editor.updateObjectViews()
			}
		})
	}

	// TODO: Drag folders into another folder

	// On drop any element
	this.element.ondrop = function(e) {
		e.preventDefault()

		if (self.folder !== null) {
			// Get object from data buffer
			var uuid = event.dataTransfer.getData("uuid")
			var dragged_object = DragBuffer.popDragElement(uuid)

			if (dragged_object !== null) {
				dragged_object.path = self.folder.path + self.folder.name + "/"
				Editor.updateObjectViews()
			}
		}
	}

	// Open folder
	this.element.ondblclick = function() {
		Editor.CURRENT_PATH = self.folder.path + self.folder.name + "/"
		Interface.asset_explorer.updateInterface()
	}
}

FolderAsset.prototype = Object.create(Asset.prototype)

// Set a folder to file
FolderAsset.prototype.setFolder = function(folder) {
	if (folder instanceof Folder) {
		this.folder = folder
		this.updateMetadata()
	}
}

// Update Folder data
FolderAsset.prototype.updateMetadata = function() {
	if (this.folder !== null) {
		this.image.src = Interface.file_dir + "Icons/Misc/Folder.png"
		this.setText(this.folder.name)
		this.path = this.folder.path
	}
}

// Update interface
FolderAsset.prototype.updateInterface = function() {
    Asset.prototype.updateInterface.call(this)

    // Update image
    this.image.width = this.size.x * this.scale.x
    this.image.height = this.size.y * this.scale.y
    this.image.style.left = ((this.size.x - (this.size.x * this.scale.x))/2) + "px"
}
