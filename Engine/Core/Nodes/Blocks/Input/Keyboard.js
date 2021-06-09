function ANode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
ANode.title = "A"
ANode.title_color = NodesHelper.titles.input
ANode.collapsable = true
ANode.blocks = "Blocks"
ANode.prototype.resizable = false
ANode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
ANode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.A)
}
ANode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.A)) 
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.A)) 
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.A)) 
		this.triggerSlot(2, "Released")
}

function AltNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
AltNode.title = "Alt"
AltNode.title_color = NodesHelper.titles.input
AltNode.collapsable = true
AltNode.blocks = "Blocks"
AltNode.prototype.resizable = false
AltNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
AltNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.ALT)
}
AltNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.ALT)) 
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.ALT))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.ALT)) 
		this.triggerSlot(2, "Released")
}

function BNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
BNode.title = "B"
BNode.title_color = NodesHelper.titles.input
BNode.collapsable = true
BNode.blocks = "Blocks"
BNode.prototype.resizable = false
BNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
BNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.B)
}
BNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.B)) 
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.B)) 
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.B)) 
		this.triggerSlot(2, "Released")
}

function BackspaceNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
BackspaceNode.title = "Backspace"
BackspaceNode.title_color = NodesHelper.titles.input
BackspaceNode.collapsable = true
BackspaceNode.blocks = "Blocks"
BackspaceNode.prototype.resizable = false
BackspaceNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
BackspaceNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.BACKSPACE)
}
BackspaceNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.BACKSPACE))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.BACKSPACE))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.BACKSPACE))
		this.triggerSlot(2, "Released")
}

function CNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
CNode.title = "C"
CNode.title_color = NodesHelper.titles.input
CNode.collapsable = true
CNode.blocks = "Blocks"
CNode.prototype.resizable = false
CNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
CNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.C)
}
CNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.C))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.C))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.C))
		this.triggerSlot(2, "Released")
}

function CapsLockNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
CapsLockNode.title = "CapsLock"
CapsLockNode.title_color = NodesHelper.titles.input
CapsLockNode.collapsable = true
CapsLockNode.blocks = "Blocks"
CapsLockNode.prototype.resizable = false
CapsLockNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
CapsLockNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.CAPS_LOCK)
}
CapsLockNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.CAPS_LOCK))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.CAPS_LOCK))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.CAPS_LOCK))
		this.triggerSlot(2, "Released")
}

function CtrlNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
CtrlNode.title = "Ctrl"
CtrlNode.title_color = NodesHelper.titles.input
CtrlNode.collapsable = true
CtrlNode.blocks = "Blocks"
CtrlNode.prototype.resizable = false
CtrlNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
CtrlNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.CTRL)
}
CtrlNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.CTRL))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.CTRL))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.CTRL))
		this.triggerSlot(2, "Released")
}

function DNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
DNode.title = "D"
DNode.title_color = NodesHelper.titles.input
DNode.collapsable = true
DNode.blocks = "Blocks"
DNode.prototype.resizable = false
DNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
DNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.D)
}
DNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.D))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.D))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.D))
		this.triggerSlot(2, "Released")
}

function DelNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
DelNode.title = "Del"
DelNode.title_color = NodesHelper.titles.input
DelNode.collapsable = true
DelNode.blocks = "Blocks"
DelNode.prototype.resizable = false
DelNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
DelNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.DEL)
}
DelNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.DEL))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.DEL))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.DEL))
		this.triggerSlot(2, "Released")
}

function DownNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
DownNode.title = "Down"
DownNode.title_color = NodesHelper.titles.input
DownNode.collapsable = true
DownNode.blocks = "Blocks"
DownNode.prototype.resizable = false
DownNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
DownNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.DOWN)
}
DownNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.DOWN))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.DOWN))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.DOWN))
		this.triggerSlot(2, "Released")
}

function ENode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
ENode.title = "E"
ENode.title_color = NodesHelper.titles.input
ENode.collapsable = true
ENode.blocks = "Blocks"
ENode.prototype.resizable = false
ENode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
ENode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.E)
}
ENode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.E))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.E))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.E))
		this.triggerSlot(2, "Released")
}

function EndNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
EndNode.title = "End"
EndNode.title_color = NodesHelper.titles.input
EndNode.collapsable = true
EndNode.blocks = "Blocks"
EndNode.prototype.resizable = false
EndNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
EndNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.END)
}
EndNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.END))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.END))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.END))
		this.triggerSlot(2, "Released")
}

function EnterNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
EnterNode.title = "Enter"
EnterNode.title_color = NodesHelper.titles.input
EnterNode.collapsable = true
EnterNode.blocks = "Blocks"
EnterNode.prototype.resizable = false
EnterNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
EnterNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.ENTER)
}
EnterNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.ENTER))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.ENTER))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.ENTER))
		this.triggerSlot(2, "Released")
}

function EscNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
EscNode.title = "Esc"
EscNode.title_color = NodesHelper.titles.input
EscNode.collapsable = true
EscNode.blocks = "Blocks"
EscNode.prototype.resizable = false
EscNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
EscNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.ESC)
}
EscNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.ESC))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.ESC))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.ESC))
		this.triggerSlot(2, "Released")
}

function FNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
FNode.title = "F"
FNode.title_color = NodesHelper.titles.input
FNode.collapsable = true
FNode.blocks = "Blocks"
FNode.prototype.resizable = false
FNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
FNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F)
}
FNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F))
		this.triggerSlot(2, "Released")
}

function F1Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F1Node.title = "F1"
F1Node.title_color = NodesHelper.titles.input
F1Node.collapsable = true
F1Node.blocks = "Blocks"
F1Node.prototype.resizable = false
F1Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F1Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F1)
}
F1Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F1))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F1))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F1))
		this.triggerSlot(2, "Released")
}

function F2Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F2Node.title = "F2"
F2Node.title_color = NodesHelper.titles.input
F2Node.collapsable = true
F2Node.blocks = "Blocks"
F2Node.prototype.resizable = false
F2Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F2Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F2)
}
F2Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F2))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F2))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F2))
		this.triggerSlot(2, "Released")
}

function F3Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F3Node.title = "F3"
F3Node.title_color = NodesHelper.titles.input
F3Node.collapsable = true
F3Node.blocks = "Blocks"
F3Node.prototype.resizable = false
F3Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F3Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F3)
}
F3Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F3))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F3))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F3))
		this.triggerSlot(2, "Released")
}

function F4Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F4Node.title = "F4"
F4Node.title_color = NodesHelper.titles.input
F4Node.collapsable = true
F4Node.blocks = "Blocks"
F4Node.prototype.resizable = false
F4Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F4Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F4)
}
F4Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F4))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F4))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F4))
		this.triggerSlot(2, "Released")
}

function F5Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F5Node.title = "F5"
F5Node.title_color = NodesHelper.titles.input
F5Node.collapsable = true
F5Node.blocks = "Blocks"
F5Node.prototype.resizable = false
F5Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F5Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F5)
}
F5Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F5))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F5))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F5))
		this.triggerSlot(2, "Released")
}

function F6Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F6Node.title = "F6"
F6Node.title_color = NodesHelper.titles.input
F6Node.collapsable = true
F6Node.blocks = "Blocks"
F6Node.prototype.resizable = false
F6Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F6Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F6)
}
F6Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F6))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F6))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F6))
		this.triggerSlot(2, "Released")
}

function F7Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F7Node.title = "F7"
F7Node.title_color = NodesHelper.titles.input
F7Node.collapsable = true
F7Node.blocks = "Blocks"
F7Node.prototype.resizable = false
F7Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F7Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F7)
}
F7Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F7))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F7))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F7))
		this.triggerSlot(2, "Released")
}

function F8Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F8Node.title = "F8"
F8Node.title_color = NodesHelper.titles.input
F8Node.collapsable = true
F8Node.blocks = "Blocks"
F8Node.prototype.resizable = false
F8Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F8Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F8)
}
F8Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F8))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F8))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F8))
		this.triggerSlot(2, "Released")
}

function F9Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F9Node.title = "F9"
F9Node.title_color = NodesHelper.titles.input
F9Node.collapsable = true
F9Node.blocks = "Blocks"
F9Node.prototype.resizable = false
F9Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F9Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F9)
}
F9Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F9))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F9))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F9))
		this.triggerSlot(2, "Released")
}

