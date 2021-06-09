"use strict"

function ShaderMaterialEditor(parent) {
	// Parent
    this.parent = (parent !== undefined) ? parent : document.body

	// ID
	var id = "shaderMaterial_editor" + ShaderMaterialEditor.id
	ShaderMaterialEditor.id++

	// Create element
	this.element = document.createElement("div")
	this.element.id = id
	this.element.style.position = "absolute"

	this.element.ondrop = function(e) {
		e.preventDefault()
	}

	this.element.ondragover = function(e) {
		e.preventDefault()
	}

	// Main container
	this.main = new DualDivisionResizable(this.element)
	this.main.tab_position = 0.5
	this.main.tab_position_min = 0.3
	this.main.tab_position_max = 0.7
	this.main.updateInterface()

	this.preview = new DualDivisionResizable(this.main.div_a)
	this.preview.orientation = DualDivisionResizable.VERTICAL
	this.preview.tab_position = 0.8
	this.preview.tab_position_min = 0.3
	this.preview.tab_position_max = 0.8
	this.preview.updateInterface()

	// Change preview div aspect
	this.preview.div_a.style.overflow = "auto"
	this.preview.div_b.style.cursor = "default"
	this.preview.div_b.style.backgroundColor = Editor.theme.panel_color

	// Change main div aspect
	this.main.div_b.style.overflow = "auto"
	this.main.div_b.style.cursor = "default"
	this.main.div_b.style.backgroundColor = Editor.theme.panel_color

	// Self pointer
	var self = this

	//-------------------------------------- Material Preview --------------------------------------
	// Canvas
	this.canvas = new Canvas(this.preview.div_a)
	this.canvas.updateInterface()

	// Element attributes
	this.children = []
	this.fit_parent = false
	this.size = new THREE.Vector2(0, 0)
	this.position = new THREE.Vector2(0, 0)
	this.visible = true

	// Material UI File element
	this.material_file = null

	// Attached material
	this.material = null

	// Material renderer and scene
	this.renderer = new THREE.WebGLRenderer({canvas: this.canvas.element, antialias: Settings.render.antialiasing})
	this.renderer.setSize(this.canvas.size.x, this.canvas.size.y)
	this.renderer.shadowMap.enabled = Settings.render.shadows
	this.renderer.shadowMap.type = Settings.render.shadows_type

	// Material camera
	this.camera = new PerspectiveCamera(90, this.canvas.size.x/this.canvas.size.y)

	// Material preview scene
	this.scene = new Scene()
	this.sky = new Sky()
	var sun = this.sky.sun
	sun.shadow.camera.left = -5
	sun.shadow.camera.right = 5
	sun.shadow.camera.top = 5
	sun.shadow.camera.bottom = -5
	this.scene.add(this.sky)
	this.scene.add(new PointLight(0x666666))
	this.scene.add(new AmbientLight(0x555555))
	this.obj = new Mesh(new THREE.SphereBufferGeometry(1, 64, 64), null)
	this.obj.position.set(0, 0, -2.5)
	this.obj.visible = false
	this.scene.add(this.obj)

	//-------------------------------- Material preview configuration --------------------------------
	// Text
	var text = new Text(this.preview.div_b)
	text.setAlignment(Text.LEFT)
	text.setText("Configuration")
	text.position.set(10, 20)
	text.fit_content = true
	text.updateInterface()
	this.children.push(text)

	// Test model
	var text = new Text(this.preview.div_b)
	text.setAlignment(Text.LEFT)
	text.setText("Test Model")
	text.position.set(10, 45)
	text.fit_content = true
	text.updateInterface()
	this.children.push(text)

	this.test_model = new DropdownList(this.preview.div_b)
	this.test_model.position.set(80, 35)
	this.test_model.size.set(150, 18)
	this.test_model.addValue("Sphere", 0)
	this.test_model.addValue("Torus", 1)
	this.test_model.addValue("Cube", 2)
	this.test_model.addValue("Torus Knot", 3)
	this.test_model.updateInterface()
	this.test_model.setOnChange(() => {
		var value = self.test_model.getSelectedIndex()

		// Sphere
		if (value === 0) {
			self.obj.geometry = new THREE.SphereBufferGeometry(1, 64, 64)
		}
		// Torus
		else if (value === 1) {
			self.obj.geometry = new THREE.TorusBufferGeometry(0.8, 0.4, 32, 64)
		}
		// Cube
		else if (value === 2) {
			self.obj.geometry = new THREE.BoxBufferGeometry(1, 1, 1, 64, 64, 64)
		}
		// Torus Knot
		else if (value === 3) {
			self.obj.geometry = new THREE.TorusKnotBufferGeometry(0.7, 0.3, 128, 64)
		}
	})
	this.children.push(this.test_model)

	// Sky enabled
	this.sky_enabled = new CheckBox(this.preview.div_b)
	this.sky_enabled.setText("Enable Sky")
	this.sky_enabled.size.set(200, 15)
	this.sky_enabled.position.set(5, 60)
	this.sky_enabled.setValue(true)
	this.sky_enabled.updateInterface()
	this.sky_enabled.setOnChange(() => {
		self.sky.visible = self.sky_enabled.getValue()
	})
	this.children.push(this.sky_enabled)

	//-------------------------------- Right Division resizable --------------------------------
	this.right = new DualDivisionResizable(this.main.div_b)
	this.right.orientation = DualDivisionResizable.VERTICAL
	this.right.tab_position = 0.5
	this.right.tab_position_min = 0.3
	this.right.tab_position_max = 0.5
	this.right.updateInterface()

	// Change right div aspect
	this.right.div_b.style.overflow = "hidden"
	this.right.div_b.style.cursor = "default"
	this.right.div_b.style.backgroundColor = Editor.theme.panel_color

	// Shaders
	this.fragmentShader = new CodeEditor(this.right.div_a)
	this.fragmentShader.setMode("glsl")
	this.fragmentShader.size.set(350, 250)
	this.fragmentShader.setOnChange(() => {
		if (self.material !== null) {
			self.material.fragmentShader = self.fragmentShader.getValue()
			self.material.needsUpdate = true
		}
	})

	this.vertexShader = new CodeEditor(this.right.div_b)
	this.vertexShader.setMode("glsl")
	this.vertexShader.size.set(320, 250)
	this.vertexShader.setOnChange(() => {
		if (self.material !== null) {
			self.material.vertexShader = self.vertexShader.getValue()
			self.material.needsUpdate = true
		}
	})

	this.parent.appendChild(this.element)
}

