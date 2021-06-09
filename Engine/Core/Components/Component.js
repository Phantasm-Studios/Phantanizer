function Component() {
	this.values = {}
	this.obj = null

	this.element = document.createElement("div")

	this.component_name = ""
	this.className = ""
	this.widgetsPos = new THREE.Vector2()
}

Component.prototype.clearElement = function() {
	if (this.element.children.length > 0) {
		var range = new Range()
		range.selectNodeContents(this.element)
		range.deleteContents()
	}
}

Component.prototype.addDeleteButton = function() {
	var self = this

	this.delete = new Button(this.element)
	this.delete.setText("Delete Component")
	this.delete.size.set(120, 20)
	this.delete.position.copy(this.widgetsPos)
	this.delete.updateInterface()
	this.delete.setCallback(() => {self.onDelete()})
	this.widgetsPos.y += this.delete.size.y
}

Component.prototype.addResetButton = function() {
	var self = this

	this.reset = new Button(this.element)
	this.reset.setText("Reset Defaults")
	this.reset.size.set(100, 20)
	this.reset.position.copy(this.widgetsPos)
	this.reset.updateInterface()
	this.reset.setCallback(() => {self.onReset()})
	this.widgetsPos.y += this.reset.size.y
}

Component.prototype.onDelete = function() {

}

Component.prototype.onReset = function() {

}

Component.prototype.onCreate = function() {
	
}

Component.prototype.initialize = function() {

}

Component.prototype.update = function() {

}

Component.prototype.updateInterface = function() {
	this.element.style.width = this.form.size.x + "px"
	this.form.updateInterface()
}

Component.prototype.toJSON = function() {
	var output = {}

	output.name = this.component_name
	output.className = this.className

	output.values = this.values

	return output
}