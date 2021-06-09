"use strict";

function FontLoader(manager)
{
	this.manager = (manager !== undefined) ? manager : THREE.DefaultLoadingManager;
}

FontLoader.prototype.load = function(url, onLoad, onProgress, onError)
{
	var loader = new THREE.XHRLoader(this.manager);
	loader.load(url, function(text)
	{
		onLoad(new Font(JSON.parse(text)));
	}, onProgress, onError);
}

FontLoader.prototype.parse = function(json) {
	if (json.data !== undefined) {
		var font = new Font()

		font.name = json.name
		font.uuid = json.uuid
		font.encoding = json.encoding

        if(json.format === "base64") {
            font.format = "arraybuffer"
            font.data = ArraybufferUtils.fromBase64(json.data)
            font.font = new TTFLoader().parse(font.data)
        } else {
            font.format = json.format
            font.data = json.data
            font.font = json.data
        }

		if (json.path !== undefined) font.path = json.path

		return font
	} else {
		return new Font(json)
	}
}
