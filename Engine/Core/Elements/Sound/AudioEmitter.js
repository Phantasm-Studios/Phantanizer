"use strict";

function AudioEmitter(audio)
{
	THREE.Audio.call(this, AudioEmitter.listener);

	// Name and type
	this.name = "audio";
	this.type = "Audio";

	this.audio = (audio !== undefined) ? audio : Editor.default_audio

	this.autoplay = true;
	this.playbackRate = 1;
	this.startTime = 0;
	this.source.loop = true;

	this.components = []
	this.defaultComponents = []

	this.defaultComponents.push(new ElementComponent())
	this.defaultComponents.push(new AudioComponent())
}

// Default audio listener
AudioEmitter.listener = new THREE.AudioListener();

// Super prototypes
AudioEmitter.prototype = Object.create(THREE.Audio.prototype);

// Initialise audio object
AudioEmitter.prototype.initialize = function()
{
	var self = this;

	if(this.audio !== null) {
		THREE.AudioContext.decodeAudioData(this.audio.data, (buffer) => {
			self.setBuffer(buffer)
		})
	}

	// Initialise children
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].initialize();
	}
}

// Dispose audio object
AudioEmitter.prototype.dispose = function()
{
	if(this.isPlaying)
	{
		this.stop();
		this.disconnect();
	}

	// Dispose children
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].dispose();
	}
}

// Create JSON description
AudioEmitter.prototype.toJSON = function(meta)
{

        var audio = this.audio
        var data = THREE.Object3D.prototype.toJSON.call(this, meta, (meta, object) => {
                audio = audio.toJSON(meta)
        })

	data.object.audio = audio.uuid
	data.object.autoplay = this.autoplay;
	data.object.startTime = this.startTime;
	data.object.playbackRate = this.playbackRate;

	data.object.source = {};
	data.object.source.loop = this.source.loop;

	return data;
}
