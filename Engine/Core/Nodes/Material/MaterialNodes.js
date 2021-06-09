function MaterialNode() {
	this.addInput("Colour", "color", {...NodesHelper.slots.color, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})
	this.addInput("Emissive", "color", {...NodesHelper.slots.color, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})
	this.addInput("Reflectivity", "number", {...NodesHelper.slots.number, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_third]})
	this.addInput("Shininess", "number", {...NodesHelper.slots.number, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_fourth]})
	this.addInput("Specular", "color", {...NodesHelper.slots.color, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_fifth]})
	this.addInput("Wireframe", "bool", {...NodesHelper.slots.bool, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_sixth]})
	this.addInput("Transparent", "bool", {...NodesHelper.slots.bool, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_seventh]})
	this.addInput("Opacity", "number", {...NodesHelper.slots.number, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_eighth]})
	this.addInput("Affected By Fog", "bool", {...NodesHelper.slots.bool, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_ninth]})

	this.serialize_widgets = true

	this.properties = {
		reflectivity: 1,
		shininess: 30,
		wireframe: false,
		depthwrite: false,
		transparent: false,
		opacity: 1,
		abf: true
	}

	var self = this

	this.widget1 = this.addWidget("slider", "Reflectivity", this.properties.reflectivity, (v) => {self.properties.reflectivity = v}, {value: this.properties.reflectivity, min: 0, max: 1, text: "R"})
	this.widget2 = this.addWidget("slider", "Shininess", this.properties.shininess, (v) => {self.properties.shininess = v}, {value: this.properties.shininess, min: 0, max: 100, text: "S"})

	this.addWidget("toggle", "Wireframe", this.properties.wireframe, "wireframe")
	this.addWidget("toggle", "Depth Write", this.properties.depthwrite, "depthwrite")
	this.addWidget("toggle", "Transparent", this.properties.transparent, "transparent")

	this.widget3 = this.addWidget("slider", "Opacity", this.properties.opacity, (v) => {self.properties.opacity = v}, {value: this.properties.opacity, min: 0, max: 1})

	this.addWidget("toggle", "Affected By Fog", this.properties.abf, "abf")
}
MaterialNode.title = "Material"
MaterialNode.title_color = NodesHelper.titles.material
MaterialNode.collapsable = false
MaterialNode.skip_list = true
MaterialNode.prototype.resizable = false
MaterialNode.prototype.onPropertyChanged = function(n, v) {
	if (this.graph && this.graph.onNodeConnectionChange) {
		this.graph.onNodeConnectionChange()
	}

	if (n === "reflectivity") {
		if (this.widget1 !== undefined) {
			this.widget1.value = v
		}
	} else if (n === "shininess") {
		if (this.widget2 !== undefined) {
			this.widget2.value = v
		}
	} else if (n === "opacity") {
		if (this.widget3 !== undefined) {
			this.widget3.value = v
		}
	}
}
MaterialNode.prototype.onExecute = function() {
	if (this.graph.extra !== undefined) {
		var mat = this.graph.extra.material
		mat.nodes
	}

	if (mat !== undefined) {
		var c = this.getInputData(0)
		var e = this.getInputData(1)
		var r = this.getInputData(2)
		var s = this.getInputData(3)
		var s1 = this.getInputData(4)
		var w = this.getInputData(5)
		var dw = this.getInputData(6)
		var tr = this.getInputData(7)
		var op = this.getInputData(8)
		var abf = this.getInputData(9)

		if (c !== undefined)
			mat.color = c

		if (e !== undefined)
			mat.emissive = e

		if (r !== undefined)
			mat.reflectivity = r
		else
			mat.reflectivity = this.properties.reflectivity

		if (s !== undefined)
			mat.shininess = s
		else
			mat.shininess = this.properties.shininess

		if (s1 !== undefined)
			mat.specular = s1

		if (w !== undefined)
			mat.wireframe = w
		else
			mat.wireframe = this.properties.wireframe

		if (dw !== undefined)
			mat.depthWrite = dw
		else
			mat.depthWrite = this.properties.depthwrite

		if (tr !== undefined)
			mat.transparent = tr
		else
			mat.transparent = this.properties.transparent

		if (op !== undefined)
			mat.opacity = op
		else
			mat.opacity = this.properties.opacity

		if (abf !== undefined)
			mat.fog = abf
		else
			mat.fog = this.properties.abf
	}
}

