function WidgetFloatNode() {
	this.properties = {value: 1}
	this.addOutput("Value", "number", {...NodesHelper.slots.number, pos: [NodesHelper.slots.position.x1+50, NodesHelper.slots.position.y]})
	this.addWidget("number", "Value", this.properties.value, "value")
	this.size = [NodesHelper.sizes.small[0]+50, NodesHelper.sizes.small[1]+26]
}
WidgetFloatNode.title = "Float"
WidgetFloatNode.title_color = NodesHelper.titles.widget
WidgetFloatNode.collapsable = false
WidgetFloatNode.prototype.resizable = false
WidgetFloatNode.prototype.onStart = function() {
	if (this.properties.value !== undefined)
		this.setOutputData(0, this.properties.value)
}
WidgetFloatNode.prototype.onPropertyChanged = function() {
	this.setOutputData(0, this.properties.value)

	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function registerWidgets() {
	LiteGraph.registerNodeType("Base/Widgets/Float", WidgetFloatNode)
}