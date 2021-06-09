"use strict"

function ObjectComponent() {
	Component.call(this)

	this.component_name = "Object 3D"
	this.className = "ObjectComponent"

	this.values = {
		visible: true,
		static: false,
		castShadow: true,
		receiveShadow: true
	}
}

ObjectComponent.prototype = Object.create(Component.prototype)

ObjectComponent.prototype.initUI = function(pos, obj) {
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

	// Visible
	this.visible = new CheckBox(this.form.element)
	this.visible.setText("Visible")
	this.visible.size.set(200, 15)
	this.visible.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.visible = self.visible.getValue()
		}
	})
	this.form.add(this.visible)
	this.form.nextRow()

	// Static
	this.static = new CheckBox(this.form.element)
	this.static.setText("Static Object")
	this.static.size.set(200, 15)
	this.static.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.matrixAutoUpdate = !(self.static.getValue())
		}
	})
	this.form.add(this.static)
	this.form.nextRow()

	// Cast shadow
	this.cast_shadow = new CheckBox(this.form.element)
	this.cast_shadow.setText("Cast Shadow")
	this.cast_shadow.size.set(200, 15)
	this.cast_shadow.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.castShadow = self.cast_shadow.getValue()
		}
	})
	this.form.add(this.cast_shadow)
	this.form.nextRow()

	// Receive Shadow
	this.receive_shadow = new CheckBox(this.form.element)
	this.receive_shadow.setText("Receive Shadow")
	this.receive_shadow.size.set(200, 15)
	this.receive_shadow.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.receiveShadow = self.receive_shadow.getValue()
		}
	})
	this.form.add(this.receive_shadow)
	this.form.nextRow()

	// Set form position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

ObjectComponent.prototype.updateData = function() {
	this.visible.setValue(this.obj.visible)
	this.static.setValue(!this.obj.matrixAutoUpdate)
	this.cast_shadow.setValue(this.obj.castShadow)
	this.receive_shadow.setValue(this.obj.receiveShadow)
}

ObjectComponent.prototype.onReset = function() {
	this.obj.visible = this.values.visible
	this.obj.matrixAutoUpdate = !this.values.static
	this.obj.castShadow = this.values.castShadow
	this.obj.receiveShadow = this.values.receiveShadow

	this.updateData()
}