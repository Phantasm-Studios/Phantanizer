"use strict";

//Webcam texture
function WebcamTexture(mapping, wrapS, wrapT, magFilter, minFilter, type, anisotropy)
{
	var video = document.createElement("video")
	video.autoplay = true
	video.loop = true

	// Chrome
	if(navigator.webkitGetUserMedia)
	{
		navigator.webkitGetUserMedia({video:true}, function(stream)
		{
			video.src = URL.createObjectURL(stream);
		},
		function(error)
		{
			console.warn("WebcamTexture: No webcam available");
		});		
	}
	// Firefox
	else if(navigator.mediaDevices.getUserMedia)
	{
		navigator.mediaDevices.getUserMedia({video:true}).then(function(stream)
		{
			video.src = URL.createObjectURL(stream);
		}).catch(function(error)
		{
			console.warn("No webcam available");
		});				
	}

	// Call super constructor
	THREE.Texture.call(this, video, mapping, wrapS, wrapT, THREE.LinearFilter, THREE.LinearFilter, THREE.RGBFormat, type, anisotropy);

	this.generateMipmaps = false
	this.disposed = false

	// Name
	this.name = "webcam"
	this.category = "Webcam"
	this.path = "/"

	// Webcam video update loop
	var texture = this
	function update() {
		if (video.readyState >= video.HAVE_CURRENT_DATA) {
			texture.needsUpdate = true
		}

		if (!texture.disposed) {
			requestAnimationFrame(update)
		}
	}
	update()
}

// Super prototypes
WebcamTexture.prototype = Object.create(THREE.VideoTexture.prototype);

// Set path
WebcamTexture.prototype.setPath = function(path) {
	if (path !== undefined) {
		this.path = path
	}
}

// Dispose texture
WebcamTexture.prototype.dispose = function() {
	THREE.Texture.prototype.dispose.call(this)

	this.disposed = true
	if (!this.image.paused) {
		this.image.pause()
	}
}

WebcamTexture.prototype.toJSON = function(meta) {
	var data = THREE.VideoTexture.prototype.toJSON.call(this, meta)

	data.path = this.path

	return data
}