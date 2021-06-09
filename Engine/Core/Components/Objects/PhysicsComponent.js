"use strict"

function PhysicsComponent() {
	Component.call(this)

	this.component_name = "Physics"
	this.className = "PhysicsComponent"

	this.values = {
		type: 1,
		mass: 1,
		linearDamping: 0.01,
		angularDamping: 0.01,
		allowSleep: true,
		sleepSpeedLimit: 0.1,
		sleepTimeLimit: 1,
		fixedRotation: false,
		collisionFilterGroup: 1
	}
}

PhysicsComponent.prototype = Object.create(Component.prototype)

PhysicsComponent.prototype.initUI = function(pos, obj) {
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

	// Body type
	this.form.addText("Type")
	this.type = new DropdownList(this.form.element)
	this.type.size.set(100, 20)
	this.type.addValue("Static", CANNON.Body.STATIC)
	this.type.addValue("Dynamic", CANNON.Body.DYNAMIC)
	this.type.addValue("Kinematic", CANNON.Body.KINEMATIC)
	this.type.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.type = self.type.getValue()
		}
	})
	this.form.add(this.type)
	this.form.nextRow()

	// Mass
	this.form.addText("Mass")
	this.mass = new NumberBox(this.form.element)
	this.mass.size.set(80, 18)
	this.mass.setStep(0.1)
	this.mass.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.mass = self.mass.getValue()
		}
	})
	this.form.add(this.mass)
	this.form.nextRow()

	// Body Linear Damping
	this.form.addText("Linear Damping")
	this.linearDamping = new NumberBox(this.form.element)
	this.linearDamping.size.set(80, 18)
	this.linearDamping.setStep(0.01)
	this.linearDamping.setRange(0, 1)
	this.linearDamping.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.linearDamping = self.linearDamping.getValue()
		}
	})
	this.form.add(this.linearDamping)
	this.form.nextRow()

	//Body angular damping
	this.form.addText("Angular Damping")
	this.angularDamping = new NumberBox(this.form.element)
	this.angularDamping.size.set(80, 18)
	this.angularDamping.setStep(0.01)
	this.angularDamping.setRange(0, 1)
	this.angularDamping.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.angularDamping = self.angularDamping.getValue()
		}
	})
	this.form.add(this.angularDamping)
	this.form.nextRow()

	// Allow sleep
	this.allowSleep = new CheckBox(this.form.element)
	this.allowSleep.setText("Allow Sleep")
	this.allowSleep.size.set(150, 15)
	this.allowSleep.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.allowSleep = self.allowSleep.getValue()
		}
	})
	this.form.add(this.allowSleep)
	this.form.nextRow()

	// Sleep Speed Limit
	this.form.addText("Sleep Speed Limit")
	this.sleepSpeedLimit = new NumberBox(this.form.element)
	this.sleepSpeedLimit.size.set(80, 18)
	this.sleepSpeedLimit.setStep(0.01)
	this.sleepSpeedLimit.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.sleepSpeedLimit = self.sleepSpeedLimit.getValue()
		}
	})
	this.form.add(this.sleepSpeedLimit)
	this.form.nextRow()

	// Sleep time Limit
	this.form.addText("Sleep Time Limit")
	this.sleepTimeLimit = new NumberBox(this.form.element)
	this.sleepTimeLimit.size.set(80, 18)
	this.sleepTimeLimit.setStep(0.01)
	this.sleepTimeLimit.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.sleepTimeLimit = self.sleepTimeLimit.getValue()
		}
	})
	this.form.add(this.sleepTimeLimit)
	this.form.nextRow()

	// Fixed rotation
	this.fixedRotation = new CheckBox(this.form.element)
	this.fixedRotation.setText("Fixed Rotation")
	this.fixedRotation.size.set(150, 15)
	this.fixedRotation.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.fixedRotation = self.fixedRotation.getValue()
		}
	})
	this.form.add(this.fixedRotation)
	this.form.nextRow()

	// Collision group
	this.form.addText("Collision Group")
	this.collisionFilterGroup = new NumberBox(this.form.element)
	this.collisionFilterGroup.size.set(80, 18)
	this.collisionFilterGroup.setStep(1)
	this.collisionFilterGroup.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.body.collisionFilterGroup = self.collisionFilterGroup.getValue()
		}
	})
	this.form.add(this.collisionFilterGroup)
	this.form.nextRow()

	// Set position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

PhysicsComponent.prototype.updateData = function() {
	this.type.setValue(this.obj.body.type)
	this.mass.setValue(this.obj.body.mass)
	this.linearDamping.setValue(this.obj.body.linearDamping)
	this.angularDamping.setValue(this.obj.body.angularDamping)
	this.allowSleep.setValue(this.obj.body.allowSleep)
	this.sleepTimeLimit.setValue(this.obj.body.sleepTimeLimit)
	this.sleepSpeedLimit.setValue(this.obj.body.sleepSpeedLimit)
	this.fixedRotation.setValue(this.obj.body.fixedRotation)
	this.collisionFilterGroup.setValue(this.obj.body.collisionFilterGroup)
}

PhysicsComponent.prototype.onReset = function() {
	this.obj.body.type = this.values.type
	this.obj.body.mass = this.values.mass
	this.obj.body.linearDamping = this.values.linearDamping
	this.obj.body.angularDamping = this.values.angularDamping
	this.obj.body.allowSleep = this.values.allowSleep
	this.obj.body.sleepTimeLimit = this.values.sleepTimeLimit
	this.obj.body.sleepSpeedLimit = this.values.sleepSpeedLimit
	this.obj.body.fixedRotation = this.values.fixedRotation
	this.obj.body.collisionFilterGroup = this.values.collisionFilterGroup

	Editor.updateObjectViews()
	this.updateData()
}