function ArrayNode() {
	this.addInput("", LiteGraph.EVENT, NodesHelper.slots.event)

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.passer})
	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.output.event})
	this.addOutput("Array", "array", {...NodesHelper.slots.array, pos: [NodesHelper.slots.position.x1, NodesHelper.slots.position.y_second]})
	this.size = [NodesHelper.sizes.small[0], NodesHelper.sizes.small[1]+16]
}
ArrayNode.title = "Array"
ArrayNode.title_color = NodesHelper.titles.array
ArrayNode.collapsable = false
ArrayNode.prototype.resizable = false
ArrayNode.prototype.onGetInputs = function() {
	var item =  [["Item", null, {...NodesHelper.slots.array}]]
	return item
}
ArrayNode.prototype.onInputAdded = function() {
	this.size[0] = NodesHelper.sizes.small[0]
}
ArrayNode.prototype.onInputRemoved = function() {
	this.size[0] = NodesHelper.sizes.small[0]
}
ArrayNode.prototype.onOutputRemoved = function() {
	this.size[0] = NodesHelper.sizes.small[0]
}
ArrayNode.prototype.onExecute = function() {
	if (this.isInputConnected(0))
		return

	this.setOutputData(2, this.createArray())
}
ArrayNode.prototype.onAction = function() {
	var arr = this.createArray()

	this.setOutputData(2, arr)
	
	this.triggerSlot(0, arr)
	this.triggerSlot(1)
}
ArrayNode.prototype.createArray = function() {
	var arr = []

	if (this.inputs) {
		for(var i = 0; i < this.inputs.length; i++) {
			var value = this.getInputData(i)
			
			if(value !== undefined) {
				arr.push(value)
			}
		}
	}

	return arr
}

function ArrayPushNode() {
	this.addInput("", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})
	this.addInput("Array", "array", {...NodesHelper.slots.array, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})
	this.addInput("Element", "", {pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_third]})

	this.addOutput("", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1, NodesHelper.slots.position.y]})

	this.size = [NodesHelper.sizes.small[0], NodesHelper.sizes.small[1]+36]
}
ArrayPushNode.title = "Push"
ArrayPushNode.title_color = NodesHelper.titles.array
ArrayPushNode.collapsable = false
ArrayPushNode.prototype.resizable = false
ArrayPushNode.prototype.onAction = function() {
	if (this.getInputData(2) !== undefined) {
		var ar = this.getInputData(1)
		ar.push(this.getInputData(2))

		this.triggerSlot(0)
	}
}

function registerArray() {
	LiteGraph.registerNodeType("Lists/Arrays/Array", ArrayNode)
	LiteGraph.registerNodeType("Lists/Arrays/Push", ArrayPushNode)
}