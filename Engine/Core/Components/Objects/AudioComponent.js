"use strict"

function AudioComponent() {
	Component.call(this)

	this.component_name = "Audio"
	this.className = "AudioComponent"

	this.values = {
		autoplay: true,
		loop: true,
		playbackRate: 1
	}
}

AudioComponent.prototype = Object.create(Component.prototype)

AudioComponent.prototype.initUI = function(pos, obj) {
	// Clear the element
	this.clearElement()

	this.widgetsPos = pos

	// Self pointer
	var self = this
	this.obj = obj

	// Form
	this.form = new Form(this.element)
	this.form.spacing.set(5, 5)

	// Displays this component name
	this.form.addText(this.component_name)
	this.form.nextRow()

	// Auto play
	this.autoplay = new CheckBox(this.form.element)
	this.autoplay.setText("Autoplay")
	this.autoplay.size.set(150, 15)
	this.autoplay.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.autoplay = self.autoplay.getValue()
		}
	})
	this.form.add(this.autoplay)
	this.form.nextRow()

	// Loop
	this.loop = new CheckBox(this.form.element)
	this.loop.setText("Loop")
	this.loop.size.set(150, 15)
	this.loop.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.source.loop = self.loop.getValue()
		}
	})
	this.form.add(this.loop)
	this.form.nextRow()

	// Playback Rate
	this.form.addText("Playback Speed")
	this.playbackRate = new NumberBox(this.form.element)
	this.playbackRate.size.set(60, 18)
	this.playbackRate.setStep(0.01)
	this.playbackRate.setRange(0, Number.MAX_SAFE_INTEGER)
	this.playbackRate.setOnChange(() => {
		if (self.obj !== null) {
			self.obj.playbackRate = self.playbackRate.getValue()
		}
	})
	this.form.add(this.playbackRate)
	this.form.nextRow()

	// Set position and update interface
	this.form.position.copy(this.widgetsPos)
	this.form.updateInterface()

	this.widgetsPos.y += this.form.size.y
	this.addResetButton(this.onReset)

	return this.element
}

AudioComponent.prototype.updateData = function() {
	this.autoplay.setValue(this.obj.autoplay)
	this.loop.setValue(this.obj.source.loop)
	this.playbackRate.setValue(this.obj.playbackRate)
}

AudioComponent.prototype.onReset = function() {
	this.obj.autoplay = this.values.autoplay
	this.obj.source.loop = this.values.loop
	this.obj.playbackRate = this.values.playbackRate

	Editor.updateObjectViews()
	this.updateData()
}