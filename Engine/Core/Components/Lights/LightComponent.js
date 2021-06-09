"use strict"

function LightComponent() {
	Component.call(this)

	this.component_name = "Light"
	this.className = "LightComponent"

	this.values = {
		colour: [0.265, 0.265, 0.265],
		castShadow: true,
		groundCol: [1,1,1],
		distance: 0,
		intensity: 1,
		shadow_width: 512,
		shadow_height: 512,
		shadow_near: 0.01,
		shadow_far: 1000000,
		angle: 1,
		penumbra: 0
	}
}

LightComponent.prototype = Object.create(Component.prototype)

LightComponent.prototype.initUI = function(pos, obj) {
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

	// Colour
	this.form.addText("Colour")
	this.colour = new ColorChooser(this.form.element)
	this.colour.size.set(80, 18)
	this.colour.setOnChange(() => {
		if (self.obj !== null) {
			var colour = self.colour.getValue()
			self.obj.color.setRGB(colour.r, colour.g, colour.b)
		}
	})
	this.form.add(this.colour)
	this.form.nextRow()

	// Hemisphere Light
	if (this.obj instanceof HemisphereLight) {
		// Ground Colour
		this.form.addText("Ground Colour")
		this.groundCol = new ColorChooser(this.form.element)
		this.groundCol.size.set(80, 18)
		this.groundCol.setOnChange(() => {
			if (self.obj !== null) {
				var col = self.groundCol.getValue()
				self.obj.groundColor.setRGB(col.r, col.g, col.b)
			}
		})
		this.form.add(this.groundCol)
		this.form.nextRow()
	}
	// Point Light
	if (this.obj instanceof PointLight) {
		// Distance
		this.form.addText("Distance")
		this.distance = new NumberBox(this.form.element)
		this.distance.size.set(60, 18)
		this.distance.setStep(0.1)
		this.distance.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.distance = self.distance.getValue()
			}
		})
		this.form.add(this.distance)
		this.form.nextRow()

		// Intensity
		this.form.addText("Intensity")
		this.intensity = new Slider(this.form.element)
		this.intensity.size.set(160, 18)
		this.intensity.setStep(0.1)
		this.intensity.setRange(0, 10)
		this.intensity.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.intensity = self.intensity.getValue()
			}
		})
		this.form.add(this.intensity)
		this.form.nextRow()

	}
	// Spot Light
	if (this.obj instanceof SpotLight) {
		// Penumbra
		this.form.addText("Penumbra")
		this.penumbra = new Slider(this.form.element)
		this.penumbra.size.set(160, 18)
		this.penumbra.position.set(65, 110)
		this.penumbra.setRange(0, 1)
		this.penumbra.setStep(0.01)
		this.penumbra.updateInterface()
		this.penumbra.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.penumbra = self.penumbra.getValue()
			}
		})
		this.form.add(this.penumbra)
		this.form.nextRow()

		// Angle
		this.form.addText("Angle")
		this.angle = new Slider(this.form.element)
		this.angle.size.set(160, 18)
		this.angle.setRange(0, 1.57)
		this.angle.setStep(0.01)
		this.angle.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.angle = self.angle.getValue()
			}
		})
		this.form.add(this.angle)
		this.form.nextRow()
	}

	if (this.obj instanceof DirectionalLight || this.obj instanceof PointLight || this.obj instanceof SpotLight) {
		//Shadows
		this.form.addText("Shadows")
		this.form.nextRow()

		this.cast_shadow = new CheckBox(this.form.element)
		this.cast_shadow.setText("Cast Shadow")
		this.cast_shadow.size.set(200, 15)
		this.cast_shadow.position.set(5, 85)
		this.cast_shadow.updateInterface()
		this.cast_shadow.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.castShadow = self.cast_shadow.getValue()
			}
		})
		this.form.add(this.cast_shadow)
		this.form.nextRow()

		// Map
		this.form.addText("Map")
		this.form.nextRow()

		// Shadow resolution
		this.form.addText("Resolution")
		this.shadow_width = new DropdownList(this.form.element)
		this.shadow_width.size.set(60, 18)
		this.shadow_width.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.shadow.mapSize.width = self.shadow_width.getValue()
				self.obj.updateShadowMap()
			}
		})
		this.form.add(this.shadow_width)
		this.form.addText("x")
		this.shadow_height = new DropdownList(this.form.element)
		this.shadow_height.size.set(60, 18)
		this.shadow_height.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.shadow.mapSize.height = self.shadow_height.getValue()
				self.obj.updateShadowMap()
			}
		})
		this.form.add(this.shadow_height)
		this.form.nextRow()

		for(var i = 0; i < 13; i++) {
			var size = Math.pow(2, i)
			this.shadow_width.addValue(size.toString(), size)
			this.shadow_height.addValue(size.toString(), size)
		}

		// ShadowMap camera near
		this.form.addText("Near")
		this.shadow_near = new NumberBox(this.form.element)
		this.shadow_near.size.set(60, 18)
		this.shadow_near.setStep(0.1)
		this.shadow_near.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.shadow.camera.near = self.shadow_near.getValue()
				self.obj.updateShadowMap()
			}
		})
		this.form.add(this.shadow_near)

		// ShadowMap Camera Far
		this.form.addText("Far")
		this.shadow_far = new NumberBox(this.form.element)
		this.shadow_far.size.set(60, 18)
		this.shadow_far.setStep(0.1)
		this.shadow_far.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.shadow.camera.far = self.shadow_far.getValue()
				self.obj.updateShadowMap()
			}
		})
		this.form.add(this.shadow_far)
		this.form.nextRow()

		if(this.obj instanceof DirectionalLight) {
			// ShadowMap Camera left
			this.form.addText("Left")
			this.shadow_left = new NumberBox(this.form.element)
			this.shadow_left.size.set(60, 18)
			this.shadow_left.setStep(0.1)
			this.shadow_left.setOnChange(() => {
				if (self.obj !== null) {
					self.obj.shadow.camera.left = self.shadow_left.getValue()
					self.obj.updateShadowMap()
				}
			})
			this.form.add(this.shadow_left)
	
			// ShadowMap Camera right
			this.form.addText("Right")
			this.shadow_right = new NumberBox(this.form.element)
			this.shadow_right.size.set(60, 18)
			this.shadow_right.setStep(0.1)
			this.shadow_right.setOnChange(() => {
				if (self.obj !== null) {
					self.obj.shadow.camera.right = self.shadow_right.getValue()
					self.obj.updateShadowMap()
				}
			})
			this.form.add(this.shadow_right)
			this.form.nextRow()
	
			// ShadowMap Camera top
			this.form.addText("Top")
			this.shadow_top = new NumberBox(this.form.element)
			this.shadow_top.size.set(60, 18)
			this.shadow_top.setStep(0.1)
			this.shadow_top.setOnChange(() => {
				if (self.obj !== null) {
					self.obj.shadow.camera.top = self.shadow_top.getValue()
					self.obj.updateShadowMap()
				}
			})
			this.form.add(this.shadow_top)
	
			// ShadowMap Camera bottom
			this.form.addText("Bottom")
			this.shadow_bottom = new NumberBox(this.form.element)
			this.shadow_bottom.size.set(60, 18)
			this.shadow_bottom.setStep(0.1)
			this.shadow_bottom.setOnChange(() => {
				if (self.obj !== null) {
					self.obj.shadow.camera.bottom = self.shadow_bottom.getValue()
					self.obj.updateShadowMap()
				}
			})
			this.form.add(this.shadow_bottom)
			this.form.nextRow()
		}
		
	}

	// Set form position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

