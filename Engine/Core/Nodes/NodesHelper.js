function NodesHelper() {}

// Nodes sizes
NodesHelper.sizes = {}
NodesHelper.sizes.small = [120, 26]
NodesHelper.sizes.medium = [180, 46]
NodesHelper.sizes.big = [220, 66]
NodesHelper.sizes.large = [280, 86]

// Nodes titles
NodesHelper.titles = {}
NodesHelper.titles.event = "#FF0000"
NodesHelper.titles.hierarchy = "#556B2f"
NodesHelper.titles.input = "#0080FF"
NodesHelper.titles.object = "#DEB887"
NodesHelper.titles.base = "#5F9EA0"
NodesHelper.titles.material = "#032138"
NodesHelper.titles.texture = "#1d5e4a"
NodesHelper.titles.particles = "#bf7f3b"
NodesHelper.titles.array = NodesHelper.titles.event
NodesHelper.titles.widget = "#7E0480"
NodesHelper.titles.color = "#380333"
NodesHelper.titles.vector = "#f4042c"

// Nodes slots
NodesHelper.slots = {}

// Standalone positions
NodesHelper.slots.position = {}

// For inputs
NodesHelper.slots.position.x = 20
NodesHelper.slots.position.y = 12

NodesHelper.slots.position.y_second = 30 // For the second slot
NodesHelper.slots.position.y_third = 48 // For the third slot
NodesHelper.slots.position.y_fourth = 66 // For the fourth slot
NodesHelper.slots.position.y_fifth = 84 // For the fifth slot
NodesHelper.slots.position.y_sixth = 104 // For the sixth slot
NodesHelper.slots.position.y_seventh = 122 // For the seventh slot
NodesHelper.slots.position.y_eighth = 140
NodesHelper.slots.position.y_ninth = 158

// For outputs
NodesHelper.slots.position.x1 = 105
NodesHelper.slots.position.y1 = 12

// Colours
NodesHelper.slots.colours = {}

NodesHelper.slots.colours.event = "#FFFFFF"
NodesHelper.slots.colours.passer = "#FFC0CB"
NodesHelper.slots.colours.element = "#00BFFF"
NodesHelper.slots.colours.array = "#9400D3"
NodesHelper.slots.colours.string = "#FF1493"
NodesHelper.slots.colours.number = "#7ef48f"
NodesHelper.slots.colours.input = "#87ceeb"
NodesHelper.slots.colours.bool = "#800000"
NodesHelper.slots.colours.vector = "#D2691E"
NodesHelper.slots.colours.variable = "#A52A2A"
NodesHelper.slots.colours.euler = "#8bd613"
NodesHelper.slots.colours.color = "#380333"
NodesHelper.slots.colours.texture = "#1d5e4a"
NodesHelper.slots.colours.json = "#1d395e"

// Slots
NodesHelper.slots.event = {color_on: NodesHelper.slots.colours.event, color_off: NodesHelper.slots.colours.event, shape: LiteGraph.ARROW_SHAPE}
NodesHelper.slots.passer = {color_on: NodesHelper.slots.colours.passer, color_off: NodesHelper.slots.colours.passer, shape: LiteGraph.BOX_SHAPE}
NodesHelper.slots.object = {color_on: NodesHelper.slots.colours.element, color_off: NodesHelper.slots.colours.element}
NodesHelper.slots.array = {color_on: NodesHelper.slots.colours.array, color_off: NodesHelper.slots.colours.array}
NodesHelper.slots.string = {color_on: NodesHelper.slots.colours.string, color_off: NodesHelper.slots.colours.string}
NodesHelper.slots.number = {color_on: NodesHelper.slots.colours.number, color_off: NodesHelper.slots.colours.number}
NodesHelper.slots.keyinput = {color_on: NodesHelper.slots.colours.input, color_off: NodesHelper.slots.colours.input}
NodesHelper.slots.bool = {color_on: NodesHelper.slots.colours.bool, color_off: NodesHelper.slots.colours.bool}
NodesHelper.slots.vector = {color_on: NodesHelper.slots.colours.vector, color_off: NodesHelper.slots.colours.vector}
NodesHelper.slots.variable = {color_on: NodesHelper.slots.colours.variable, color_off: NodesHelper.slots.colours.variable}
NodesHelper.slots.euler = {color_on: NodesHelper.slots.colours.euler, color_off: NodesHelper.slots.colours.euler}
NodesHelper.slots.color = {color_on: NodesHelper.slots.colours.color, color_off: NodesHelper.slots.colours.color}
NodesHelper.slots.texture = {color_on: NodesHelper.slots.colours.texture, color_off: NodesHelper.slots.colours.texture}
NodesHelper.slots.json = {color_on: NodesHelper.slots.colours.json, color_off: NodesHelper.slots.colours.json}

// Input slots
NodesHelper.slots.input = {}
NodesHelper.slots.input.position = {pos: [NodesHelper.slots.position.x, 12]}

NodesHelper.slots.input.event = {...NodesHelper.slots.event, ...NodesHelper.slots.input.position}

// Output slots
NodesHelper.slots.output = {}
NodesHelper.slots.output.position = {pos: [NodesHelper.slots.position.x1, 12]}
NodesHelper.slots.output.title_pos = {pos: [NodesHelper.slots.position.x1, -10]}

NodesHelper.slots.output.event = {...NodesHelper.slots.event, ...NodesHelper.slots.output.position}
NodesHelper.slots.output.passer = {...NodesHelper.slots.passer, shape: LiteGraph.BOX_SHAPE, ...NodesHelper.slots.output.title_pos}

// Functions

// The Slot Menu
NodesHelper.getSlotMenuOptions = function(s, n, e) {
	if (s.output !== undefined) {
		var c = new LiteGraph.ContextMenu([
			{
				title: "Convert to Variable",
				callback: () => {
					var graph = LGraphCanvas.active_canvas.graph
					var canvas = LGraphCanvas.active_canvas

					var node_var = LiteGraph.createNode("Base/Variable")
					node_var.pos = [n.pos[0]+150, n.pos[1]]
					graph.add(node_var)

					n.connect(0, node_var, 0)
					n.connect(s.slot, node_var, 1)
				}
			}
		], {title: s.output.name, event: e})
	}
}