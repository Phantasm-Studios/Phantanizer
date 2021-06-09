"use strict"

function LeapComponent() {
	Component.call(this)

	this.component_name = "Leap"
	this.className = "LeapComponent"

	this.values = {
		mode: 0,
		debug_model: true,
		gestures_enabled: true,
		poses_enabled: true
	}
}

LeapComponent.prototype = Object.create(Component.prototype)

LeapComponent.prototype.initUI = function(pos, obj) {
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

	// Mode
	this.form.addText("Mode")
	this.mode = new DropdownList(this.form.element)
	this.mode.size.set(80, 18)
	this.mode.addValue("Desk", Script.INIT)
	this.mode.addValue("HMD", Script.LOOP)
	this.mode.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.mode = self.mode.getSelectedIndex()
		}
	})
	this.form.add(this.mode)
	this.form.nextRow()

	// Debug model
	this.debug_model = new CheckBox(this.form.element)
	this.debug_model.setText("Debug Model")
	this.debug_model.size.set(200, 15)
	this.debug_model.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.debug_model = self.debug_model.getValue()
		}
	})
	this.form.add(this.debug_model)
	this.form.nextRow()

	// Gestures enabled
	this.gestures_enabled = new CheckBox(this.form.element)
	this.gestures_enabled.setText("Gestures Enabled")
	this.gestures_enabled.size.set(200, 15)
	this.gestures_enabled.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.gestures_enabled = self.gestures_enabled.getValue()
		}
	})
	this.form.add(this.gestures_enabled)
	this.form.nextRow()

	// Poses enabled
	this.poses_enabled = new CheckBox(this.form.element)
	this.poses_enabled.setText("Poses Enabled")
	this.poses_enabled.size.set(200, 15)
	this.poses_enabled.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.poses_enabled = self.poses_enabled.getValue()
		}
	})
	this.form.add(this.poses_enabled)
	this.form.nextRow()

	// Set position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

LeapComponent.prototype.updateData = function() {
	this.mode.setSelectedIndex(this.obj.mode)
	this.debug_model.setValue(this.obj.debug_model)
	this.gestures_enabled.setValue(this.obj.gestures_enabled)
	this.poses_enabled.setValue(this.obj.poses_enabled)
}

LeapComponent.prototype.onReset = function() {
	this.obj.mode = this.values.mode
	this.obj.debug_model = this.values.debug_model
	this.obj.gestures_enabled = this.values.gestures_enabled
	this.obj.poses_enabled = this.values.poses_enabled

	Editor.updateObjectViews()
	this.updateData()
}