"use strict"

function SpotLight(hex, intensity, distance, angle, exponent, decay)
{
	THREE.SpotLight.call(this, hex, intensity, distance, angle, exponent, decay)

	this.name = "spot_light"
	
	this.castShadow = true

	this.shadow.camera.near = 0.5
	this.shadow.camera.far = 5000
	this.shadow.mapSize.width = 512
	this.shadow.mapSize.height = 512

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
	this.defaultComponents.push(new ObjectComponent())
	this.defaultComponents.push(new LightComponent())
}

//Function Prototype
SpotLight.prototype = Object.create(THREE.SpotLight.prototype)

//Update ligth shadow map
SpotLight.prototype.updateShadowMap = function()
{
	this.shadow.map.dispose()
	this.shadow.map = null

	this.shadow.camera.updateProjectionMatrix()
}