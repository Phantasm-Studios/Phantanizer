"use strict"

function FolderElement(container) {

	// Component
	if (container === undefined) {
		this.container = null
	} else {
		this.container = container
	}

	this.parent = this.container.element

	// ID
	var id = "folderEl" + FolderElement.id
	FolderElement.id++

	// Create element
	this.element = document.createElement("div")
	this.element.draggable = true
	this.element.style.position = "absolute"
	this.element.style.width = container.size.x + "px"
	this.element.style.height = "20px"
	this.element.style.cursor = "default"
	this.element.style.display = "flex"
	this.element.style.alignItems = "center"
	this.element.style.backgroundColor = Editor.theme.button_light_color

	this.element.ondragover = function(e) {
		e.preventDefault()
	}

	this.element.ondragleave = function(e) {
		e.preventDefault()
	}

	// Icon
	this.icon = new ImageBox(this.element)
	this.icon.size.set(15, 15)
	this.icon.position.set(5, 3)
	this.icon.setImage("Editor/Files/Icons/Misc/Folder.png")
	this.icon.updateInterface()

	// Text
	this.label = new Text(this.element)
	this.label.position.set(30, 10)
	this.label.fit_content = true
	this.label.setAlignment(Text.LEFT)
	this.label.updateInterface()

	// Content
	this.folder = null

	// Element attributes
	this.size = new THREE.Vector2(container.size.x, 20)
	this.position = new THREE.Vector2(0, 0)
	this.visible = true
	this.level = 0

	// Mouse events
	var self = this

	// Mouse over event
	this.element.onmouseenter = function(e) {
		this.style.cursor = "pointer"
		this.style.backgroundColor = Editor.theme.button_over_color
	}

	// Mouse leave event
	this.element.onmouseleave = function(e) {
		if (Editor.CURRENT_PATH !== self.folder.path + self.folder.name + "/") {
			this.style.cursor = "default"
			this.style.backgroundColor = Editor.theme.button_light_color
		}
	}

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

	// Go to folder
	this.element.onclick = function() {
		Editor.CURRENT_PATH = self.folder.path + self.folder.name + "/"
		Editor.updateObjectViews()
	}

	this.parent.appendChild(this.element)
}

FolderElement.id = 0

FolderElement.prototype.setFolder = function(folder) {
	this.folder = folder

	this.label.setText(folder.name)
}

FolderElement.prototype.setLevel = function(level) {
	if (level !== undefined) {
		this.level = level
	}
}

FolderElement.prototype.destroy = function() {
	try {
		this.parent.removeChild(this.element)
	} catch(e) {}
}

FolderElement.prototype.updateInterface = function() {
	// Visibility
	if (this.visible) {
		this.element.style.visibility = "visible"
	} else {
		this.element.style.visibility = "hidden"
	}

	// Update size
	if (this.container !== null) {
		this.size.x = this.container.size.x
	}

	var level = this.level

	//if (this.folder.path !== "/") {
	//	level = this.folder.path.split("/").length-1
	//}

	this.position.x = level * 20

	this.element.style.top = this.position.y + "px"
	this.element.style.left = this.position.x + "px"
	this.element.style.width = this.size.x
}