function F10Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F10Node.title = "F10"
F10Node.title_color = NodesHelper.titles.input
F10Node.collapsable = true
F10Node.blocks = "Blocks"
F10Node.prototype.resizable = false
F10Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F10Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F10)
}
F10Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F10))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F10))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F10))
		this.triggerSlot(2, "Released")
}

function F11Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F11Node.title = "F11"
F11Node.title_color = NodesHelper.titles.input
F11Node.collapsable = true
F11Node.blocks = "Blocks"
F11Node.prototype.resizable = false
F11Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F11Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F11)
}
F11Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F11))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F11))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F11))
		this.triggerSlot(2, "Released")
}

function F12Node() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
F12Node.title = "F12"
F12Node.title_color = NodesHelper.titles.input
F12Node.collapsable = true
F12Node.blocks = "Blocks"
F12Node.prototype.resizable = false
F12Node.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
F12Node.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.F12)
}
F12Node.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.F12))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.F12))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.F12))
		this.triggerSlot(2, "Released")
}

function GNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
GNode.title = "G"
GNode.title_color = NodesHelper.titles.input
GNode.collapsable = true
GNode.blocks = "Blocks"
GNode.prototype.resizable = false
GNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
GNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.G)
}
GNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.G))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.G))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.G))
		this.triggerSlot(2, "Released")
}

function HNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
HNode.title = "H"
HNode.title_color = NodesHelper.titles.input
HNode.collapsable = true
HNode.blocks = "Blocks"
HNode.prototype.resizable = false
HNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
HNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.H)
}
HNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.H))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.H))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.H))
		this.triggerSlot(2, "Released")
}

function HomeNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
HomeNode.title = "Home"
HomeNode.title_color = NodesHelper.titles.input
HomeNode.collapsable = true
HomeNode.blocks = "Blocks"
HomeNode.prototype.resizable = false
HomeNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
HomeNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.HOME)
}
HomeNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.HOME))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.HOME))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.HOME))
		this.triggerSlot(2, "Released")
}

function INode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
INode.title = "I"
INode.title_color = NodesHelper.titles.input
INode.collapsable = true
INode.blocks = "Blocks"
INode.prototype.resizable = false
INode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
INode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.I)
}
INode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.I))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.I))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.I))
		this.triggerSlot(2, "Released")
}

function InsertNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
InsertNode.title = "Insert"
InsertNode.title_color = NodesHelper.titles.input
InsertNode.collapsable = true
InsertNode.blocks = "Blocks"
InsertNode.prototype.resizable = false
InsertNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
InsertNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.INSERT)
}
InsertNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.INSERT))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.INSERT))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.INSERT))
		this.triggerSlot(2, "Released")
}

function JNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
JNode.title = "J"
JNode.title_color = NodesHelper.titles.input
JNode.collapsable = true
JNode.blocks = "Blocks"
JNode.prototype.resizable = false
JNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
JNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.J)
}
JNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.J))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.J))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.J))
		this.triggerSlot(2, "Released")
}

function KNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
KNode.title = "K"
KNode.title_color = NodesHelper.titles.input
KNode.collapsable = true
KNode.blocks = "Blocks"
KNode.prototype.resizable = false
KNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
KNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.K)
}
KNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.K))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.K))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.K))
		this.triggerSlot(2, "Released")
}

function LNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
LNode.title = "L"
LNode.title_color = NodesHelper.titles.input
LNode.collapsable = true
LNode.blocks = "Blocks"
LNode.prototype.resizable = false
LNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
LNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.L)
}
LNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.L))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.L))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.L))
		this.triggerSlot(2, "Released")
}

function LeftNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
LeftNode.title = "Left"
LeftNode.title_color = NodesHelper.titles.input
LeftNode.collapsable = true
LeftNode.blocks = "Blocks"
LeftNode.prototype.resizable = false
LeftNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
LeftNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.LEFT)
}
LeftNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.LEFT))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.LEFT))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.LEFT))
		this.triggerSlot(2, "Released")
}

function MNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
MNode.title = "M"
MNode.title_color = NodesHelper.titles.input
MNode.collapsable = true
MNode.blocks = "Blocks"
MNode.prototype.resizable = false
MNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
MNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.M)
}
MNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.M))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.M))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.M))
		this.triggerSlot(2, "Released")
}

function NNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
NNode.title = "N"
NNode.title_color = NodesHelper.titles.input
NNode.collapsable = true
NNode.blocks = "Blocks"
NNode.prototype.resizable = false
NNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
NNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.N)
}
NNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.N))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.N))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.N))
		this.triggerSlot(2, "Released")
}

function ONode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
ONode.title = "O"
ONode.title_color = NodesHelper.titles.input
ONode.collapsable = true
ONode.blocks = "Blocks"
ONode.prototype.resizable = false
ONode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
ONode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.O)
}
ONode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.O))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.O))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.O))
		this.triggerSlot(2, "Released")
}

function PNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
PNode.title = "P"
PNode.title_color = NodesHelper.titles.input
PNode.collapsable = true
PNode.blocks = "Blocks"
PNode.prototype.resizable = false
PNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
PNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.P)
}
PNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.P))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.P))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.P))
		this.triggerSlot(2, "Released")
}

function PageUpNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
PageUpNode.title = "PageUp"
PageUpNode.title_color = NodesHelper.titles.input
PageUpNode.collapsable = true
PageUpNode.blocks = "Blocks"
PageUpNode.prototype.resizable = false
PageUpNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
PageUpNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.PAGE_UP)
}
PageUpNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.PAGE_UP))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.PAGE_UP))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.PAGE_UP))
		this.triggerSlot(2, "Released")
}

function PageDownNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
PageDownNode.title = "PageDown"
PageDownNode.title_color = NodesHelper.titles.input
PageDownNode.collapsable = true
PageDownNode.blocks = "Blocks"
PageDownNode.prototype.resizable = false
PageDownNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
PageDownNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.PAGE_DOWN)
}
PageDownNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.PAGE_DOWN))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.PAGE_DOWN))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.PAGE_DOWN))
		this.triggerSlot(2, "Released")
}

function QNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
QNode.title = "Q"
QNode.title_color = NodesHelper.titles.input
QNode.collapsable = true
QNode.blocks = "Blocks"
QNode.prototype.resizable = false
QNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
QNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.Q)
}
QNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.Q))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.Q))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.Q))
		this.triggerSlot(2, "Released")
}

function RNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
RNode.title = "R"
RNode.title_color = NodesHelper.titles.input
RNode.collapsable = true
RNode.blocks = "Blocks"
RNode.prototype.resizable = false
RNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
RNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.R)
}
RNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.R))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.R))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.R))
		this.triggerSlot(2, "Released")
}

function RightNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
RightNode.title = "Right"
RightNode.title_color = NodesHelper.titles.input
RightNode.collapsable = true
RightNode.blocks = "Blocks"
RightNode.prototype.resizable = false
RightNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
RightNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.RIGHT)
}
RightNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.RIGHT))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.RIGHT))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.RIGHT))
		this.triggerSlot(2, "Released")
}

function SNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
SNode.title = "S"
SNode.title_color = NodesHelper.titles.input
SNode.collapsable = true
SNode.blocks = "Blocks"
SNode.prototype.resizable = false
SNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
SNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.S)
}
SNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.S))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.S))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.S))
		this.triggerSlot(2, "Released")
}

function ShiftNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
ShiftNode.title = "Shift"
ShiftNode.title_color = NodesHelper.titles.input
ShiftNode.collapsable = true
ShiftNode.blocks = "Blocks"
ShiftNode.prototype.resizable = false
ShiftNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
ShiftNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.SHIFT)
}
ShiftNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.SHIFT))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.SHIFT))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.SHIFT))
		this.triggerSlot(2, "Released")
}

function SpacebarNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
SpacebarNode.title = "Spacebar"
SpacebarNode.title_color = NodesHelper.titles.input
SpacebarNode.collapsable = true
SpacebarNode.blocks = "Blocks"
SpacebarNode.prototype.resizable = false
SpacebarNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
SpacebarNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.SPACEBAR)
}
SpacebarNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.SPACEBAR))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.SPACEBAR))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.SPACEBAR))
		this.triggerSlot(2, "Released")
}

function TNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
TNode.title = "T"
TNode.title_color = NodesHelper.titles.input
TNode.collapsable = true
TNode.blocks = "Blocks"
TNode.prototype.resizable = false
TNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
TNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.T)
}
TNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.T))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.T))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.T))
		this.triggerSlot(2, "Released")
}

function TabNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
TabNode.title = "Tab"
TabNode.title_color = NodesHelper.titles.input
TabNode.collapsable = true
TabNode.blocks = "Blocks"
TabNode.prototype.resizable = false
TabNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
TabNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.TAB)
}
TabNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.TAB))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.TAB))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.TAB))
		this.triggerSlot(2, "Released")
}

function UNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
UNode.title = "U"
UNode.title_color = NodesHelper.titles.input
UNode.collapsable = true
UNode.blocks = "Blocks"
UNode.prototype.resizable = false
UNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
UNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.U)
}
UNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.U))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.U))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.U))
		this.triggerSlot(2, "Released")
}

function UpNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
UpNode.title = "Up"
UpNode.title_color = NodesHelper.titles.input
UpNode.collapsable = true
UpNode.blocks = "Blocks"
UpNode.prototype.resizable = false
UpNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
UpNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.UP)
}
UpNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.UP))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.UP))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.UP))
		this.triggerSlot(2, "Released")
}

function VNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
VNode.title = "V"
VNode.title_color = NodesHelper.titles.input
VNode.collapsable = true
VNode.blocks = "Blocks"
VNode.prototype.resizable = false
VNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
VNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.V)
}
VNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.V))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.V))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.V))
		this.triggerSlot(2, "Released")
}

function WNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
WNode.title = "W"
WNode.title_color = NodesHelper.titles.input
WNode.collapsable = true
WNode.blocks = "Blocks"
WNode.prototype.resizable = false
WNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
WNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.W)
}
WNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.W))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.W))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.W))
		this.triggerSlot(2, "Released")
}

function XNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
XNode.title = "X"
XNode.title_color = NodesHelper.titles.input
XNode.collapsable = true
XNode.blocks = "Blocks"
XNode.prototype.resizable = false
XNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
XNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.X)
}
XNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.X))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.X))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.X))
		this.triggerSlot(2, "Released")
}

function YNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
YNode.title = "Y"
YNode.title_color = NodesHelper.titles.input
YNode.collapsable = true
YNode.blocks = "Blocks"
YNode.prototype.resizable = false
YNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
YNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.Y)
}
YNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.Y))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.Y))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.Y))
		this.triggerSlot(2, "Released")
}

function ZNode() {
	this.addOutput("Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y1]})
	this.addOutput("Just Pressed", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_second]})
	this.addOutput("Released", LiteGraph.EVENT, {...NodesHelper.slots.event, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_third]})

	this.addOutput("Key", "key", {...NodesHelper.slots.keyinput, pos: [NodesHelper.slots.position.x1-10, NodesHelper.slots.position.y_fourth]})
	this.size[0] = NodesHelper.sizes.small[0]-10
}
ZNode.title = "Z"
ZNode.title_color = NodesHelper.titles.input
ZNode.collapsable = true
ZNode.blocks = "Blocks"
ZNode.prototype.resizable = false
ZNode.prototype.getSlotMenuOptions = NodesHelper.getSlotMenuOptions
ZNode.prototype.onStart = function() {
	this.setOutputData(3, Keyboard.Z)
}
ZNode.prototype.onExecute = function() {
	if (Keyboard.keyPressed(Keyboard.Z))
		this.triggerSlot(0, "Pressed")
	if (Keyboard.keyJustPressed(Keyboard.Z))
		this.triggerSlot(1, "JustPressed")
	if (Keyboard.keyJustReleased(Keyboard.Z))
		this.triggerSlot(2, "Released")
}

