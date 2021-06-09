"use strict"

function MaterialEditor(parent) {
	// Parent
    this.parent = (parent !== undefined) ? parent : document.body

	// id
	var id = "material_editor" + MaterialEditor.id
	MaterialEditor.id++

	Register.unregisterAll()
	Register.registerMaterialNodes()

	// Create element
	this.element = document.createElement("div")
	this.element.id = id
	this.element.style.position = "absolute"

	this.element.ondrop = function(event)
	{
		event.preventDefault()
	}

	this.element.ondragover = function(event)
	{
		event.preventDefault()
	}

	// Self pointer
	var self = this

	// Graph canvas
	this.graph_canvas = new Canvas(this.element)
	this.graph_canvas.updateInterface()

	// Canvas
	this.canvas = new Canvas(this.element)
	this.canvas.updateInterface()

	this.graph = null

	// Element atributes
	this.children = []
	this.fit_parent = false
	this.size = new THREE.Vector2(0,0)
	this.position = new THREE.Vector2(0,0)
	this.visible = true
	
	// Material UI File element
	this.material_file = null

	// Attached material
	this.material = null
	this.nodes = null

	// Material renderer and scene
	this.renderer = new THREE.WebGLRenderer({canvas: this.canvas.element, alpha: true})
	this.renderer.setSize(this.canvas.size.x, this.canvas.size.y)

	// Material camera
	this.camera = new PerspectiveCamera(90, this.canvas.size.x/this.canvas.size.y)

	// Material preview scene
	this.scene = new Scene()
	this.scene.add(new PointLight(0x666666))
	this.scene.add(new AmbientLight(0x555555))
	this.obj = new Mesh(new THREE.SphereBufferGeometry(1, 64, 64), null)
	this.obj.position.set(0, 0, -2.5)
	this.obj.visible = false
	this.scene.add(this.obj)
	this.sprite = new Sprite(null)
	this.sprite.position.set(0, 0, -1.5)
	this.sprite.visible = false
	this.scene.add(this.sprite)

	// Add element to document
	this.parent.appendChild(this.element)
}

// Material editor counter
MaterialEditor.id = 0

// Attach material to material editor
MaterialEditor.prototype.attachMaterial = function(material, material_file) {
	// Check is if sprite material and ajust preview
	if(material instanceof THREE.SpriteMaterial) {
		this.sprite.material = material
		this.sprite.visible = true
		this.obj.visible = false
	} else {
		this.obj.material = material
		this.obj.visible = true
		this.sprite.visible = false
	}

	// Store material file pointer
	if(material_file !== undefined) {
		this.material_file = material_file
	}

	// Store material
	this.material = material

	// The default material nodes
	this.defaultNodes = {
		config: {},
		groups: [],
		last_link_id: 0,
		last_node_id: 1,
		links: [],
		nodes: [
			{
				flags: {},
				id: 1,
				mode: 0,
				inputs: [],
				outputs: [],
				pos: [208, 140],
				properties: {
					reflectivity: (this.material.reflectivity !== undefined) ? this.material.reflectivity : 0,
					shininess: (this.material.shininess !== undefined) ? this.material.shininess : 0,
					wireframe: (this.material.wireframe !== undefined) ? this.material.wireframe : false,
					depthwrite: (this.material.depthWrite !== undefined) ? this.material.depthWrite : false,
					transparent: (this.material.transparent !== undefined) ? this.material.transparent : false,
					opacity: (this.material.opacity !== undefined) ? this.material.opacity : 0,
					abf: (this.material.fog !== undefined) ? this.material.fog : false
				},
				size: [210, 382],
				type: "Material/Material"
			}
		],
		version: 0.4
	}

	if(JSON.stringify(this.material.nodes) === "{}") {
		this.nodes = this.defaultNodes
		
		if (this.material instanceof MeshShaderMaterial) {
			this.nodes.nodes.push({
				flags: {},
				id: 2,
				// TODO: Uniforms
				inputs: [],
				order: 1,
				pos: [502, 141],
				properties: {},
				type: "Material/Shader"
			})
		}
		
	} else {
		this.nodes = this.material.nodes
	}

	this.initNodeEditor()
}

// Initialise node editor
MaterialEditor.prototype.initNodeEditor = function() {

	this.nodes.extra = {}
	this.nodes.extra.material = this.material
	this.nodes.extra.file = this.material_file

	this.graph = new LGraph(this.nodes)

	var self = this
	this.graph.onNodeConnectionChange = function() {
		self.material.needsUpdate = true
	}

	LiteGraph.NODE_TITLE_COLOR = "#FFF"
	LiteGraph.NODE_TITLE_HEIGHT = 20
	LiteGraph.NODE_TITLE_TEXT_Y = 15
	
	this.graphCanvas = new LGraphCanvas(this.graph_canvas.element, this.graph)
	this.graphCanvas.use_gradients = true
	this.graphCanvas.title_text_font = "bold 10px Verdana,Arial,sans serif"
	this.graph.start(1000/60)
}

