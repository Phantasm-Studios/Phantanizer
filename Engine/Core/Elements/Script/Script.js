function Script(code)
{
	THREE.Object3D.call(this)
	
	this.type = "Script"
	this.name = "script"
	this.path = "/"

	//Program and scene pointers
	this.program = null
	this.scene = null

	//Script Code
	this.func = null
	this.setCode((code !== undefined) ? code : "// This block of code is executed one\nthis.initialize = function() {\n\n}\n\n// This block of code is executed once per frame\nthis.update = function() {\n\n}\n\nthis.onMouseOver = function(object) {\n\n}")

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
    this.defaultComponents.push(new ScriptComponent())
}

Script.prototype = Object.create(THREE.Object3D.prototype)

//Initialize
Script.prototype.initialize = function()
{
	//Program and scene
	var node = this
	while(node.parent !== null)
	{
		node = node.parent
		if(node instanceof Scene)
		{
			this.scene = node
		}
		else if(node instanceof Program)
		{
			this.program = node
		}
	}

	if (this.script.initialize !== undefined) {
		this.script.initialize.call(this)
	}

	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].initialize()
	}
}

//Update Script
Script.prototype.update = function()
{
	if (this.script.onMouseOver !== undefined) {
		var obj = this.scene.raycaster.intersectObjects(this.children, true)
		if (obj.length > 0) {
			this.script.onMouseOver.call(this, obj)
		}
	}

	if (this.script.update !== undefined) {
		this.script.update.call(this)
	}

	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].update()
	}
}

//Define script code
Script.prototype.setCode = function(code)
{
	try
	{
		this.code = code
		this.script = new(new Function(this.code))()
	}
	catch(e){
        console.error(e)

        this.script = new(function(){})()
	}
}

//Create JSON for object
Script.prototype.toJSON = function(meta)
{
	var data = THREE.Object3D.prototype.toJSON.call(this, meta)

	data.object.code = this.code
	data.object.path = this.path

	return data
}
