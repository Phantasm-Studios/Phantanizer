"use strict"

function ParticleEditor(parent) {
	// Parent
    this.parent = (parent !== undefined) ? parent : document.body

	// ID
	var id = "particle_editor" + ParticleEditor.id
	ParticleEditor.id++

	Register.unregisterAll()
	Register.registerParticlesNodes()

	// Create Element
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
	this.main.tab_position_max = 0.5
	this.main.updateInterface()

	// Change main div aspect
	this.main.div_b.style.overflow = "hidden"
	this.main.div_b.style.cursor = "default"
	this.main.div_b.style.backgroundColor = Editor.theme.panel_color

	// Self pointer
	var self = this

	//---------------------------- Particle preview ----------------------------
	// Canvas
	this.canvas = new Canvas(this.main.div_a)
	this.canvas.updateInterface()

	// Element attributes
	this.children = []
	this.fit_parent = false
	this.size = new THREE.Vector2(0, 0)
	this.position = new THREE.Vector2(0, 0)
	this.visible = true

	// Particle renderer and scene
	this.renderer = new THREE.WebGLRenderer({canvas: this.canvas.element, antialias: Settings.render.antialiasing})
	this.renderer.setSize(this.canvas.size.x, this.canvas.size.y)
	this.renderer.shadowMap.enabled = false

	// Particle preview scene
	this.scene = new Scene()
	this.scene.add(new AmbientLight(0xffffff))
	var grid = new THREE.GridHelper(50, 50, 0x888888)
	grid.material.depthWrite = false
	this.scene.add(grid)
	var axis = new THREE.AxisHelper(50)
	axis.material.depthWrite = false
	this.scene.add(axis)

	// particle
	this.particle = null
	this.nodes = null
	this.particle_runtime = null

	// Camera
	this.camera = new PerspectiveCamera(90, this.canvas.size.x/this.canvas.size.y)
	this.camera_rotation = new THREE.Vector2(0, 0.5)
	this.camera_distance = 5
	this.updateCamera()

	//---------------------------- Particle editor ----------------------------
	// Graph editor
	this.graphEditor = new Canvas(this.main.div_b)
	this.graphEditor.updateInterface()
	this.graph = null

	this.parent.appendChild(this.element)
}
ParticleEditor.id = 0

// Update container object data
ParticleEditor.prototype.updateMetadata = function(container) {
	if (this.particle !== null) {
		var particle = this.particle

		// Set container name
		container.setName(particle.name)

		// Check if particle exists in program
		var found = false
		Editor.program.traverse((obj) => {
			if (obj.uuid === particle.uuid) {
				found = true
			}
		})

		// If not found, close tab
		if (!found) {
			container.close()
		}
	}
}

// Attach particle to particle editor
ParticleEditor.prototype.attachParticle = function(particle) {
	// Attach particle
	this.particle = particle
	this.nodes = this.particle.nodes
	this.updateRuntimeParticle()
	this.initNodeEditor()
}

// Initialiase node editor
ParticleEditor.prototype.initNodeEditor = function() {
	this.nodes.extra = {}
	this.nodes.extra.particles = this.particle

	console.log(this.particle)

	this.graph = new LGraph(this.nodes)

	var self = this
	this.graph.onNodeConnectionChange = function() {
		setTimeout(() => {
			self.updateRuntimeParticle()
		}, 100)
	}

	LiteGraph.NODE_TITLE_COLOR = "#FFF"
	LiteGraph.NODE_TITLE_HEIGHT = 20
	LiteGraph.NODE_TITLE_TEXT_Y = 15

	this.graphCanvas = new LGraphCanvas(this.graphEditor.element, this.graph)
	this.graphCanvas.use_gradients = true
	this.graphCanvas.title_text_font = "bold 10px Verdana,Arial,sans serif"
	this.graph.start(1000/60)
}

// Updates runtime particle to match attached particles
ParticleEditor.prototype.updateRuntimeParticle = function() {
	if (this.particle !== null) {
		if (this.particle_runtime !== null) {
			this.scene.remove(this.particle_runtime)
		}

		this.particle_runtime = new ObjectLoader().parse(this.particle.toJSON())
		this.particle_runtime.scale.set(1, 1, 1)
		this.particle_runtime.position.set(0, 0, 0)
		this.particle_runtime.rotation.set(0, 0, 0)
		this.particle_runtime.initialize()
		this.scene.add(this.particle_runtime)
	}
}

// Update camera and rotation from variables
ParticleEditor.prototype.updateCamera = function() {
	// Calculate direction vector
	var cos_angle_y = Math.cos(this.camera_rotation.y)
	var position = new THREE.Vector3(this.camera_distance * Math.cos(this.camera_rotation.x) * cos_angle_y, this.camera_distance * Math.sin(this.camera_rotation.y), this.camera_distance * Math.sin(this.camera_rotation.x) * cos_angle_y)
	this.camera.position.copy(position)
	this.camera.lookAt(new THREE.Vector3(0, 0, 0))
}

// Activate code editor
ParticleEditor.prototype.activate = function() {

	// Set editor state
	Editor.setState(Editor.STATE_IDLE)
	Editor.resetEditingFlags()

	// Set mouse canvas
	Mouse.setCanvas(this.canvas.element)
}

// Remove element
ParticleEditor.prototype.destroy = function() {
	try {
		this.parent.removeChild(this.element)
	} catch (e) {}
}

// On close
ParticleEditor.prototype.close = function() {
	if (this.graph !== null) {
		this.graph.stop()

		this.nodes.extra = {}

		this.particle.updateNodes(this.graph.serialize())
	}
}

// Update particle editor
ParticleEditor.prototype.update = function() {
	// Main division
	this.main.update()

	// Get mouse input
	if (Mouse.insideCanvas()) {
		// Move camera
		if (Mouse.buttonPressed(Mouse.LEFT)) {
			this.camera_rotation.x -= 0.003 * Mouse.delta.x
			this.camera_rotation.y -= 0.003 * Mouse.delta.y

			// Limit Vertical Rotation to 90 degrees
			var pid2 = 1.57
			if (this.camera_rotation.y < -pid2) {
				this.camera_rotation.y = -pid2
			} else if (this.camera_rotation.y > pid2) {
				this.camera_rotation.y = pid2
			}
		}

		// Camera zoom
		this.camera_distance += Mouse.wheel * 0.005
		if (this.camera_distance < 0.1) {
			this.camera_distance = 0.1
		}

		this.updateCamera()
	}

	// Update particle and render
	if (this.particle_runtime !== null) {
		this.particle_runtime.update()
	}

	// Render editor scene
	this.renderer.render(this.scene, this.camera)
}

// Update division size
ParticleEditor.prototype.updateInterface = function() {
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

	// Update canvas
	this.canvas.visible = this.visible
	this.canvas.size.set(this.main.div_a.offsetWidth, this.main.div_a.offsetHeight)
	this.canvas.updateInterface()

	// Update graph editor
	this.graphEditor.visible = this.visible
	this.graphEditor.size.set(this.main.div_b.offsetWidth, this.main.div_b.offsetHeight)
	this.graphEditor.updateInterface()

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
