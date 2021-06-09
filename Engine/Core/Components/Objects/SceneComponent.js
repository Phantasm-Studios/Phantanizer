"use strict"

function SceneComponent() {
	Component.call(this)

	this.component_name = "Scene"
	this.className = "SceneComponent"

	this.values = {
		name: "scene",
		default: false,
		background: [0,0,0],
		fog: THREE.Fog.NONE
	}
}

SceneComponent.prototype = Object.create(Component.prototype)

SceneComponent.prototype.initUI = function(pos, obj) {
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

	//Select scene as default
	this.default = new CheckBox(this.form.element)
	this.default.setText("Default Scene")
	this.default.size.set(200, 15)
	this.default.setOnChange(() => {
		if (self.obj !== null) {
			var program = self.obj.parent
			if (self.default.getValue()) {
				program.default_scene = self.obj.uuid
			} else {
				program.default_scene = null
			}
		}
	})
	this.form.add(this.default)
	this.form.nextRow()

	// Background colour
	this.form.addText("Background")
	this.background = new ColorChooser(this.form.element)
	this.background.size.set(80, 18)
	this.background.setValue(0, 0, 0)
	this.background.setOnChange(() => {
		if (self.obj !== null) {
			if (self.obj.background === null) {
				self.obj.background = new THREE.Color()
			}
			self.obj.background.setHex(self.background.getValueHex())
		}
	})
	this.form.add(this.background)
	this.form.nextRow()

	// Fog
	this.form.addText("Fog")
	this.fog = new DropdownList(this.form.element)
	this.fog.size.set(100, 20)
	this.fog.addValue("None", THREE.Fog.NONE)
	this.fog.addValue("Linear", THREE.Fog.LINEAR)
	this.fog.addValue("Exponential", THREE.Fog.EXPONENTIAL)
	this.fog.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.setFogMode(self.fog.getSelectedIndex())
			self.updateData()
		}
	})
	this.form.add(this.fog)
	this.form.nextRow()

	this.form.addText("Fog Settings")
	this.form.nextRow()

	// linear fog
	this.fog_linear_form = new Form(this.form.element)
	this.fog_linear_form.spacing.set(5, 5)

    this.fog_linear_form.addText("Linear Fog")
    this.fog_linear_form.nextRow()

	// Linear fog colour
	this.fog_linear_form.addText("Colour")
	this.fog_linear_colour = new ColorChooser(this.fog_linear_form.element)
	this.fog_linear_colour.size.set(80, 18)
	this.fog_linear_colour.setOnChange(() => {
		if (self.obj !== null) {
			var colour = self.fog_linear_colour.getValueHex()
			self.obj.fog.color.setHex(colour)
		}
	})
	this.fog_linear_form.add(this.fog_linear_colour)
	this.fog_linear_form.nextRow()

	// Linear fog near
	this.fog_linear_form.addText("Near")
	this.fog_near = new NumberBox(this.fog_linear_form.element)
	this.fog_near.size.set(60, 18)
	this.fog_near.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.fog.near = self.fog_near.getValue()
		}
	})
	this.fog_linear_form.add(this.fog_near)
	this.fog_linear_form.nextRow()

	// Linear fog far
	this.fog_linear_form.addText("Far")
	this.fog_far = new NumberBox(this.fog_linear_form.element)
	this.fog_far.size.set(60, 18)
	this.fog_far.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.fog.far = self.fog_far.getValue()
		}
	})
	this.fog_linear_form.add(this.fog_far)
	this.fog_linear_form.nextRow()
	this.fog_linear_form.updateInterface()

	// Add linear fog form
	this.form.add(this.fog_linear_form)
	this.form.nextRow()

	// Exponential fog properties
	this.fog_exponential_form = new Form(this.form.element)
	this.fog_exponential_form.spacing.set(5, 5)

    this.fog_exponential_form.addText("Exponential Fog")
    this.fog_exponential_form.nextRow()

	// Exponential fog density
	this.fog_exponential_form.addText("Density")
	this.fog_density = new NumberBox(this.fog_exponential_form.element)
	this.fog_density.size.set(100, 18)
	this.fog_density.setStep(0.0001)
	this.fog_density.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.fog.density = self.fog_density.getValue()
		}
	})
	this.fog_exponential_form.add(this.fog_density)
	this.fog_exponential_form.nextRow()
	this.fog_exponential_form.updateInterface()

	// Add exponential fog form
	this.form.add(this.fog_exponential_form)
	this.form.nextRow()

	// Physics World
	this.form.addText("Physics World")
	this.form.nextRow()

	// Gravity
	this.form.addText("Gravity")
	this.gravity = new CoordinatesBox(this.form.element)
	this.gravity.setOnChange(() => {
		if (self.obj !== null) {
			var gravity = self.gravity.getValue()
			self.obj.world.gravity.set(gravity.x, gravity.y, gravity.z)
		}
	})
	this.form.add(this.gravity)
	this.form.nextRow()

	// Set position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

SceneComponent.prototype.updateForms = function() {
/*	if (this.obj !== null) {
		// Update sub forms visibility
		this.fog_linear_form.visible = (this.obj.fog_mode === Scene.FOG_LINEAR) ? true : false
		this.fog_linear_form.updateInterface()

		// As this is the the only scene component, it's safe to do this
		this.widgetsPos.y = 10

		this.widgetsPos.y += this.form.size.y
		this.widgetsPos.y += this.fog_linear_form.size.y
		this.reset.position.copy(this.widgetsPos)
		this.widgetsPos.y += this.reset.size.y
		this.reset.updateInterface()

		this.fog_exponential_form.visible = (this.obj.fog_mode === Scene.FOG_EXPONENTIAL) ? true : false
		this.fog_exponential_form.updateInterface()

		// Update form
		this.form.updateInterface()
	}*/
}

SceneComponent.prototype.updateData = function() {
	this.name.setText(this.obj.name)
	this.default.setValue(this.obj.uuid === this.obj.parent.default_scene)

	if (this.obj.fog instanceof THREE.Fog) {
		this.fog.setValue(THREE.Fog.LINEAR)
	} else if (this.obj.fog instanceof THREE.FogExp2) {
		this.fog.setValue(THREE.Fog.EXPONENTIAL)
	} else {
		this.fog.setValue(THREE.Fog.NONE)
	}

	if (this.obj.fog !== null) {
		this.fog_linear_colour.setValueHex(this.obj.fog.color.getHex())
		this.fog_near.setValue((this.obj.fog.near !== undefined) ? this.obj.fog.near : 0)
		this.fog_far.setValue((this.obj.fog.far !== undefined) ? this.obj.fog.far : 0)
		this.fog_density.setValue((this.obj.fog.density !== undefined) ? this.obj.fog.density : 0)
	} else {
		this.fog_linear_colour.setValueHex(0x000000)
		this.fog_near.setValue(0)
		this.fog_far.setValue(0)
		this.fog_density.setValue(0)
	}

	if (this.obj.background !== null) {
		this.background.setValue(this.obj.background.r, this.obj.background.g, this.obj.background.b)
	}

	this.gravity.setValue(this.obj.world.gravity.x, this.obj.world.gravity.y, this.obj.world.gravity.z)

	this.updateForms()
}

SceneComponent.prototype.onReset = function() {
	this.obj.name = this.values.name
	this.obj.default = this.values.default
	this.obj.parent.default_scene = null
	this.obj.setFogMode(this.values.fog)

	this.updateData()
	Editor.updateObjectViews()
}
