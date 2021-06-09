function VectorNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("X", "number", {...NodesHelper.slots.number, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})
	this.addInput("Y", "number", {...NodesHelper.slots.number, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_third]})
	this.addInput("Z", "number", {...NodesHelper.slots.number, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_fourth]})

	this.properties = {x: 0, y: 0, z: 0}

	this.addWidget("number", "X", this.properties.x, "x")
	this.addWidget("number", "Y", this.properties.y, "y")
	this.addWidget("number", "Z", this.properties.z, "z")

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("Vector", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]+106]
}
VectorNode.title = "Vector"
VectorNode.title_color = NodesHelper.titles.vector
VectorNode.collapsable = true
VectorNode.prototype.resizable = false
VectorNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
VectorNode.prototype.onAction = function() {
	this.createVector()
}
VectorNode.prototype.onStart = function() {
	if (!this.isInputConnected(0)) {
		this.createVector()
	}
}
VectorNode.prototype.createVector = function() {
	var x = this.getInputData(1)
	var y = this.getInputData(2)
	var z = this.getInputData(3)

	if (x === undefined)
		x = this.properties.x

	if (y === undefined)
		y = this.properties.y

	if (z === undefined)
		z = this.properties.z

	var vec = new THREE.Vector3(x, y, z)

	this.setOutputData(2, vec)

	this.triggerSlot(0, vec)
	this.triggerSlot(1)
}

function VectorThreeToTwoNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Vector", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("Vector", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]]
}
VectorThreeToTwoNode.title = "Vector3 To Vector2"
VectorThreeToTwoNode.title_color = NodesHelper.titles.vector
VectorThreeToTwoNode.collapsable = true
VectorThreeToTwoNode.prototype.resizable = false
VectorThreeToTwoNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
VectorThreeToTwoNode.prototype.onAction = function(action, data) {
	var v = this.getInputData(1)

	if (v === undefined && (data !== undefined && data instanceof THREE.Vector3))
		v = data

	var v2 = new THREE.Vector2(v.x, v.y)
	this.setOutputData(2, v2)

	this.triggerSlot(0, v2)
	this.triggerSlot(1)
}

function VectorAddNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Vector 1", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})
	this.addInput("Vector 2", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_third]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("Out", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]+18]
}
VectorAddNode.title = "Add"
VectorAddNode.title_color = NodesHelper.titles.vector
VectorAddNode.collapsable = true
VectorAddNode.prototype.resizable = false
VectorAddNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
VectorAddNode.prototype.onAction = function(action, data) {
	var v1 = this.getInputData(1)
	var v2 = this.getInputData(2)

	// NOTE: This node doesn't support passers
	if (v1 === undefined || v2 === undefined) {
		console.log("An undefined parameter: ", v1, v2)
		return
	}

	var v = v1.add(v2)

	this.setOutputData(2, v)
	this.triggerSlot(0, v)
	this.triggerSlot(1)
}

function registerVectorNode() {
	LiteGraph.registerNodeType("Math/Vector/Vector", VectorNode)
	LiteGraph.registerNodeType("Math/Vector/VectorThreeToTwo", VectorThreeToTwoNode)
	LiteGraph.registerNodeType("Math/Vector/VectorAdd", VectorAddNode)
}