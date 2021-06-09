"use strict"

function BlockEditor(parent) {
	// Parent
    this.parent = (parent !== undefined) ? parent : document.body

	// ID
	var id = "block_editor" + BlockEditor.id
	BlockEditor.id++

	// Create element
	this.element = document.createElement("div")
	this.element.id = id
	this.element.style.position = "absolute"
	this.element.style.pointerEvents = "auto"

	this.element.ondrop = function(e) {
		e.preventDefault()
	}

	this.element.ondragover = function(e) {
		e.preventDefault()
	}

	// Top bar
	this.top_bar = new Bar(this.element)
	this.top_bar.size.y = 50

	this.add_var = new ButtonImage(this.element)
	this.add_var.position.set(0, 0)
	this.add_var.size.set(50, this.top_bar.size.y)
	this.add_var.setImage(Interface.file_dir + "Icons/Blocks/NewVar.png")
	this.add_var.setAltText("Variable")
	this.add_var.updateInterface()

	this.add_func = new ButtonImage(this.element)
	this.add_func.position.set(50, 0)
	this.add_func.size.set(50, this.top_bar.size.y)
	this.add_func.setImage(Interface.file_dir + "Icons/Blocks/NewFunc.png")
	this.add_func.setAltText("Function")
	this.add_func.updateInterface()

	this.obj_var = new ButtonImage(this.element)
	this.obj_var.position.set(100, 0)
	this.obj_var.size.set(50, this.top_bar.size.y)
	this.obj_var.setImage(Interface.file_dir + "Icons/Models/Models.png")
	this.obj_var.setAltText("Object to Variable")
	this.obj_var.updateInterface()

	// Canvas
	this.canvas = new Canvas(this.element)
	this.canvas.updateInterface()
	this.canvas.element.style.position = "absolute"

	this.graph = null

	// Element attributes
	this.children = []
	this.fit_parent = false
	this.size = new THREE.Vector2(0, 0)
	this.position = new THREE.Vector2(0, 0)
	this.visible = true

	// Blocks file
	this.blocks = null
	this.nodes = null

	this.parent.appendChild(this.element)
}

BlockEditor.id = 0

// Attach Blocks to the editor
BlockEditor.prototype.attachBlocks = function(blocks) {

	Register.unregisterAll()
	Register.registerBlocksNodes()

	// Store Blocks
	this.blocks = blocks
	this.nodes = this.blocks.nodes

	this.initNodeEditor()
}

// Initialise node editor
BlockEditor.prototype.initNodeEditor = function() {
	this.graph = new LGraph(this.nodes)

	var self = this

	LiteGraph.NODE_TITLE_COLOR = "#FFF"
	LiteGraph.NODE_TITLE_HEIGHT = 20
	LiteGraph.NODE_TITLE_TEXT_Y = 15
	
	this.graphCanvas = new LGraphCanvas(this.canvas.element, this.graph)
	this.graphCanvas.use_gradients = true
	this.graphCanvas.title_text_font = "bold 10px Verdana,Arial,sans serif"
}

// Activate code editor
BlockEditor.prototype.activate = function() {
	Editor.setState(Editor.STATE_IDLE)
	Editor.resetEditingFlags()
}

// Remove element
BlockEditor.prototype.destroy = function() {
	try {
		this.parent.removeChild(this.element)
	} catch(e) {}
}

// On close
BlockEditor.prototype.close = function() {
	this.updateBlocks()
}

// Update container metadata
BlockEditor.prototype.updateMetadata = function(container) {
	if (this.blocks !== null) {
		var blocks = this.blocks

		// Set container name
		container.setName(blocks.name)

		// Check if particle exists in program
		var found = false
		Editor.program.traverse((obj) => {
			if (obj.uuid === blocks.uuid) {
				found = true
			}
		})

		// If not found, close tab
		if (!found) {
			container.close()
		}
	}
}

// Update the attached blocks
BlockEditor.prototype.updateBlocks = function() {
	if (this.blocks !== null) {
		this.blocks.updateNodes(this.graph.serialize())
	}
}

// Update Block Editor
BlockEditor.prototype.update = function() {
	if (this.blocks !== null) {
		this.updateBlocks()
	}
}

// Update interface
BlockEditor.prototype.updateInterface = function() {
	// Fit parent
	if (this.fit_parent) {
		this.size.x = this.parent.offsetWidth
		this.size.y = this.parent.offsetHeight
	}

	// Set visibility
	if (this.visible) {
		this.element.style.visibility = "visible"
	} else {
		this.element.style.visibility = "hidden"
	}

	// Update elements
	this.top_bar.size.x = this.size.x
	this.top_bar.updateInterface()

	// Update canvas
	this.canvas.visible = this.visible
	this.canvas.position.set(0, this.top_bar.size.y)
	this.canvas.size.set(this.size.x, this.size.y-this.top_bar.size.y)
	this.canvas.updateInterface()
}
