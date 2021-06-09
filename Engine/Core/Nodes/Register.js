function Register() {}

Register.registerBlocksNodes = function() {
	registerBase()
	registerEvents()
	registerArray()
	registerWidgets()
	registerColour()
	registerVectorNode()
	registerObjects()
	registerHierarchy()
	registerKeyboardNodes()
}

Register.registerMaterialNodes = function() {
	registerArray()
	registerWidgets()
	registerColour()
	registerMaterialNodes()
}

Register.registerParticlesNodes = function() {
	registerArray()
	registerWidgets()
	registerColour()
	registerParticlesNodes()
}

Register.unregisterAll = function() {
	LiteGraph.registered_node_types = {}
	LiteGraph.Nodes = {}
}

Register.registerAll = function() {	
	Register.registerBlocksNodes()
	Register.registerMaterialNodes()
	Register.registerParticlesNodes()
}