function MaterialSideNode() {
	this.serialize_widgets = true
	this.properties = {side: THREE.FontSide, sides: "Front;Back;Double", sideStr: ""}

	this.side = ""
	this.sides = this.properties.sides.split(";")
}
MaterialSideNode.title = "Side"
MaterialSideNode.title_color = NodesHelper.titles.material
MaterialSideNode.collapsable = true
MaterialSideNode.prototype.resizable = false
MaterialSideNode.prototype.onAdded = function() {
	var self = this

	this.properties.side = this.graph.extra.material.side

	if (this.properties.side === THREE.FrontSide)
		this.side = "Front"
	else if (this.properties.side === THREE.BackSide)
		this.side = "Back"
	else if (this.properties.side === THREE.DoubleSide)
		this.side = "Double"

	this.combo = this.addWidget("combo", "Side", this.side, (v) => {self.properties.sideStr = v}, {values: this.sides, property: "sideStr"})
	this.combo.width = 160

	this.size = [160, 30]
}
MaterialSideNode.prototype.onPropertyChanged = function(n, v) {

	var mat = this.graph.extra.material

	if (n === "sideStr") {
		if (v === "Front")
			mat.side = THREE.FrontSide
		else if (v === "Back")
			mat.side = THREE.BackSide
		else if (v === "Double")
			mat.side = THREE.DoubleSide
	}

	if (this.graph && this.graph.onNodeConnectionChange) {
		this.graph.onNodeConnectionChange()
	}
}

