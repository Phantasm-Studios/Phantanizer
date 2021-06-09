"use strict"

function KinectComponent() {
	Component.call(this)

	this.component_name = "Kinect"
	this.className = "KinectComponent"

	this.values = {
		debugModel: true
	}
}

KinectComponent.prototype = Object.create(Component.prototype)

KinectComponent.prototype.initUI = function(pos, obj) {
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

	// Debug model
	this.debug_model = new CheckBox(this.form.element)
	this.debug_model.setText("Debug model")
	this.debug_model.size.set(200, 15)
	this.debug_model.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.debug_model = self.debug_model.getValue()
		}
	})
	this.form.add(this.debug_model)

	// Set position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

KinectComponent.prototype.updateData = function() {
	this.debug_model.setValue(this.obj.debug_model)
}

KinectComponent.prototype.onReset = function() {
	this.obj.debug_model = this.values.debugModel

	Editor.updateObjectViews()
	this.updateData()
}