"use strict"

function MaterialRenderer() {
	// Canvas
	this.canvas = document.createElement("canvas");
	this.canvas.width = 128;
	this.canvas.height = 128;

	// Renderer
	this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, alpha: true});
	this.renderer.setSize(this.canvas.width, this.canvas.width);

	// Camera
	this.camera = new THREE.PerspectiveCamera(90, this.canvas.width/this.canvas.height);

    // Scene
    this.scene = new THREE.Scene()
    this.scene.add(new THREE.PointLight(0x666666))
    this.scene.add(new THREE.AmbientLight(0x666666))

	// Material sphere
    this.sphere = new Mesh(new THREE.SphereBufferGeometry(1, 32, 32), null);
	this.sphere.position.set(0, 0, -1.5);
	this.sphere.visible = false;
    this.scene.add(this.sphere)

    // Sprite
    this.sprite = new THREE.Sprite(null);
	this.sprite.position.set(0, 0, -0.5);
	this.sprite.visible = false;
	this.scene.add(this.sprite);
}

//Set render size
MaterialRenderer.prototype.setSize = function(x, y)
{
	this.canvas.width = x;
	this.canvas.height = y;
	this.renderer.setSize(x, y);
}

//Render material to internal canvas and copy image to html image element
MaterialRenderer.prototype.renderMaterial = function(material, img)
{
	if(material instanceof SpriteMaterial)
	{
		this.sprite.material = material;
		this.sprite.visible = true;
		this.sphere.visible = false;
	}
	else
	{
		this.sphere.material = material;
		this.sphere.visible = true;
		this.sprite.visible = false;
	}

	this.renderer.render(this.scene, this.camera);

    // Create image blob and set as image source
	var canvas = this.canvas;
	if(img !== undefined)
	{
		canvas.toBlob(function(blob)
		{
			var url = URL.createObjectURL(blob);
			img.src = url;
		});
	}
}