// Activate material editor
MaterialEditor.prototype.activate = function() {
	Editor.setState(Editor.STATE_IDLE)
	Mouse.setCanvas(this.canvas.element)
	Editor.resetEditingFlags()
}

// Remove element
MaterialEditor.prototype.destroy = function() {
	try {
		this.parent.removeChild(this.element)
	}
	catch(e){}
}

// On close
MaterialEditor.prototype.close = function() {
	if (this.graph !== null) {
		this.graph.stop()
		delete this.graph.extra

		this.material.updateNodes(this.graph.serialize())
	}
}

//Update container object data
MaterialEditor.prototype.updateMetadata = function(container) {
	if(this.material !== null) {
		var material = this.material

		// Set container name
		if(material.name !== undefined) {
			container.setName(material.name)
		}

		// Check if scene exists in program
		var found = false
		var materials = Editor.program.materials
		for(var i in materials) {
			if(materials[i].uuid === material.uuid) {
				found = true
				break
			}
		}

		// If not found close tab
		if(!found) {
			container.close()
		}
	}
}

// Update the attached material
MaterialEditor.prototype.updateMaterial = function() {
	// this.material_file.updateMetadata()
	Editor.updateAssetExplorer()

	if (this.nodes.nodes !== undefined) {
		for(var i = 0; i < this.nodes.nodes.length; i++) {
			if (this.nodes.nodes[i].type === "Material/MeshPhongMaterial") {
				this.material.setValues(this.graph.extra.material)
			}
		}
	}

	this.obj.material = this.material

	this.material.updateNodes(this.graph.serialize())
}

// Update material editor
MaterialEditor.prototype.update = function() {
	// Render Material
	if(this.material !== null) {
		if(this.material.needsUpdate) {
			this.updateMaterial()
		}

		// Render scene
		this.renderer.render(this.scene, this.camera);
	}

	// Move material view
	if(Mouse.insideCanvas()) {
		// Rotate object
		if(Mouse.buttonPressed(Mouse.LEFT)) {
			var delta = new THREE.Quaternion()
			delta.setFromEuler(new THREE.Euler(Mouse.delta.y * 0.005, Mouse.delta.x * 0.005, 0, 'XYZ'))
			this.obj.quaternion.multiplyQuaternions(delta, this.obj.quaternion)
		}

		// Change Geometry
		if (Mouse.buttonJustPressed(Mouse.RIGHT)) {
			if (this.obj.geometry instanceof THREE.SphereBufferGeometry)
				this.obj.geometry = new THREE.TorusBufferGeometry(0.8, 0.4, 32, 64)
			else if (this.obj.geometry instanceof THREE.TorusBufferGeometry)
				this.obj.geometry = new THREE.BoxBufferGeometry(1, 1, 1, 64, 64, 64)
			else if (this.obj.geometry instanceof THREE.BoxBufferGeometry)
				this.obj.geometry = new THREE.TorusKnotBufferGeometry(0.7, 0.3, 128, 64)
			else if (this.obj.geometry instanceof THREE.TorusKnotBufferGeometry)
				this.obj.geometry = new THREE.SphereBufferGeometry(1, 64, 64)
		}

		// Zoom
		this.camera.position.z += Mouse.wheel * 0.003
		if(this.camera.position.z > 5) {
			this.camera.position.z = 5
		} else if(this.camera.position.z < -1.5) {
			this.camera.position.z = -1.5
		}
	}
}

// Update division Size
MaterialEditor.prototype.updateInterface = function() {
	// Fit parent
	if(this.fit_parent) {
		this.size.x = this.parent.offsetWidth
		this.size.y = this.parent.offsetHeight
	}
	
	// Set visibility
	if(this.visible) {
		this.element.style.visibility = "visible"
	} else {
		this.element.style.visibility = "hidden"
	}

	// Update graph canvas
	this.graph_canvas.visible = this.visible
	this.graph_canvas.size.set(this.size.x, this.size.y)
	this.graph_canvas.updateInterface()

	// Update canvas
	this.canvas.visible = this.visible
	this.canvas.size.set(200, 200)
	this.canvas.updateInterface()

	// Update renderer and canvas
	this.renderer.setSize(this.canvas.size.x, this.canvas.size.y)
	this.camera.aspect = this.canvas.size.x/this.canvas.size.y
	this.camera.updateProjectionMatrix()
}
