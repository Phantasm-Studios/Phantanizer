"use strict";

function ObjectIconHelper(obj, icon)
{
	THREE.Sprite.call(this, new SpriteMaterial({map: new Texture(new PHANTANIZER.Image(icon)), color: 0xffffff}));

	this.obj = obj;
}

ObjectIconHelper.prototype = Object.create(THREE.Sprite.prototype);

ObjectIconHelper.prototype.update = function()
{
	if(this.obj !== null)
	{
		this.obj.getWorldPosition(this.position);
	}
}