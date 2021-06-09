"use strict"

function ProgramComponent() {
	Component.call(this)

	this.component_name = "Program"
	this.className = "ProgramComponent"

	this.values = {
		name: "program",
		author: "",
		version: "0",
		lock_pointer: false,
		vr: false,
		vr_scale: 1
	}
}

ProgramComponent.prototype = Object.create(Component.prototype)

ProgramComponent.prototype.initUI = function(pos, obj) {
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

	// Displays this component name
	this.form.addText(this.component_name)
	this.form.nextRow()

	// Name
	this.form.addText("Name")
	this.name = new TextBox(this.form.element)
	this.name.size.set(200, 18)
	this.name.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.name = self.name.getText()
			Editor.updateObjectViews()
		}
	})
	this.form.add(this.name)
	this.form.nextRow()

	// Author
	this.form.addText("Author")
	this.author = new TextBox(this.form.element)
	this.author.position.set(50, 35)
	this.author.size.set(200, 18)
	this.author.updateInterface()
	this.author.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.author = self.author.getText()
		}
	})
	this.form.add(this.author)
	this.form.nextRow()

	// Version
	this.form.addText("Version")
	this.version = new TextBox(this.form.element)
	this.version.size.set(100, 18)
	this.version.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.version = self.version.getText()
		}
	})
	this.form.add(this.version)
	this.form.nextRow()

	// Mouse Lock
	this.lock_pointer = new CheckBox(this.form.element)
	this.lock_pointer.setText("Lock Pointer")
	this.lock_pointer.size.set(50, 15)
	this.lock_pointer.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.lock_pointer = self.lock_pointer.getValue()
		}
	})
	this.form.add(this.lock_pointer)
	this.form.nextRow()

	// VR
	this.form.addText("Virtual Reality")
	this.form.nextRow()

	// VR Enabled
	this.vr = new CheckBox(this.form.element)
	this.vr.setText("VR Enabled")
	this.vr.size.set(50, 15)
	this.vr.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.vr = self.vr.getValue()
		}
	})
	this.form.add(this.vr)
	this.form.nextRow()

	// VR Movement Scale
	this.form.addText("VR Movement Scale")
	this.vr_scale = new NumberBox(this.form.element)
	this.vr_scale.size.set(50, 18)
	this.vr_scale.setRange(0, 1000)
	this.vr_scale.setStep(0.05)
	this.vr_scale.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.vr_scale = self.vr_scale.getValue()
		}
	})
	this.form.add(this.vr_scale)
	this.form.nextRow()

	// Set position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

ProgramComponent.prototype.updateData = function() {
	this.name.setText(this.obj.name)
	this.author.setText(this.obj.author)
	this.version.setText(this.obj.version)
	this.lock_pointer.setValue(this.obj.lock_pointer)
	this.vr.setValue(this.obj.vr)
	this.vr_scale.setValue(this.obj.vr_scale)
}

ProgramComponent.prototype.onReset = function() {
	this.obj.name = this.values.name
	this.obj.author = this.values.author
	this.obj.version = this.values.version
	this.obj.lock_pointer = this.values.lock_pointer
	this.obj.vr = this.values.vr
	this.obj.vr_scale = this.values.vr_scale

	Editor.updateObjectViews()
	this.updateData()
}