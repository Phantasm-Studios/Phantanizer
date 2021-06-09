"use strict";

function Graph(parent)
{
	//Parent
    this.parent = (parent !== undefined) ? parent : document.body
	
	//ID
	var id = "graph" + Graph.id;
	Graph.id++;

	//Create element
	this.element = document.createElement("div");
	this.element.id = id;
	this.element.style.position = "absolute";
	this.element.style.cursor = "default";

	//Grid
	this.grid = document.createElement("canvas");
	this.grid.style.position = "absolute";
	this.grid.style.marginLeft = "30px";
	this.element.appendChild(this.grid);

	//Graph array
	this.graph = [];

	//Graph
	var canvas = document.createElement("canvas");
	canvas.style.position = "absolute";
	canvas.style.marginLeft = "30px";
	this.element.appendChild(canvas);
	this.graph.push({canvas: canvas, name: "default", color: "#FFFFFF", values: [], buttons: [], onchange: null});
	
	//Scale
	this.scale = [];
	for(var i = 0; i < 3; i++)
	{
		var scale = document.createElement("div");
		scale.style.position = "absolute";
		scale.style.pointerEvents = "none";
		scale.style.color = Editor.theme.text_color;
		scale.innerHTML = 1.0 - (0.5 * i);
		this.scale.push(scale);
		this.element.appendChild(scale);
	}	

	//Graph range
	this.min = 0.0;
	this.max = 1.0;

	//Attributes
	this.size = new THREE.Vector2(0, 0);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;
	
	//Add element to document
	this.parent.appendChild(this.element);
}

//Graph counter
Graph.id = 0;

//Add graph
Graph.prototype.addGraph = function(name, color)
{
	var canvas = document.createElement("canvas");
	canvas.style.position = "absolute";
	canvas.style.marginLeft = "30px";
	this.element.appendChild(canvas);
	this.graph.push({canvas: canvas, name: name, color: color, values: [], buttons: [], onchange: null});
}

//Attach onchange callback to a graph
Graph.prototype.setOnChange = function(callback, name)
{
	var graph = this.getGraph(name);
	graph.onchange = callback;
}

//Set value range
Graph.prototype.setRange = function(min, max)
{
	this.min = min;
	this.max = max;

	//Update scale elements
	var step = (this.max - this.min) / (this.scale.length - 1);
	for(var i = 0; i < this.scale.length; i++)
	{
		this.scale[this.scale.length - 1 - i].innerHTML = this.min + (step * i);
	}

	//Update grid to fit new scale
	for(i = 0; i < this.graph.length; i++)
	{
		this.updateGraph(this.graph[i]);
	}
}

//Set values to a graph
Graph.prototype.setValue = function(values, name)
{
	var graph = this.getGraph(name);

	//Set values
	graph.values = values;

	//Add buttons if necessary
	while(graph.buttons.length < graph.values.length)
	{
		var button = document.createElement("div");
		button.style.borderRadius = "5px";
		button.style.backgroundColor = graph.color;
		button.style.cursor = "pointer";
		button.style.position = "absolute";
		button.style.marginTop = "-5px";
		button.style.marginLeft = "25px";
		button.style.width = "10px";
		button.style.height = "10px";
		button.pressed = false;
		button.onmousedown = function()
		{
			this.pressed = true;
		}
		this.element.appendChild(button);
		graph.buttons.push(button);
	}

	//Remove buttons if necessary
	while(graph.buttons.length > graph.values.length)
	{
		var button = graph.buttons.pop();
		this.element.removeChild(button);
	}

	//Check if new values are in range
	var update = false;
	for(var i = 0; i < values.length; i++)
	{
		if(values[i] < this.min)
		{
			this.min = Math.ceil(values[i]);
			update = true;
			break;
		}
		else if(values[i] > this.max)
		{
			this.max = Math.ceil(values[i] + 1.0);
			update = true;
			break;
		}
	}

	//If some value not in range update range
	if(update)
	{
		this.setRange(this.min, this.max);
	}

	//Update graph
	this.updateGraph(graph);
}

//Return value array
Graph.prototype.getValue = function(name)
{
	var graph = this.getGraph(name);

	if(graph !== null)
	{
		return graph.values;
	}

	return null;
}

