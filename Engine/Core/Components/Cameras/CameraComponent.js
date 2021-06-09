"use strict"

function CameraComponent() {
	Component.call(this)

	this.component_name = "Camera"
	this.className = "CameraComponent"

	this.values = {
		fov: 60,
		default: false,
		near: 0.1,
		far: 100000,
		size: 3,
		mode: 0,
		start: [0.0, 0.0],
		camSize: [1.0, 1.0],
		clearColor: false,
		clearDepth: false
	}
}

CameraComponent.prototype = Object.create(Component.prototype)

CameraComponent.prototype.initUI = function(pos, obj) {
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

	if(this.obj instanceof PerspectiveCamera) {

		// Field of View
		this.form.addText("FOV")
		this.fov = new Slider(this.form.element)
		this.fov.size.set(160, 18)
		this.fov.setRange(30, 160)
		this.fov.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.fov = self.fov.getValue()
				self.obj.updateProjectionMatrix()
			}
		})
		this.form.add(this.fov)
		this.form.nextRow()

	} else if (this.obj instanceof OrthographicCamera) {

		// Size
		this.form.addText("Size")
		this.size = new NumberBox(this.form.element)
		this.size.size.set(80, 18)
		this.size.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.size = self.size.getValue()
				self.obj.updateProjectionMatrix()
			}
		})
		this.form.add(this.size)
		this.form.nextRow()

		// Camera resize mode
		this.form.addText("Resize Mode")
		this.mode = new DropdownList(this.form.element)
		this.mode.size.set(130, 18)
		this.mode.addValue("Horizontal", OrthographicCamera.FIXED_VERTICAL)
		this.mode.addValue("Vertical", OrthographicCamera.FIXED_HORIZONTAL)
		this.mode.setOnChange(() => {
			if (self.obj !== null) {
				self.obj.mode = self.mode.getSelectedIndex()
			}
		})
		this.form.add(this.mode)
		this.form.nextRow()
	}

	// Rendering distance
	this.form.addText("Clipping Planes")
	this.form.nextRow()

	// Near
	this.form.addText("Near")
	this.near = new NumberBox(this.form.element)
	this.near.size.set(60, 18)
	this.near.setStep(0.1)
	this.near.setRange(0, Number.MAX_SAFE_INTEGER)
	this.near.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.near = self.near.getValue()
		}
	})
	this.form.add(this.near)
	this.form.nextRow()

	// Far
	this.form.addText("Far")
	this.far = new NumberBox(this.form.element)
	this.far.size.set(80, 18)
	this.far.setRange(0, Number.MAX_SAFE_INTEGER)
	this.far.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.far = self.far.getValue()
		}
	})
	this.form.add(this.far)
	this.form.nextRow()

	// Viewport
	this.form.addText("Viewport")
	this.form.nextRow()

	// Offset
	this.form.addText("Position")
	this.offset = new CoordinatesBox(this.form.element)
	this.offset.setMode(CoordinatesBox.VECTOR2)
	this.offset.setStep(0.05)
	this.offset.size.set(160, 20)
	this.offset.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.offset.copy(self.offset.getValue())
		}
	})
	this.form.add(this.offset)
	this.form.nextRow()

	// Size
	this.form.addText("Size")
	this.viewport = new CoordinatesBox(this.form.element)
	this.viewport.setMode(CoordinatesBox.VECTOR2)
	this.viewport.setRange(0.05)
	this.viewport.size.set(160, 20)
	this.viewport.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.viewport.copy(self.viewport.getValue())
		}
	})
	this.form.add(this.viewport)
	this.form.nextRow()

	// Clear color
	this.clear_color = new CheckBox(this.form.element)
	this.clear_color.setText("Clear colour")
	this.clear_color.size.set(200, 15)
	this.clear_color.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.clear_color = self.clear_color.getValue()
		}
	})
	this.form.add(this.clear_color)
	this.form.nextRow()

	// Clear depth
	this.clear_depth = new CheckBox(this.form.element)
	this.clear_depth.setText("Clear depth")
	this.clear_depth.size.set(200, 15)
	this.clear_depth.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.clear_depth = self.clear_depth.getValue()
		}
	})
	this.form.add(this.clear_depth)
	this.form.nextRow()

	// Select camera as scene default
	this.default = new CheckBox(this.form.element)
	this.default.setText("Use camera")
	this.default.size.set(200, 15)
	this.default.setOnChange(() => {
		if (self.obj !== null) {
			var scene = ObjectUtils.getScene(self.obj)
			if (scene !== null) {
				if (self.default.getValue()) {
					scene.addCamera(self.obj)
				} else {
					scene.removeCamera(self.obj)
				}
			}
		}
	})
	this.form.add(this.default)
	this.form.nextRow()

	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton()

	return this.element
}

CameraComponent.prototype.updateData = function() {
	if (this.obj instanceof PerspectiveCamera) {
		this.fov.setValue(this.obj.fov)
	} else if (this.obj instanceof OrthographicCamera) {
		this.size.setValue(this.obj.size)
		this.mode.setSelectedIndex(this.obj.mode)
	}

	this.near.setValue(this.obj.near)
	this.far.setValue(this.obj.far)

	this.offset.setValue(this.obj.offset)
	this.viewport.setValue(this.obj.viewport)

	this.clear_color.setValue(this.obj.clear_color)
	this.clear_depth.setValue(this.obj.clear_depth)

	this.default.setValue(ObjectUtils.getScene(this.obj).cameras.indexOf(this.obj) !== -1)
}

CameraComponent.prototype.onReset = function() {
	if (this.obj instanceof PerspectiveCamera) {
		this.obj.fov = this.values.fov
	} else if (this.obj instanceof OrthographicCamera) {
		this.obj.size = this.values.camSize
		this.obj.mode = this.values.mode
	}

	this.obj.near = this.values.near
	this.obj.far = this.values.far

	this.obj.offset = new THREE.Vector2(this.values.offset[0], this.values.offset[1])
	this.obj.viewport = new THREE.Vector2(this.values.viewport[0], this.values.viewport[1])

	this.obj.clear_color = this.values.clearColor
	this.obj.clear_depth = this.values.clearDepth

	var scene = ObjectUtils.getScene(this.obj)
	if (scene !== null) {
		// By default there is no initial camera
		var index = scene.cameras.indexOf(this.obj)
		if (index > -1) {
			scene.cameras.splice(index, 1)
		}
	}

	Editor.updateObjectViews()
	this.updateData()
}