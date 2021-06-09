"use strict"

function DirectionalLight(hex, intensity)
{
	THREE.DirectionalLight.call(this, hex, intensity)

	this.name = "directional_light"
	
	this.castShadow = true
	
	this.shadow.camera.near = 0.5
	this.shadow.camera.far = 10000

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
	this.defaultComponents.push(new ObjectComponent())
	this.defaultComponents.push(new LightComponent())
}

//Function Prototype
DirectionalLight.prototype = Object.create(THREE.DirectionalLight.prototype)

//Update ligth shadow map
DirectionalLight.prototype.updateShadowMap = function()
{
	this.shadow.map.dispose()
	this.shadow.map = null

	this.shadow.camera.updateProjectionMatrix()
}