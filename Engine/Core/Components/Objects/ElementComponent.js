"use strict"

function ElementComponent() {
	Component.call(this)

	this.component_name = "Element"
	this.className = "ElementComponent"

	this.values = {
		name: "object",
		position: new THREE.Vector3(0, 0, 0),
		rotation: new THREE.Vector3(0, 0, 0),
		scale: new THREE.Vector3(1, 1, 1)
	}
}

ElementComponent.prototype = Object.create(Component.prototype)

ElementComponent.prototype.initUI = function(pos, obj) {
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

	// Object name
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

	// Object UUID
	this.form.addText("UUID")
	this.uuid = new TextBox(this.form.element)
	this.uuid.size.set(248, 18)
	this.uuid.setDisabled(true)
	this.form.add(this.uuid)
	this.form.nextRow()

	// Object Type
	this.form.addText("Type")
	this.type = this.form.addText("null")
	this.form.nextRow()

	// Object Position
	this.form.addText("Position")
	this.position = new CoordinatesBox(this.form.element)
	this.position.setOnChange(() => {
		if (self.obj !== null) {
			var position = self.position.getValue()
			self.obj.position.set(position.x, position.y, position.z)
		}
	})
	this.form.add(this.position)
	this.form.nextRow()

	// Object Rotation
	this.form.addText("Rotation")
	this.rotation = new CoordinatesBox(this.form.element)
	this.rotation.setOnChange(() => {
		if (self.obj !== null) {
			var rotation = self.rotation.getValue()
			self.obj.rotation.set(rotation.x, rotation.y, rotation.z)
		}
	})
	this.form.add(this.rotation)
	this.form.nextRow()

	// Object Scale
	this.form.addText("Scale")
	this.scale = new CoordinatesBox(this.form.element)
	this.scale.setOnChange(() => {
		if (self.obj !== null) {
			var scale = self.scale.getValue()
			self.obj.scale.set(scale.x, scale.y, scale.z)

			if (self.obj instanceof PhysicsObject) {
				// Update physics objects
				var shapes = self.obj.body.shapes
				for(var i = 0; i < shapes.length; i++) {
					var shape = shapes[i]

					if (shape.type === CANNON.Shape.types.BOX) {
						shape.halfExtents.x = scale.x / 2.0
						shape.halfExtents.y = scale.y / 2.0
						shape.halfExtents.z = scale.z / 2.0
					} else if (shape.type === CANNON.Shape.types.SPHERE) {
						shape.radius = scale.x
					}
				}
			}
		}
	})
	this.form.add(this.scale)
	this.form.nextRow()

	// Set position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

ElementComponent.prototype.updateData = function() {
	this.name.setText(this.obj.name)
	this.uuid.setText(this.obj.uuid)
	this.position.setValue(this.obj.position.x, this.obj.position.y, this.obj.position.z)
	this.rotation.setValue(this.obj.rotation.x, this.obj.rotation.y, this.obj.rotation.z)
	this.scale.setValue(this.obj.scale.x, this.obj.scale.y, this.obj.scale.z)
	this.type.setText(this.obj.type)
}

ElementComponent.prototype.onReset = function() {
	//this.obj.name = this.values.name
	this.obj.position.set(this.values.position.x, this.values.position.y, this.values.position.z)
	this.obj.rotation.set(this.values.rotation.x, this.values.rotation.y, this.values.rotation.z)
	this.obj.scale.set(this.values.scale.x, this.values.scale.y, this.values.scale.z)

	Editor.updateObjectViews()
	this.updateData()
}