LightComponent.prototype.updateData = function() {
	this.colour.setValue(this.obj.color.r, this.obj.color.g, this.obj.color.b)

	if (this.obj instanceof HemisphereLight) {
		this.groundCol.setValue(this.obj.groundColor.r, this.obj.groundColor.g, this.obj.groundColor.b)
	}
	if (this.obj instanceof PointLight) {
		this.distance.setValue(this.obj.distance)
		this.intensity.setValue(this.obj.intensity)
	}
	if (this.obj instanceof SpotLight) {
		this.angle.setValue(this.obj.angle)
		this.penumbra.setValue(this.obj.penumbra)
	}

	if (this.obj instanceof DirectionalLight || this.obj instanceof PointLight || this.obj instanceof SpotLight) {
		this.cast_shadow.setValue(this.obj.castShadow)
		this.shadow_width.setValue(this.obj.shadow.mapSize.width)
		this.shadow_height.setValue(this.obj.shadow.mapSize.height)
		this.shadow_near.setValue(this.obj.shadow.camera.near)
		this.shadow_far.setValue(this.obj.shadow.camera.far)
	}

	if (this.obj instanceof DirectionalLight) {
		this.shadow_left.setValue(this.obj.shadow.camera.left)
		this.shadow_right.setValue(this.obj.shadow.camera.right)
		this.shadow_top.setValue(this.obj.shadow.camera.top)
		this.shadow_bottom.setValue(this.obj.shadow.camera.bottom)
	}

}

LightComponent.prototype.onReset = function() {
	this.obj.color.setRGB(this.values.colour[0], this.values.colour[1], this.values.colour[2])

	if (this.obj instanceof DirectionalLight || this.obj instanceof PointLight) {
		this.obj.castShadow = this.values.castShadow
	}
	if (this.obj instanceof HemisphereLight) {
		this.obj.groundColor.setRGB(this.values.groundCol[0], this.values.groundCol[1], this.values.groundCol[2])
	}
	if (this.obj instanceof PointLight) {
		this.obj.distance = this.values.distance
		this.obj.intensity = this.values.intensity
		this.obj.shadow.mapSize.width = this.values.shadow_width
		this.obj.shadow.mapSize.height = this.values.shadow_height
		this.obj.shadow.camera.near = this.values.shadow_near
		this.obj.shadow.camera.far = this.values.shadow_far
		this.obj.updateShadowMap()
	}
	if (this.obj instanceof SpotLight) {
		this.obj.penumbra = this.values.penumbra
		this.obj.angle = this.values.angle
	}

	Editor.updateObjectViews()
	this.updateData()
}