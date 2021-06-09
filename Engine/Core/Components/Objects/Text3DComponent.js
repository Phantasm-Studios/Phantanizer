"use strict"

function Text3DComponent() {
        Component.call(this)

        this.component_name = "Text"
        this.className = "Text3DComponent"

        this.values = {
                text: "text",
                size: 1,
                curveSegments: 15,
                thickness: 0.5,
                bevel: false,
                bevelThickness: 10,
                bevelSize: 8
        }
}

Text3DComponent.prototype = Object.create(Component.prototype)

Text3DComponent.prototype.initUI = function(pos, obj) {
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

        // Text
        this.form.addText("Text")
        this.text = new TextBox(this.form.element)
        this.text.size.set(200, 18)
        this.text.setOnChange(() => {
                if(self.obj !== null) {
                        self.obj.setText(self.text.getText())
                }
        })
        this.form.add(this.text)
        this.form.nextRow()

        // Size
        this.form.addText("Size")
        this.size = new NumberBox(this.form.element)
        this.size.size.set(60, 18)
        this.size.setRange(0, Number.MAX_SAFE_INTEGER)
        this.size.setStep(0.1)
        this.size.setOnChange(() => {
            if(self.obj !== null) {
                self.obj.size = self.size.getValue()
                self.obj.setText()
            }
        })
        this.form.add(this.size)

        // Height
        this.form.addText("Thickness")
        this.height = new NumberBox(this.form.element)
        this.height.size.set(60, 18)
        this.height.setRange(0, Number.MAX_SAFE_INTEGER)
        this.height.setStep(0.1)
        this.height.setOnChange(() => {
                if (self.obj !== null) {
                        self.obj.height = self.height.getValue()
                        self.obj.setText()
                }
        })
        this.form.add(this.height)
        this.form.nextRow()

        // Curve segments
        this.form.addText("Curve Segments")
        this.curve_segments = new NumberBox(this.form.element)
        this.curve_segments.size.set(60, 18)
        this.curve_segments.setRange(0, Number.MAX_SAFE_INTEGER)
        this.curve_segments.setStep(1.0)
        this.curve_segments.setOnChange(() => {
            if(self.obj !== null) {
                self.obj.curve_segments = self.curve_segments
                self.obj.setText()
            }
        })
        this.form.add(this.curve_segments)
        this.form.nextRow()

        // Bevel
        this.bevel = new CheckBox(this.form.element)
        this.bevel.setText("Bevel")
        this.bevel.size.set(200, 15)
        this.bevel.setOnChange(() => {
                if (self.obj !== null) {
                        self.obj.bevel = self.bevel.getValue()
                        self.obj.setText()
                }
        })
        this.form.add(this.bevel)
        this.form.nextRow()

        // Bevel thickness
        this.form.addText("Bevel Thickness")
        this.bevel_thickness = new NumberBox(this.form.element)
        this.bevel_thickness.size.set(60, 18)
        this.bevel_thickness.setRange(0, Number.MAX_SAFE_INTEGER)
        this.bevel_thickness.setStep(0.1)
        this.bevel_thickness.setOnChange(() => {
                if (self.obj !== null) {
                        self.obj.bevel_thickness = self.bevel_thickness.getValue()
                        self.obj.setText()
                }
        })
        this.form.add(this.bevel_thickness)
        this.form.nextRow()

        // Bevel size
        this.form.addText("Bevel Size")
        this.bevel_size = new NumberBox(this.form.element)
        this.bevel_size.size.set(60, 18)
        this.bevel_size.setRange(0, Number.MAX_SAFE_INTEGER)
        this.bevel_size.setStep(0.1)
        this.bevel_size.setOnChange(() => {
                if (self.obj !== null) {
                        self.obj.bevel_size = self.bevel_size.getValue()
                        self.obj.setText()
                }
        })
        this.form.add(this.bevel_size)
        this.form.nextRow()

        // Set position and update interface
        this.form.position.copy(this.widgetsPos)
        this.form.updateInterface()

        this.widgetsPos.y += this.form.size.y
        this.addResetButton()

        return this.element
}

Text3DComponent.prototype.updateData = function() {
        this.text.setText(this.obj.text)
        this.size.setValue(this.obj.size)
        this.height.setValue(this.obj.height)
        this.curve_segments.setValue(this.obj.curve_segments)
        this.bevel.setValue(this.obj.bevel)
        this.bevel_thickness.setValue(this.obj.bevel_thickness)
        this.bevel_size.setValue(this.obj.bevel_size)
}

Text3DComponent.prototype.onReset = function() {

        this.obj.height = this.values.thickness
        this.obj.size = this.values.size
        this.obj.curve_segments = this.values.curveSegments
        this.obj.bevel = this.values.bevel
        this.obj.bevel_thickness = this.values.bevelThickness
        this.obj.bevel_size = this.values.bevelSize
        this.obj.setText(this.values.text)

        this.updateData()
        Editor.updateObjectViews()
}
