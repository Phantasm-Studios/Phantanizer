// Get All Child
function GetAllChildrenNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position["y"]]})
	this.addOutput("Children", "array", {...NodesHelper.slots.array, pos: [NodesHelper.slots.output.position["pos"][0]+60, NodesHelper.slots.position["y_second"]]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]]
}
GetAllChildrenNode.title = "Get All Children"
GetAllChildrenNode.title_color = NodesHelper.titles.hierarchy
GetAllChildrenNode.collapsable = false
GetAllChildrenNode.blocks = "Blocks"
GetAllChildrenNode.prototype.resizable = false
GetAllChildrenNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
GetAllChildrenNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D)) 
		target = data

	if (target === undefined)
		target = this.graph.config.self

	var children = target.children

	this.setOutputData(2, children)

	this.triggerSlot(0, children)
	this.triggerSlot(1)
}

// Get Children Through Name
function GetChildByNameNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})
	this.addInput("Name", "string", {...NodesHelper.slots.string, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_third]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1+60, NodesHelper.slots.position["y"]]})
	this.addOutput("Child", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.output.position["pos"][0]+60, NodesHelper.slots.position["y_second"]]})

	this.addProperty("name", "")
	this.name_widget = this.addWidget("text", "", "", "name")
	this.name_widget.width = 120

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1] + 40]
}
GetChildByNameNode.title = "Get Child By Name"
GetChildByNameNode.title_color = NodesHelper.titles.hierarchy
GetChildByNameNode.collapsable = false
GetChildByNameNode.blocks = "Blocks"
GetChildByNameNode.prototype.resizable = false
GetChildByNameNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
GetChildByNameNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)
	var name = this.getInputData(2)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D)) 
		target = data

	if (name === undefined && (data !== undefined && data instanceof String)) 
		name = data

	if (target === undefined) 
		target = this.graph.config.self

	if (name === undefined) 
		name = this.properties.name

	var child = target.getObjectByName(name)

	this.setOutputData(2, child)

	this.triggerSlot(0, child)
	this.triggerSlot(1)
}

// Get Parent
function GetParentNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1 + 60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1 + 60, NodesHelper.slots.position["y"]]})
	this.addOutput("Parent", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x1 + 60, NodesHelper.slots.position["y_second"]]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]]
}
GetParentNode.title = "Get Parent"
GetParentNode.title_color = NodesHelper.titles.hierarchy
GetParentNode.collapsable = false
GetParentNode.blocks = "Blocks"
GetParentNode.resizable = false
GetParentNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
GetParentNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D)) 
		target = data

	if (target === undefined) 
		target = this.graph.config.self

	var parent = target.parent

	this.setOutputData(2, parent)

	this.triggerSlot(0, parent)
	this.triggerSlot(1)
}

// Is child
function IsChildNode() {
	this.addInput("", LiteGraph.ACTION, NodesHelper.slots.input.event)
	this.addInput("Target", "object", {...NodesHelper.slots.object, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer, pos: [NodesHelper.slots.position.x1 + 60, NodesHelper.slots.output.title_pos["pos"][1]]})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event, pos: [NodesHelper.slots.position.x1 + 60, NodesHelper.slots.position["y"]]})
	this.addOutput("Is Child?", "bool", {...NodesHelper.slots.bool, pos: [NodesHelper.slots.position.x1 + 60, NodesHelper.slots.position["y_second"]]})

	this.size = [NodesHelper.sizes.medium[0], NodesHelper.sizes.medium[1]]
}
IsChildNode.title = "Is Child"
IsChildNode.title_color = NodesHelper.titles.hierarchy
IsChildNode.collapsable = false
IsChildNode.blocks = "Blocks"
IsChildNode.resizable = false
IsChildNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
IsChildNode.prototype.onAction = function(action, data) {
	var target = this.getInputData(1)
	var output = false

	if (target === undefined && (data !== undefined && data instanceof THREE.Object3D)) 
		target = data

	if (target === undefined) 
		target = this.graph.config.self

	var parent = target.parent

	// If the parent ain't a scene, then the target object is a child
	output = (parent instanceof THREE.Scene) ? false : true

	this.setOutputData(2, output)

	this.triggerSlot(0, output)
	this.triggerSlot(1)
}

function registerHierarchy() {
	LiteGraph.registerNodeType("Hierarchy/GetAllChildNode", GetAllChildrenNode)
	LiteGraph.registerNodeType("Hierarchy/GetChildByName", GetChildByNameNode)
	LiteGraph.registerNodeType("Hierarchy/GetParent", GetParentNode)
	LiteGraph.registerNodeType("Hierarchy/IsChild", IsChildNode)
}