// Attach material to material editor
ShaderMaterialEditor.prototype.attachMaterial = function(material, material_file) {
	this.obj.material = material
	this.obj.visible = true

	// Store material file pointer
	if (material_file !== undefined) {
		this.material_file = material_file
	}

	this.fragmentShader.setValue(material.fragmentShader)
	this.vertexShader.setValue(material.vertexShader)

	// Store material
	this.material = material
}

// Activate this tab
ShaderMaterialEditor.prototype.activate = function() {
	Editor.setState(Editor.STATE_IDLE)
	Editor.resetEditingFlags()
	Mouse.canvas = this.canvas.element
}

// Remove element
ShaderMaterialEditor.prototype.destroy = function() {
	try {
		this.parent.removeChild(this.element)
	} catch(e) {}
}

// Remove element
ShaderMaterialEditor.prototype.updateMetadata = function(container) {
	if (this.material !== null) {
		var material = this.material

		// Set container name
		if (material.name !== undefined) {
			container.setName(material.name)
		}

		// Check if scene exists in program
		var found = false
		var materials = Editor.program.materials
		for(var i in materials) {
			if (materials[i].uuid === material.uuid) {
				found = true
				break;
			}
		}

		// If not found, close tab
		if (!found) {
			container.close()
		}
	}
}

// Update material editor
ShaderMaterialEditor.prototype.update = function() {
	// Update UI containers
	this.main.update()
	this.preview.update()
	this.right.update()

	// Render material
	if (this.material !== null) {
		// If needs update file metadata
		if (this.material.needsUpdate) {
			//this.material_file.updateMetadata()
			//this.material.needsUpdate = true
			Editor.updateAssetExplorer()
		}

		// Render scene
		this.renderer.render(this.scene, this.camera)
	}

	// Move material view
	if (Mouse.insideCanvas()) {
		// Rotate object
		if (Mouse.buttonPressed(Mouse.LEFT)) {
			var delta = new THREE.Quaternion()
			delta.setFromEuler(new THREE.Euler(Mouse.delta.y * 0.005, Mouse.delta.x * 0.005, 0, 'XYZ'))
			this.obj.quaternion.multiplyQuaternions(delta, this.obj.quaternion)
		}

		// Zoom
		this.camera.position.z += Mouse.wheel * 0.003

		if (this.camera.position.z > 5) {
			this.camera.position.z = 5
		} else if (this.camera.position.z < -1.5) {
			this.camera.position.z = -1.5
		}
	}
}

// Update division size
ShaderMaterialEditor.prototype.updateInterface = function() {
	// Fit parent
	if (this.fit_parent) {
		this.size.x = this.parent.offsetWidth
		this.size.y = this.parent.offsetHeight
	}

	// Set visibility
	if (this.visible) {
		this.element.style.visibility = "visible"
	} else {
		this.element.style.visibility = "hidden"
	}

	// Update main container
	this.main.visible = this.visible
	this.main.size.copy(this.size)
	this.main.updateInterface()

	// Update preview container
	this.preview.visible = this.visible
	this.preview.size.set(this.size.x * this.main.tab_position, this.size.y)
	this.preview.updateInterface()

	// Update right
	this.right.visible = this.visible
	this.right.size.set(this.size.x * this.main.tab_position, this.size.y)
	this.right.updateInterface()

	// Update code editors
	this.fragmentShader.size.set(this.right.size.x, this.right.size.y)
	this.fragmentShader.visible = this.visible
	this.fragmentShader.updateInterface()
	this.vertexShader.size.set(this.right.size.x, this.right.size.y)
	this.vertexShader.visible = this.visible
	this.vertexShader.updateInterface()

	// Update canvas
	this.canvas.visible = this.visible
	this.canvas.size.set(this.preview.div_a.offsetWidth, this.preview.div_a.offsetHeight)
	this.canvas.updateInterface()

	// Update renderer and canvas
	this.renderer.setSize(this.canvas.size.x, this.canvas.size.y)
	this.camera.aspect = this.canvas.size.x/this.canvas.size.y
	this.camera.updateProjectionMatrix()

	// Update children
	for(var i = 0; i < this.children.length; i++) {
		this.children[i].visible = this.visible
		this.children[i].updateInterface()
	}

	// Update element
	this.element.style.top = this.position.y + "px"
	this.element.style.left = this.position.x + "px"
	this.element.style.width = this.size.x + "px"
	this.element.style.height = this.size.y + "px"
}

ShaderMaterialEditor.id = 0
