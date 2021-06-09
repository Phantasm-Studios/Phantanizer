"use strict";

function ObjectUtils(){}

// Get all fonts in object and children
ObjectUtils.getFonts = function(obj, fonts) {
	if (fonts === undefined) {
		fonts = []
	}

	obj.traverse((child) => {
		if (child.font instanceof Font) {
			if (fonts[child.font.uuid] === undefined) {
				fonts[child.font.uuid] = child.font
			}
		}
	})

	return fonts
}

// Get all audio files in object and children
ObjectUtils.getAudio = function(obj, audio) {
	if (audio === undefined) {
		audio = []
	}

	obj.traverse((child) => {
		if (child.audio instanceof Audio) {
			if (audio[child.audio.uuid] === undefined) {
				audio[child.audio.uuid] = child.audio
			}
		}
	})

	return audio
}

//Get all materials in object and children
ObjectUtils.getMaterials = function(obj, materials) {
	//Auxiliar function to add materials
	function add(material) {
		if(materials[material.uuid] === undefined)
		{
			materials[material.uuid] = material;
		}
	}

	//If undefined create new array to store materials
	if(materials === undefined)
	{
		materials = [];
	}

	// Traverse obj children
	obj.traverse((child) => {
		// Check if child has material
		if(!(child.material === undefined || child.hidden || child instanceof Sky || child instanceof SpineAnimation)) {
            if(child.material instanceof THREE.Material)
			{
				add(child.material);
			}
			else if(child.material instanceof THREE.MultiMaterial)
			{
				var material_array = child.material.materials;

				for(var j = 0; j < material_array.length; j++)
				{
					add(material_array[j]);
				}
			}

            if(child.materials !== undefined) {
                for(var j = 0; j < child.materials.length; i++) {
                    add(child.materials[j])
                }
            }
		}
	})

	return materials;
}

//Get all textures in object and children
ObjectUtils.getTextures = function(obj, textures) {
	// Auxiliar function to add textures
	function add(texture) {
		if(texture != null)
		{
			if(textures[texture.uuid] === undefined) {
				textures[texture.uuid] = texture;
			}
		}
	}

	// If undefined create new array to store materials
	if(textures === undefined)
	{
		textures = [];
	}

	// Add textures from children
    obj.traverse((child) => {
		if(child.material !== undefined)
		{
			var material = child.material;
			
			add(material.map)
			add(material.bumpMap)
			add(material.normalMap)
			add(material.displacementMap)
			add(material.specularMap)
			add(material.emissiveMap)
			add(material.alphaMap)
			add(material.roughnessMap)
			add(material.metalnessMap)
		}
		else if(child instanceof ParticleEmitter)
		{
			add(child.group.texture);
		}
	})

	return textures;
}

//Get object scene
ObjectUtils.getScene = function(obj)
{
	var node = obj;

	while(node.parent !== null)
	{
		node = node.parent;
		if(node instanceof Scene)
		{
			return node;
		}
	}

	return null;
}

//Get object tree root
ObjectUtils.getRoot = function(obj)
{
	var node = obj;
	
	while(node.parent !== null)
	{
		node = node.parent;
	}

	return node;
}

// Set matrix auto update value
ObjectUtils.setMatrixAutoUpdate = function(obj, value)
{
	obj.traverse((child) => {
		child.matrixAutoUpdate = value
	})
}

//Set shadow receiving
ObjectUtils.setShadowReceiving = function(obj, value)
{
	obj.traverse((child) => {
		child.receiveShadow = value
	})
}

// Set shadow casting
ObjectUtils.setShadowCasting = function(obj, value)
{
	obj.traverse((child) => {
		child.castShadow = value
	})
}

//Check if object is child of another object
ObjectUtils.isChildOf = function(parent, child)
{
	for(var i = 0; i < parent.children.length; i++)
	{
		if(parent.children[i] === child || ObjectUtils.isChildOf(parent.children[i], child))
		{
			return true;
		}
	}
	return false;
}