//Get graph object by name
Graph.prototype.getGraph = function(name)
{
	if(name !== undefined)
	{
		for(var i = 0; i < this.graph.length; i++)
		{
			if(this.graph[i].name === name)
			{
				return this.graph[i];
			}
		}
	}

	if(this.graph.length > 0)
	{
		return this.graph[0];
	}

	return null;
}

//Update graph canvas and buttons
Graph.prototype.updateGraph = function(graph)
{
	//Get canvas context
	var context = graph.canvas.getContext("2d");
	context.clearRect(0, 0, this.size.x, this.size.y);
	context.strokeStyle = graph.color;
	context.lineWidth = "2";

	//Draw graph and set button positions
	var step = this.size.x / (graph.values.length - 1);
	var delta = this.max - this.min;

	context.moveTo(0, graph.values[0] * this.size.y);
	context.beginPath();
	for(var i = 0; i < graph.values.length; i ++)
	{
		var x = i * step;
		var y = (1 - ((graph.values[i] - this.min) / delta)) * this.size.y;

		context.lineTo(x, y);

		var button = graph.buttons[i];
		button.style.left = x + "px";
		button.style.top = y + "px";
	}
	context.stroke();
}

//Draw background grid canvas
Graph.prototype.updateGrid = function()
{
	var context = this.grid.getContext("2d");
	context.clearRect(0, 0, this.size.x, this.size.y);
	context.strokeStyle = "#222222";
	context.lineWidth = "1";

	//Border
	context.beginPath();
	context.rect(0, 0, this.size.x, this.size.y);
	context.stroke();
	context.moveTo(0, 0);

	//Vertical lines
	var step = this.size.x / 10;
	for(var i = 0; i < this.size.x; i += step)
	{
		context.beginPath();
		context.moveTo(i, 0);
		context.lineTo(i, this.size.y);
		context.stroke();
	}

	//Horizontal lines
	for(i = 0; i < this.size.y; i += step)
	{
		context.beginPath();
		context.moveTo(0, i);
		context.lineTo(this.size.x, i);
		context.stroke();
	}
}

//Remove element
Graph.prototype.destroy = function()
{
	try
	{
		this.parent.removeChild(this.element);
	}
	catch(e){}
}

//Update graphs
Graph.prototype.update = function()
{
	for(var j = 0; j < this.graph.length; j++)
	{
		var graph = this.graph[j];

		for(var i = 0; i < graph.buttons.length; i++)
		{
			//Check if some button is pressed
			if(graph.buttons[i].pressed)
			{
				//Check if button still pressed
				if(Mouse.buttonPressed(Mouse.LEFT))
				{
					graph.values[i] -= (Mouse.delta.y * ((this.max - this.min) / this.size.y));

					if(graph.values[i] > this.max)
					{
						graph.values[i] = this.max;
					}
					else if(graph.values[i] < this.min)
					{
						graph.values[i] = this.min;
					}

					this.updateGraph(graph);
					if(graph.onchange !== null)
					{
						graph.onchange(graph.values);
					}
				}
				//Reset button pressed flag
				else
				{
					graph.buttons[i].pressed = false;
				}
			}
		}
	}
}

//Update Graph Size
Graph.prototype.updateInterface = function()
{	
	//Set visibility
	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}

	//Grid
	this.grid.width = this.size.x;
	this.grid.height = this.size.y;
	this.grid.style.width = this.size.x + "px";
	this.grid.style.height = this.size.y + "px";
	this.updateGrid();

	//Graph
	for(var i = 0; i < this.graph.length; i++)
	{
		var graph = this.graph[i];
		graph.canvas.width = this.size.x;
		graph.canvas.height = this.size.y;
		graph.canvas.style.width = this.size.x + "px";
		graph.canvas.style.height = this.size.y + "px";
		this.updateGraph(graph);
	}

	//Scale
	var step = (this.size.y - 14) / (this.scale.length - 1);
	for(i = 0; i < this.scale.length; i++)
	{
		this.scale[i].style.top = (i * step)+ "px";
	}

	//Update element
	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
}
