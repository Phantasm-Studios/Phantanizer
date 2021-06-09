function ThisNode() {
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1-20, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1-20, NodesHelper.slots.position["y"]]})
	this.addOutput("This", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x1-20, NodesHelper.slots.position["y_second"]]})
	this.size = [NodesHelper.sizes.small[0]-20, NodesHelper.sizes.small[1]+20]
}
ThisNode.title = "This"
ThisNode.title_color = NodesHelper.titles.object
ThisNode.collapsable = true
ThisNode.blocks = "Blocks"
ThisNode.prototype.resizable = false
ThisNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
ThisNode.prototype.onStart = function() {
	this.setOutputData(2, this.graph.config.self)

	this.triggerSlot(0, this.graph.config.self)
	this.triggerSlot(1)
}

function GetPositionNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_second"]]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("Position", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]]
}
GetPositionNode.title = "Get Position"
GetPositionNode.title_color = NodesHelper.titles.object
GetPositionNode.collapsable = true
GetPositionNode.blocks = "Blocks"
GetPositionNode.prototype.resizable = false
GetPositionNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
GetPositionNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D)) 
		target = data

	if (target === undefined) 
		target = this.graph.config.self

	var pos = target.position

	this.setOutputData(2, pos)

	this.triggerSlot(0, pos)
	this.triggerSlot(1)
}

function GetRotationNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_second"]]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("Rotation", "euler", {...NodesHelper.slots.euler, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]]
}
GetRotationNode.title = "Get Rotation"
GetRotationNode.title_color = NodesHelper.titles.object
GetRotationNode.collapsable = true
GetRotationNode.blocks = "Blocks"
GetRotationNode.prototype.resizable = false
GetRotationNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
GetRotationNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D))
		target = data

	if (target === undefined)
		target = this.graph.config.self

	var rot = target.rotation

	this.setOutputData(2, rot)

	this.triggerSlot(0, rot)
	this.triggerSlot(1)
}

function GetScaleNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_second"]]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("Scale", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]]
}
GetScaleNode.title = "Get Scale"
GetScaleNode.title_color = NodesHelper.titles.object
GetScaleNode.collapsable = true
GetScaleNode.blocks = "Blocks"
GetScaleNode.prototype.resizable = false
GetScaleNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
GetScaleNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D))
		target = data

	if (target === undefined)
		target = this.graph.config.self

	var scale = target.scale

	this.setOutputData(2, scale)

	this.triggerSlot(0, scale)
	this.triggerSlot(1)
}

function SetPositionNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_second"]]})
	this.addInput("Position", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_third"]]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("New Position", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]+18]
}
SetPositionNode.title = "Set Position"
SetPositionNode.title_color = NodesHelper.titles.object
SetPositionNode.collapsable = true
SetPositionNode.blocks = "Blocks"
SetPositionNode.prototype.resizable = false
SetPositionNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
SetPositionNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)
	var pos = this.getInputData(2)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D))
		target = data

	if (target === undefined)
		target = this.graph.config.self

	if (pos === undefined && (data !== undefined && data instanceof THREE.Vector3))
		pos = data

	if (pos === undefined)
		pos = new THREE.Vector3(0, 0, 0)

	target.position.copy(pos)

	this.setOutputData(2, pos)
	this.triggerSlot(0, pos)
	this.triggerSlot(1)
}

function SetRotationNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_second"]]})
	this.addInput("Rotation", "euler", {...NodesHelper.slots.euler, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_third"]]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("New Rotation", "euler", {...NodesHelper.slots.euler, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})
}
SetRotationNode.title = "Set Rotation"
SetRotationNode.title_color = NodesHelper.titles.object
SetRotationNode.collapsable = true
SetRotationNode.blocks = "Blocks"
SetRotationNode.prototype.resizable = false
SetRotationNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
SetRotationNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)
	var rot = this.getInputData(2)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D))
		target = data

	if (target === undefined)
		target = this.graph.config.self

	if (rot === undefined && (data !== undefined && data instanceof THREE.Euler))
		rot = data

	if (rot === undefined)
		rot = new THREE.Euler(0, 0, 0, "XYZ")

	target.rotation.copy(rot)

	this.setOutputData(2, rot)
	this.triggerSlot(0, rot)
	this.triggerSlot(1)
}

function SetScaleNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_second"]]})
	this.addInput("Scale", "vector", {...NodesHelper.slots.euler, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position["y_third"]]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y]})
	this.addOutput("New Scale", "vector", {...NodesHelper.slots.vector, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position.y_second]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]+18]
}
SetScaleNode.title = "Set Scale"
SetScaleNode.title_color = NodesHelper.titles.object
SetScaleNode.collapsable = true
SetScaleNode.blocks = "Blocks"
SetScaleNode.prototype.resizable = false
SetScaleNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
SetScaleNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)
	var scale = this.getInputData(2)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D))
		target = data

	if (target === undefined)
		target = this.graph.config.self

	if (scale === undefined && (data !== undefined && data instanceof THREE.Vector3))
		scale = data

	if (scale === undefined)
		scale = new THREE.Vector3(1, 1, 1)

	target.scale.copy(scale)

	this.setOutputData(2, scale)
	this.triggerSlot(0, scale)
	this.triggerSlot(1)
}

function registerObjects() {
	LiteGraph.registerNodeType("Objects/This", ThisNode)
	LiteGraph.registerNodeType("Objects/GetPosition", GetPositionNode)
	LiteGraph.registerNodeType("Objects/GetRotation", GetRotationNode)
	LiteGraph.registerNodeType("Objects/GetScale", GetScaleNode)
	LiteGraph.registerNodeType("Objects/SetPosition", SetPositionNode)
	LiteGraph.registerNodeType("Objects/SetRotation", SetRotationNode)
	LiteGraph.registerNodeType("Objects/SetScale", SetScaleNode)
}