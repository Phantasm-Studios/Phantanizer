"use strict"

//Image constructor
PHANTANIZER.Image = function(url)
{
	this.name = "image"
	this.uuid = THREE.Math.generateUUID()
	this.type = "Image"

	this.path = "/"

	this.format = ""
	this.encoding = ""
	this.data = null

	if(url !== undefined)
	{
		this.encoding = url.split(".").pop().toLowerCase()

		if(this.encoding === "gif")
		{
			this.data = "data:image/" + this.encoding + ";base64," + FileSystem.readFileBase64(url)
			this.format = "base64"
		}
		else if (this.encoding === "tga")
		{
			var canvas = new THREE.TGALoader().parse(FileSystem.readFileBase64(url))

			this.encoding = "jpeg"
			this.format = "base64"
			this.data = canvas.toDataURL("image/jpeg", 0.8)
		} else {
			this.format = "url"
			this.data = url
		}
	}
}

PHANTANIZER.Image.prototype.setPath = function(path) {
	if (path !== undefined) {
		this.path = path
	}
}

//Encode image data to jpeg or png in base64 format
PHANTANIZER.Image.prototype.encodeData = function()
{
	var image = document.createElement("img")
	image.src = this.data

	var canvas = document.createElement("canvas")
	canvas.width = image.width
	canvas.height = image.height

	var context = canvas.getContext("2d")
	context.drawImage(image, 0, 0, image.width, image.height)

	var transparent = false
	var data = context.getImageData(0, 0, image.width, image.height).data
	for(var i = 3; i < data.length; i += 4)
	{
		if(data[i] !== 255)
		{
			transparent = true
			break
		}
	}

	if(transparent)
	{
		this.format = "base64"
		this.encoding = "png"
		this.data = canvas.toDataURL("image/png")
	}
	else
	{
		this.format = "base64"
		this.encoding = "jpeg"
		this.data = canvas.toDataURL("image/jpeg", 0.8)
	}
}

//JSON serialization
PHANTANIZER.Image.prototype.toJSON = function(meta)
{
	if(meta.images[this.uuid] !== undefined)
	{
		return meta.images[this.uuid]
	}

	if(this.format === "url")
	{
		this.encodeData()
	}

	var data = {}
	data.name = this.name
	data.uuid = this.uuid
	data.type = this.type
	data.encoding = this.encoding
	data.format = this.format
	data.data = this.data
	data.path = this.path

	meta.images[this.uuid] = data

	return data
}