function MaterialDepthTestNode() {
	this.serialize_widgets = true

	this.properties = {test: false}
}
MaterialDepthTestNode.title = "Depth Test"
MaterialDepthTestNode.title_color = NodesHelper.titles.material
MaterialDepthTestNode.collapsable = true
MaterialDepthTestNode.prototype.resizable = false
MaterialDepthTestNode.prototype.onAdded = function() {
	this.properties.test = this.graph.extra.material.depthTest

	var t = this.addWidget("toggle", "Depth Test", this.properties.test, "test")
	t.width = 160

	this.size = [160, 30]
}
MaterialDepthTestNode.prototype.onPropertyChanged = function(n, v) {

	this.graph.extra.material.depthTest = v

	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function MaterialAlphaTestNode() {
	this.serialize_widgets = true
	this.properties = {test: false}
}
MaterialAlphaTestNode.title = "Alpha Test"
MaterialAlphaTestNode.title_color = NodesHelper.titles.material
MaterialAlphaTestNode.collapsable = true
MaterialAlphaTestNode.prototype.resizable = false
MaterialAlphaTestNode.prototype.onAdded = function() {
	this.properties.test = this.graph.extra.material.alphaTest

	var t = this.addWidget("toggle", "Alpha Test", this.properties.test, "test")
	t.width = 160

	this.size = [160, 30]
}
MaterialAlphaTestNode.prototype.onPropertyChanged = function(n, v) {
	this.graph.extra.material.alphaTest = v

	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function MaterialBlendingModeNode() {
	this.serialize_widgets = true
	this.properties = {blending: THREE.NoBlending, modes: "None;Normal;Additive;Subtractive;Multiply", blendingStr: ""}

	this.blending = ""
	this.modes = this.properties.modes.split(";")
}
MaterialBlendingModeNode.title = "Blending Mode"
MaterialBlendingModeNode.title_color = NodesHelper.titles.material
MaterialBlendingModeNode.collapsable = true
MaterialBlendingModeNode.prototype.resizable = false
MaterialBlendingModeNode.prototype.onAdded = function() {
	var self = this

	this.properties.blending = this.graph.extra.material.blending

	if (this.properties.blending === THREE.NoBlending)
		this.blending = "None"
	else if (this.properties.blending === THREE.NormalBlending)
		this.blending = "Normal"
	else if (this.properties.blending === THREE.AdditiveBlending)
		this.blending = "Additive"
	else if (this.properties.blending === THREE.SubtractiveBlending)
		this.blending = "Subtractive"
	else if (this.properties.blending === THREE.MultiplyBlending)
		this.blending = "Multiply"

	this.combo = this.addWidget("combo", "Blending", this.blending, (v) => {self.properties.blendingStr = v}, {values: this.modes, property: "blendingStr"})
	this.combo.width = 200

	this.size = [200, 30]
}
MaterialBlendingModeNode.prototype.onPropertyChanged = function(n, v) {
	var mat = this.graph.extra.material

	if (n === "blendingStr")
		if (v === "None")
			mat.blending = THREE.NoBlending
		else if (v === "Normal")
			mat.blending = THREE.NormalBlending
		else if (v === "Additive")
			mat.blending = THREE.AdditiveBlending
		else if (v === "Subtractive")
			mat.blending = THREE.SubtractiveBlending
		else if (v === "Multiply")
			mat.blending = THREE.MultiplyBlending

	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function MaterialSkinningNode() {
	this.serialize_widgets = true
	this.properties = {skinning: false}
}
MaterialSkinningNode.title = "Skinning"
MaterialSkinningNode.title_color = NodesHelper.titles.material
MaterialSkinningNode.collapsable = true
MaterialSkinningNode.prototype.resizable = false
MaterialSkinningNode.prototype.onAdded = function() {
	this.properties.skinning = this.graph.extra.material.skinning

	var t = this.addWidget("toggle", "Skinning", this.properties.skinning, "skinning")
	t.width = 160

	this.size = [160, 30]
}
MaterialSkinningNode.prototype.onPropertyChanged = function() {
	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function MaterialMorphTargetsNode() {
	this.serialize_widgets = true
	this.properties = {morphTargets: false}
}
MaterialMorphTargetsNode.title = "Morph Targets"
MaterialMorphTargetsNode.title_color = NodesHelper.titles.material
MaterialMorphTargetsNode.collapsable = true
MaterialMorphTargetsNode.prototype.resizable = false
MaterialMorphTargetsNode.prototype.onAdded = function() {
	this.properties.morphTargets = this.graph.extra.material.morphTargets

	var t = this.addWidget("toggle", "Morph Targets", this.properties.morphTargets, "morphTargets")
	t.width = 180

	this.size = [180, 30]
}
MaterialMorphTargetsNode.prototype.onPropertyChanged = function() {
	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function MaterialColourNode() {
	this.addInput("Colour", "color", {...NodesHelper.slots.color, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})
	this.size = [120, 26]
}
MaterialColourNode.title = "Colour"
MaterialColourNode.title_color = NodesHelper.titles.material
MaterialColourNode.collapsable = true
MaterialColourNode.prototype.resizable = false
MaterialColourNode.prototype.onAdded = function() {
	this.mat = this.graph.extra.material
}
MaterialColourNode.prototype.onExecute = function() {
	var c = this.getInputData(0)

	if (c === undefined)
		return

	this.mat.color = c
}

function MaterialMapNode() {
	this.addInput("Map", "texture", {...NodesHelper.slots.texture, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})
	this.size = [120, 26]
}
MaterialMapNode.title = "Map"
MaterialMapNode.title_color = NodesHelper.titles.material
MaterialMapNode.collapsable = true
MaterialMapNode.prototype.resizable = false
MaterialMapNode.prototype.onAdded = function() {
	this.mat = this.graph.extra.material
}
MaterialMapNode.prototype.onExecute = function() {
	var t = this.getInputData(0)

	if (t === undefined)
		return

	this.mat.map = t
}

function MaterialAlphaMapNode() {
	this.addInput("Alpha", "texture", {...NodesHelper.slots.texture, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})
	this.size = [120, 26]
}
MaterialAlphaMapNode.title = "Alpha Map"
MaterialAlphaMapNode.title_color = NodesHelper.titles.material
MaterialAlphaMapNode.collapsable = true
MaterialAlphaMapNode.prototype.resizable = false
MaterialAlphaMapNode.prototype.onAdded = function() {
	this.mat = this.graph.extra.material
}
MaterialAlphaMapNode.prototype.onExecute = function() {
	var t = this.getInputData(0)

	if (t === undefined)
		return

	this.mat.alphaMap = t
}

function MaterialShadingNode() {
	this.serialize_widgets = true
	this.properties = {shading: THREE.SmoothShading, shadings: "Smooth;Flat", shadingStr: ""}

	this.shading = ""
	this.shadings = this.properties.shadings.split(";")

	this.serialize_widgets = true
}
MaterialShadingNode.title = "Shading"
MaterialShadingNode.title_color = NodesHelper.titles.material
MaterialShadingNode.collapsable = true
MaterialShadingNode.prototype.resizable = false
MaterialShadingNode.prototype.onAdded = function() {
	var self = this

	this.properties.shading = this.graph.extra.material.shading

	if (this.properties.shading === THREE.SmoothShading)
		this.shading = "Smooth"
	else if (this.properties.shading === THREE.FlatShading)
		this.shading = "Flat"

	this.combo = this.addWidget("combo", "Shading", this.shading, (v) => {self.properties.shadingStr = v}, {values: this.shadings, property: "shadingStr"})
	this.combo.width = 180

	this.size = [180, 30]
}
MaterialShadingNode.prototype.onPropertyChanged = function(n, v) {
	var mat = this.graph.extra.material

	if (n === "shadingStr")
		if (v === "Smooth")
			mat.shading = THREE.SmoothShading
		else if (v === "Flat")
			mat.shading = THREE.FlatShading

	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function MaterialBumpMapNode() {
	this.properties = {scale: 0}

	this.addInput("Map", "texture", {...NodesHelper.slots.texture, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})

	this.serialize_widgets = true
}
MaterialBumpMapNode.title = "Bump"
MaterialBumpMapNode.title_color = NodesHelper.titles.material
MaterialBumpMapNode.collapsable = true
MaterialBumpMapNode.prototype.resizable = false
MaterialBumpMapNode.prototype.onAdded = function() {
	var self = this
	this.material = this.graph.extra.material

	this.properties.scale = (this.material.bumpScale !== undefined) ? this.material.bumpScale : 0
	this.addWidget("slider", "Scale", this.properties.scale, (v) => {self.properties.scale = v}, {min: 0, max: 1, property: "scale"})
}
MaterialBumpMapNode.prototype.onExecute = function() {
	var t = this.getInputData(0)

	if (t === undefined)
		return

	this.material.bumpMap = t
}
MaterialBumpMapNode.prototype.onPropertyChanged = function() {
	this.material.bumpScale = this.properties.scale

	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function MaterialNormalNode() {
	this.properties = {scalex: 1, scaley: 1}

	this.addInput("Map", "texture", {...NodesHelper.slots.texture, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})

	this.serialize_widgets = true
}
MaterialNormalNode.title = "Normal"
MaterialNormalNode.title_color = NodesHelper.titles.material
MaterialNormalNode.collapsable = true
MaterialNormalNode.prototype.resizable = false
MaterialNormalNode.prototype.onAdded = function() {
	var self = this
	this.material = this.graph.extra.material

	this.properties.scalex = this.material.normalScale.x
	this.properties.scaley = this.material.normalScale.y

	this.addWidget("number", "Scale X", this.properties.scalex, "scalex")
	this.addWidget("number", "Scale Y", this.properties.scaley, "scaley")
}
MaterialNormalNode.prototype.onExecute = function() {
	var t = this.getInputData(0)

	if (t === undefined)
		return

	this.material.normalMap = t
}
MaterialNormalNode.prototype.onPropertyChanged = function() {
	this.material.normalScale = new THREE.Vector2(this.properties.scalex, this.properties.scaley)

	if (this.graph && this.graph.onNodeConnectionChange)
		this.graph.onNodeConnectionChange()
}

function MaterialDisplacementMapNode() {
	this.properties = {scalex: 0, bias: 0}

	this.addInput("Map", "texture", {...NodesHelper.slots.texture, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})

	this.serialize_widgets = true
}
MaterialDisplacementMapNode.title = "Displacement"
MaterialDisplacementMapNode.title_color = NodesHelper.titles.material
MaterialDisplacementMapNode.collapsable = true
MaterialDisplacementMapNode.prototype.resizable = false
MaterialDisplacementMapNode.prototype.onAdded = function() {
	var self = this
	this.material = this.graph.extra.material

	this.properties.scale = (this.material.displacementScale !== undefined) ? this.material.displacementScale : 0
	this.properties.bias = (this.material.displacementBias !== undefined) ? this.material.displacementBias : 0

	this.addWidget("number", "Scale", this.properties.scale, "scale")
	this.addWidget("number", "Bias", this.properties.bias, "bias")
}
MaterialDisplacementMapNode.prototype.onExecute = function() {
	var t = this.getInputData(0)

	if (t === undefined)
		return

	this.material.displacementMap = t
}
MaterialDisplacementMapNode.prototype.onPropertyChanged = function(n, v) {
	if (n === "scale")
		this.material.displacementScale = new this.properties.scale
	else if (n === "bias")
		this.material.displacementBias = this.properties.bias
}

function MaterialSpecularMapNode() {
	this.addInput("Map", "texture", {...NodesHelper.slots.texture, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})
}
MaterialSpecularMapNode.title = "Specular"
MaterialSpecularMapNode.title_color = NodesHelper.titles.material
MaterialSpecularMapNode.collapsable = true
MaterialSpecularMapNode.prototype.resizable = false
MaterialSpecularMapNode.prototype.onAdded = function() {
	this.material = this.graph.extra.material
}
MaterialSpecularMapNode.prototype.onExecute = function() {
	var t = this.getInputData(0)

	if (t === undefined)
		return

	this.material.specularMap = t
}

function MaterialEmissiveMapNode() {
	this.properties = {intensity: 0}

	this.addInput("Map", "texture", {...NodesHelper.slots.texture, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})
	this.addInput("Colour", "color", {...NodesHelper.slots.color, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y_second]})

	this.serialize_widgets = true
}
MaterialEmissiveMapNode.title = "Emissive"
MaterialEmissiveMapNode.title_color = NodesHelper.titles.material
MaterialEmissiveMapNode.collapsable = true
MaterialEmissiveMapNode.prototype.resizable = false
MaterialEmissiveMapNode.prototype.onAdded = function() {
	this.material = this.graph.extra.material

	this.properties.intensity = (this.material.emissiveIntensity !== undefined) ? this.material.emissiveIntensity : 0
	this.addWidget("number", "Intensity", this.properties.intensity, "intensity")
}
MaterialEmissiveMapNode.prototype.onExecute = function() {
	var t = this.getInputData(0)
	var c = this.getInputData(1)

	if (t !== undefined)
		this.material.emissiveMap = t

	if (c !== undefined)
		this.material.emissive.copy(c)
}
MaterialEmissiveMapNode.prototype.onPropertyChanged = function(n, v) {
	if (n === "intensity")
		this.material.emissiveIntensity = v

	if (this.graph && this.graph.onNodeConnectionChange) 
		this.graph.onNodeConnectionChange()
}

function MaterialShaderNode() {
	this.properties = {mat: null}

	this.addInput("Uniforms", "json", {...NodesHelper.slots.json, pos: [NodesHelper.slots.position.x, NodesHelper.slots.position.y]})
}
MaterialShaderNode.title = "Shader"
MaterialShaderNode.title_color = NodesHelper.titles.material
MaterialShaderNode.collapsable = true
MaterialShaderNode.skip_list = true
MaterialShaderNode.prototype.resizable = false
MaterialShaderNode.prototype.onDblClick = function() {
	var mat = this.graph.extra.material
	var file = this.graph.extra.file

	if (mat instanceof THREE.ShaderMaterial) {
		// Check if there is already a tab with this material attached
		var found = false
		for(var i = 0; i < Interface.tab.options.length; i++) {
			if (Interface.tab.options[i].component instanceof ShaderMaterialEditor) {
				if (Interface.tab.options[i].component.material === mat) {
					found = true
					Interface.tab.selectTab(i)
					break
				}
			}
		}

		// If not found, open new tab
		if (!found) {
			var tab = Interface.tab.addTab(mat.name, Interface.file_dir + "Icons/Misc/material.png", true)
			var material_editor = new ShaderMaterialEditor()
			material_editor.attachMaterial(mat, file)
			tab.attachComponent(material_editor)
			tab.select()
		}
	}
}

function registerMaterialNodes() {
	LiteGraph.registerNodeType("Material/Material", MaterialNode)
	LiteGraph.registerNodeType("Material/Shader", MaterialShaderNode)
	LiteGraph.registerNodeType("Material/Side", MaterialSideNode)
	LiteGraph.registerNodeType("Material/DepthTest", MaterialDepthTestNode)
	LiteGraph.registerNodeType("Material/AlphaTest", MaterialAlphaTestNode)
	LiteGraph.registerNodeType("Material/BlendingMode", MaterialBlendingModeNode)
	LiteGraph.registerNodeType("Material/Skinning", MaterialSkinningNode)
	LiteGraph.registerNodeType("Material/MorphTargets", MaterialMorphTargetsNode)
	LiteGraph.registerNodeType("Material/Colour", MaterialColourNode)
	LiteGraph.registerNodeType("Material/Map", MaterialMapNode)
	LiteGraph.registerNodeType("Material/AlphaMap", MaterialAlphaMapNode)
	LiteGraph.registerNodeType("Material/Shading", MaterialShadingNode)
	LiteGraph.registerNodeType("Material/BumpMap", MaterialBumpMapNode)
	LiteGraph.registerNodeType("Material/NormalMap", MaterialNormalNode)
	LiteGraph.registerNodeType("Material/DisplacementMap", MaterialDisplacementMapNode)
	LiteGraph.registerNodeType("Material/SpecularMap", MaterialSpecularMapNode)
	LiteGraph.registerNodeType("Material/EmissiveMap", MaterialEmissiveMapNode)
}