"use strict"

//Scene constructor
function Scene()
{
	THREE.Scene.call(this)

	this.name = "scene"
	
	this.matrixAutoUpdate = false

	// Physics world
	this.world = new CANNON.World()
	this.world.defaultContactMaterial.contactEquationStiffness = 1e9
	this.world.defaultContactMaterial.contactEquationRelaxation = 4
	this.world.quatNormalizeSkip = 0
	this.world.quatNormalizeFast = false
	this.world.gravity.set(0, -9.8, 0)
	this.world.broadphase = new CANNON.NaiveBroadphase()
	this.world.solver = new CANNON.SplitSolver(new CANNON.GSSolver())
	this.world.solver.tolerance = 0.1
	this.world.solver.iterations = 7

	// Runtime objects
	this.clock = new THREE.Clock()
	this.raycaster = new THREE.Raycaster()

	// Cameras in use
	this.cameras = []

	// Renderer canvas

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new SceneComponent())
}

Scene.prototype = Object.create(THREE.Scene.prototype)

//Initialize
Scene.prototype.initialize = function()
{
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].initialize()
	}

	this.canvas = this.parent.renderer.domElement
}

//Update scene
Scene.prototype.update = function()
{
	var mouse = new Vector2(Mouse.position.x/this.canvas.width * 2 - 1, -2 * Mouse.position.y / this.canvas.height + 1)

	// for(var i = 0; i < this.cameras.length; i++) {
		// this.raycaster.setFromCamera(mouse, this.cameras[i])
		// this.raycaster.intersectObjects(this.children, true)
	// }

	if (this.cameras.length > 0) {
		this.raycaster.setFromCamera(mouse, this.cameras[0])
	}

	this.world.step(this.clock.getDelta())
	
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].update()
	}
}

// Get camera from scene using its uuid
Scene.prototype.getCamera = function(uuid, obj)
{
	if(obj === undefined)
	{
		obj = this
	}

	if(uuid === obj.uuid)
	{
		return obj
	}

	var children = obj.children

	for(var i = 0; i < children.length; i++)
	{
		var camera = this.getCamera(uuid, children[i])
		if(camera !== null)
		{
			return camera
		}
	}

	return null
}

// Add camera
Scene.prototype.addCamera = function(camera) {
	this.cameras.push(camera)
}

// Remove camera
Scene.prototype.removeCamera = function(camera) {
	var index = this.cameras.indexOf(camera)
	if (index > -1) {
		this.cameras.splice(index, 1)
	}
}

//Set fog mode
Scene.prototype.setFogMode = function(mode)
{
	var colour = (this.fog !== null) ? this.fog.color.getHex() : "#FFFFFF"

	if (mode === THREE.Fog.LINEAR) {
		this.fog = new THREE.Fog(colour, 5, 20)
	} else if (mode === THREE.Fog.EXPONENTIAL) {
		this.fog = new THREE.FogExp2(colour, 0.01)
	} else if (mode === THREE.Fog.NONE) {
		this.fog = null
	}
}

//Create JSON for object
Scene.prototype.toJSON = function(meta)
{
	var data = THREE.Scene.prototype.toJSON.call(this, meta)

	// Background color
	if(this.background !== null)
	{
		data.object.background = this.background
	}

	// Initial Camera
	data.object.cameras = []

	for(var i = 0; i < this.cameras.length; i++) {
		data.object.cameras.push(this.cameras[i].uuid)
	}

	//Physics World
	data.object.world = {}
	data.object.world.gravity = this.world.gravity
	data.object.world.quatNormalizeSkip = this.world.quatNormalizeSkip
	data.object.world.quatNormalizeFast = this.world.quatNormalizeFast

	data.object.world.solver = {}
	data.object.world.solver.tolerance = this.world.solver.tolerance
	data.object.world.solver.iterations = this.world.solver.iterations

	return data
}
