function ColourNode() {
	this.properties = {r: 0, g: 0, b: 0}

	this.addWidget("number", "R", this.properties.r, "r")
	this.addWidget("number", "G", this.properties.g, "g")
	this.addWidget("number", "B", this.properties.b, "b")

	this.addOutput("Colour", "color", {...NodesHelper.slots.color, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]+52]
}
ColourNode.title = "Colour"
ColourNode.title_color = NodesHelper.titles.color
ColourNode.collapsable = false
ColourNode.prototype.resizable = false
ColourNode.prototype.onStart = function() {
	var r = this.properties["r"]
	var g = this.properties["g"]
	var b = this.properties["b"]

	this.setOutputData(0, new THREE.Color(r, g, b))
}
ColourNode.prototype.onPropertyChanged = function() {
	var r = this.properties["r"]
	var g = this.properties["g"]
	var b = this.properties["b"]

	this.setOutputData(0, new THREE.Color(r, g, b))

	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function registerColour() {
	LiteGraph.registerNodeType("Math/Colour/Colour", ColourNode)
}