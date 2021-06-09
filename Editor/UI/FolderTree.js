"use strict"

function FolderTree(parent) {
	// Parent
	if (parent === undefined) {
		this.parent = document.body
	} else {
		this.parent = parent
	}

	// ID
	var id = "fTree" + FolderTree.id
	FolderTree.id++

	// Create Element
	this.element = document.createElement("div")
	this.element.style.position = "absolute"
	this.element.style.overflow = "auto"
	this.element.style.cursor = "default"
	this.element.style.backgroundColor = Editor.theme.panel_color

	// Label
	this.label = new Text(this.element)
	this.label.position.set(5, 10)
	this.label.setText("Folder Tree")
	this.label.setAlignment(Text.LEFT)
	this.label.updateInterface()

	// Element attributes
	this.fit_parent = true
	this.size = new THREE.Vector2(0, 0)
	this.position = new THREE.Vector2(0, 0)
	this.visible = true

	// Children
	this.children = []

	// Add element to document
	this.parent.appendChild(this.element)
}

// FolderTree Counter
FolderTree.id = 0

FolderTree.prototype.update = function() {

	var pos = 20

	var genesis = new FolderElement(this)
	genesis.position.y = pos

	var genesisFolder = new Folder("")
	genesisFolder.setPath("")
	genesis.setFolder(genesisFolder)
	genesis.label.setText("/")
	genesis.setLevel(0)

	this.children.push(genesis)

	pos += 20

	for(var i in Editor.program.folders) {
		if(Editor.program.folders[i].path === "/") {
			var element = new FolderElement(this)
			element.position.y = pos
			element.setFolder(Editor.program.folders[i])
			element.setLevel(1)
			this.children.push(element)

			pos += 20
		}
	}

	this.updateInterface()
}

FolderTree.prototype.clear = function() {
	for(var i = 0; i < this.children.length; i++) {
		this.children[i].destroy()
	}

	this.children = []
	this.updateInterface()
}

FolderTree.prototype.updateInterface = function() {
	// Set visibility
	if (this.visible) {
		this.element.style.visibility = "visible"
	} else {
		this.element.style.visibility = "hidden"
	}

	// Fit to parent
	if (this.fit_parent) {
		this.size.x = this.parent.offsetWidth
		this.size.y = this.parent.offsetHeight
	}

	// Set element style
	this.element.style.top = this.position.y + "px"
	this.element.style.left = this.position.x + "px"
	this.element.style.width = this.size.x + "px"
	this.element.style.height = this.size.y + "px"

	// Update children
	var children = this.children
	for(var i = 0; i < children.length; i++) {
		children[i].updateInterface()
	}
}