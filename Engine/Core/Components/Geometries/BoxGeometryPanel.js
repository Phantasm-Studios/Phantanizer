"use strict"

// TODO: This

function BoxGeometryPanel() {
	Component.call(this)

	this.component_name = "Box Geometry"
	this.className = "BoxGeometryPanel"

	this.values = {}
}

BoxGeometryPanel.prototype = Object.create(Component.prototype)

BoxGeometryPanel.prototype.initUI = function(pos, obj) {
	// Clear the element
	this.clearElement()

	this.widgetsPos = pos

	// Self pointer
	var self = this
	this.obj = obj

	// Form
	this.form = new Form(this.element)
	this.form.spacing.set(5, 5)

	// Displays this component name
	this.form.addText(this.component_name)
	this.form.nextRow()

	// Size
	this.form.addText("Size")
	this.size = new CoordinatesBox(this.form.element)
	this.size.setOnChange(() => {
		// TODO: This
	})
	this.form.add(this.size)
	this.form.nextRow()

	// Segments
	this.form.addText("Segments")
	this.segments = new CoordinatesBox(this.form.element)
	this.segments.setOnChange(() => {
		// TODO: This
	})
	this.form.add(this.segments)
	this.form.nextRow()

	// Buffered
	this.buffered = new CheckBox(this.form.element)
	this.buffered.setText("Buffered")
	this.buffered.size.set(200, 15)
	this.buffered.setOnChange(() => {
		// TODO: This
	})
	this.form.add(this.buffered)
	this.form.nextRow()

	// Set position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton(this.onReset)

	return this.element
}

BoxGeometryPanel.prototype.updateData = function() {

}

BoxGeometryPanel.prototype.onReset = function() {

}