function registerKeyboardNodes() {
	LiteGraph.registerNodeType("Input/Keyboard/A", ANode)
	LiteGraph.registerNodeType("Input/Keyboard/Alt", AltNode)
	LiteGraph.registerNodeType("Input/Keyboard/B", BNode)
	LiteGraph.registerNodeType("Input/Keyboard/Backspace", BackspaceNode)
	LiteGraph.registerNodeType("Input/Keyboard/C", CNode)
	LiteGraph.registerNodeType("Input/Keyboard/CapsLock", CapsLockNode)
	LiteGraph.registerNodeType("Input/Keyboard/Ctrl", CtrlNode)
	LiteGraph.registerNodeType("Input/Keyboard/D", DNode)
	LiteGraph.registerNodeType("Input/Keyboard/Del", DelNode)
	LiteGraph.registerNodeType("Input/Keyboard/Down", DownNode)
	LiteGraph.registerNodeType("Input/Keyboard/E", ENode)
	LiteGraph.registerNodeType("Input/Keyboard/End", EndNode)
	LiteGraph.registerNodeType("Input/Keyboard/Enter", EnterNode)
	LiteGraph.registerNodeType("Input/Keyboard/Esc", EscNode)
	LiteGraph.registerNodeType("Input/Keyboard/F", FNode)
	LiteGraph.registerNodeType("Input/Keyboard/F1", F1Node)
	LiteGraph.registerNodeType("Input/Keyboard/F2", F2Node)
	LiteGraph.registerNodeType("Input/Keyboard/F3", F3Node)
	LiteGraph.registerNodeType("Input/Keyboard/F4", F4Node)
	LiteGraph.registerNodeType("Input/Keyboard/F5", F5Node)
	LiteGraph.registerNodeType("Input/Keyboard/F6", F6Node)
	LiteGraph.registerNodeType("Input/Keyboard/F7", F7Node)
	LiteGraph.registerNodeType("Input/Keyboard/F8", F8Node)
	LiteGraph.registerNodeType("Input/Keyboard/F9", F9Node)
	LiteGraph.registerNodeType("Input/Keyboard/F10", F10Node)
	LiteGraph.registerNodeType("Input/Keyboard/F11", F11Node)
	LiteGraph.registerNodeType("Input/Keyboard/F12", F12Node)
	LiteGraph.registerNodeType("Input/Keyboard/G", GNode)
	LiteGraph.registerNodeType("Input/Keyboard/H", HNode)
	LiteGraph.registerNodeType("Input/Keyboard/Home", HomeNode)
	LiteGraph.registerNodeType("Input/Keyboard/I", INode)
	LiteGraph.registerNodeType("Input/Keyboard/Insert", InsertNode)
	LiteGraph.registerNodeType("Input/Keyboard/J", JNode)
	LiteGraph.registerNodeType("Input/Keyboard/K", KNode)
	LiteGraph.registerNodeType("Input/Keyboard/L", LNode)
	LiteGraph.registerNodeType("Input/Keyboard/Left", LeftNode)
	LiteGraph.registerNodeType("Input/Keyboard/M", MNode)
	LiteGraph.registerNodeType("Input/Keyboard/N", NNode)
	LiteGraph.registerNodeType("Input/Keyboard/O", ONode)
	LiteGraph.registerNodeType("Input/Keyboard/P", PNode)
	LiteGraph.registerNodeType("Input/Keyboard/PageUp", PageUpNode)
	LiteGraph.registerNodeType("Input/Keyboard/PageDown", PageDownNode)
	LiteGraph.registerNodeType("Input/Keyboard/Q", QNode)
	LiteGraph.registerNodeType("Input/Keyboard/R", RNode)
	LiteGraph.registerNodeType("Input/Keyboard/Right", RightNode)
	LiteGraph.registerNodeType("Input/Keyboard/S", SNode)
	LiteGraph.registerNodeType("Input/Keyboard/Shift", ShiftNode)
	LiteGraph.registerNodeType("Input/Keyboard/Spacebar", SpacebarNode)
	LiteGraph.registerNodeType("Input/Keyboard/T", TNode)
	LiteGraph.registerNodeType("Input/Keyboard/Tab", TabNode)
	LiteGraph.registerNodeType("Input/Keyboard/U", UNode)
	LiteGraph.registerNodeType("Input/Keyboard/Up", UpNode)
	LiteGraph.registerNodeType("Input/Keyboard/V", VNode)
	LiteGraph.registerNodeType("Input/Keyboard/W", WNode)
	LiteGraph.registerNodeType("Input/Keyboard/X", XNode)
	LiteGraph.registerNodeType("Input/Keyboard/Y", YNode)
	LiteGraph.registerNodeType("Input/Keyboard/Z", ZNode)
}