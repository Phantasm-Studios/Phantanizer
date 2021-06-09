function VariableNode() {

	this.properties = {name: "myname", container: VariableNode.LITEGRAPH}

	this.addInput("", LiteGraph.EVENT, NodesHelper.slots.input.event)

	this.addInput("In", "", {...NodesHelper.slots.variable, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})
	this.name_widget = this.addWidget("string", "", this.properties.name, "name")
	this.name_widget.width = 100

	this.addOutput("Value", "", {...NodesHelper.slots.variable, pos: [NodesHelper.slots.position.x1+10, NodesHelper.slots.position.y]})

	this.size[0] = 130
}
VariableNode.title = "Variable"
VariableNode.title_color = NodesHelper.titles.base
VariableNode.collapsable = true
VariableNode.blocks = "Blocks"
VariableNode.prototype.resizable = false

VariableNode.LITEGRAPH = 0 // Between all graphs
VariableNode.GRAPH = 1 // Only inside this graph
VariableNode.GLOBALSCOPE = 2 // Attached to window

VariableNode["@container"] = {type: "enum", values: {"litegraph": VariableNode.LITEGRAPH, "graph": VariableNode.GRAPH, "global": VariableNode.GLOBALSCOPE}}

VariableNode.prototype.getContainer = function() {
	switch(this.properties.container) {
		case VariableNode.GRAPH:
			if (this.graph)
				return this.graph.vars
			return {}
			break;
		case VariableNode.GLOBALSCOPE:
			return global
			break
		case VariableNode.LITEGRAPH:
		default:
			return LiteGraph.Globals
			break
	}
}

VariableNode.prototype.onAction = function(action, data) {
	var container = this.getContainer()

	if (this.isInputConnected(1)) {
		this.value = this.getInputData(1)
		container[this.properties.name] = this.value
		this.setOutputData(0, this.value)
		return
	}

	this.setOutputData(0, container[this.properties.name])
}

VariableNode.prototype.getTitle = function() {
	return this.properties.name
}

function registerBase() {
	LiteGraph.registerNodeType("Base/Variable", VariableNode)
}
