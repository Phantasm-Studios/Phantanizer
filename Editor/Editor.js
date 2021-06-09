"use strict"

function Editor(){}

Editor.CURRENT_PATH = "/"

// NWJS Modules
try {
	Editor.fs = require("fs")
	Editor.gui = require("nw.gui")
	Editor.clipboard = Editor.gui.Clipboard.get()
	Editor.args = Editor.gui.App.argv
} catch(e) {
	Editor.args = []
}

// Phantanizer global
include("Engine/Phantanizer.js")

// Runtime dependencies
include("Engine/Libraries/three/three.js")
include("Engine/Libraries/three/effects/VREffect.js")
include("Engine/Libraries/cannon.min.js")
include("Engine/Libraries/leap.min.js")
include("Engine/Libraries/stats.min.js")
include("Engine/Libraries/SPE.min.js")
include("Engine/Libraries/spine.min.js")
include("Engine/Libraries/opentype.min.js")

include("Engine/Libraries/litegraph/litegraph.js")

// Runtime internal modules
include("Engine/Core/THREE/Three.js")
include("Engine/Core/THREE/Object3D.js")
include("Engine/Core/THREE/Vector3.js")
include("Engine/Core/THREE/Vector2.js")
include("Engine/Core/THREE/Color.js")
include("Engine/Core/THREE/Texture.js")
include("Engine/Core/THREE/LightShadow.js")
include("Engine/Core/THREE/Fog.js")
include("Engine/Core/THREE/Material.js")

include("Engine/Input/Key.js")
include("Engine/Input/Keyboard.js")
include("Engine/Input/Mouse.js")

include("Engine/Core/WebVR/VRControls.js")

include("Engine/Core/Resources/Font.js")
include("Engine/Core/Resources/Video.js")
include("Engine/Core/Resources/Audio.js")
include("Engine/Core/Resources/Image.js")
include("Engine/Core/Resources/Folder.js")

include("Engine/Core/Texture/TextTexture.js")
include("Engine/Core/Texture/VideoTexture.js")
include("Engine/Core/Texture/WebcamTexture.js")
include("Engine/Core/Texture/Texture.js")

include("Engine/Core/Loaders/FontLoader.js")
include("Engine/Core/Loaders/ImageLoader.js")
include("Engine/Core/Loaders/VideoLoader.js")

include("Engine/Core/Loaders/AudioLoader.js")
include("Engine/Core/Loaders/TextureLoader.js")
include("Engine/Core/Loaders/ObjectLoader.js")
include("Engine/Core/Loaders/MaterialLoader.js")
include("Engine/Core/Loaders/TTFLoader.js")

include("Engine/Core/Elements/Device/LeapMotion.js")
include("Engine/Core/Elements/Device/KinectDevice.js")

include("Engine/Core/Elements/Basic/Mesh.js")
include("Engine/Core/Elements/Basic/SkinnedMesh.js")
include("Engine/Core/Elements/Basic/Text3D.js")

include("Engine/Core/Elements/Sprite/Sprite.js")
include("Engine/Core/Elements/Sprite/TextSprite.js")

include("Engine/Core/Elements/Lighting/PointLight.js")
include("Engine/Core/Elements/Lighting/SpotLight.js")
include("Engine/Core/Elements/Lighting/AmbientLight.js")
include("Engine/Core/Elements/Lighting/DirectionalLight.js")
include("Engine/Core/Elements/Lighting/HemisphereLight.js")
include("Engine/Core/Elements/Lighting/Sky.js")

include("Engine/Core/Elements/Cinematic/PerspectiveCamera.js")
include("Engine/Core/Elements/Cinematic/OrthographicCamera.js")

include("Engine/Core/Elements/Sound/AudioEmitter.js")

include("Engine/Core/Elements/Script/Script.js")
include("Engine/Core/Elements/Script/BlockScript.js")

include("Engine/Core/Elements/Physics/PhysicsObject.js")

include("Engine/Core/Elements/Spine/SpineAnimation.js")
include("Engine/Core/Elements/Spine/SpineTexture.js")

include("Engine/Core/Elements/Bone.js")
include("Engine/Core/Elements/Empty.js")
include("Engine/Core/Elements/ParticleEmitter.js")
include("Engine/Core/Elements/Program.js")
include("Engine/Core/Elements/Scene.js")

include("Engine/Core/Elements/Special/ObjectCaller.js")

include("Engine/Core/Utils/Base64Utils.js")
include("Engine/Core/Utils/ArraybufferUtils.js")
include("Engine/Core/Utils/MathUtils.js")
include("Engine/Core/Utils/ObjectUtils.js")
include("Engine/Core/Utils/Mesh2Shape.js")

// Assets
include("Engine/Core/Assets/Materials/MeshBasicMaterial.js")
include("Engine/Core/Assets/Materials/MeshLambertMaterial.js")
include("Engine/Core/Assets/Materials/MeshNormalMaterial.js")
include("Engine/Core/Assets/Materials/MeshPhongMaterial.js")
include("Engine/Core/Assets/Materials/MeshShaderMaterial.js")
include("Engine/Core/Assets/Materials/MeshStandardMaterial.js")
include("Engine/Core/Assets/Materials/SpriteMaterial.js")

// Default Components
include("Engine/Core/Components/Panel.js")
include("Engine/Core/Components/Component.js")

include("Engine/Core/Components/Objects/AudioComponent.js")
include("Engine/Core/Components/Objects/ElementComponent.js")
include("Engine/Core/Components/Objects/ObjectComponent.js")
include("Engine/Core/Components/Objects/PhysicsComponent.js")
include("Engine/Core/Components/Objects/ProgramComponent.js")
include("Engine/Core/Components/Objects/SceneComponent.js")
include("Engine/Core/Components/Objects/Text3DComponent.js")
include("Engine/Core/Components/Objects/ScriptComponent.js")

include("Engine/Core/Components/Device/KinectComponent.js")
include("Engine/Core/Components/Device/LeapComponent.js")

include("Engine/Core/Components/Cameras/CameraComponent.js")

include("Engine/Core/Components/Lights/LightComponent.js")
include("Engine/Core/Components/Lights/SkyComponent.js")

// Nodes
include("Engine/Core/Nodes/Register.js")
include("Engine/Core/Nodes/NodesHelper.js")

// Blocks
include("Engine/Core/Nodes/Blocks/Base/Base.js")
include("Engine/Core/Nodes/Blocks/Base/Events.js")
include("Engine/Core/Nodes/Blocks/Base/Lists.js")
include("Engine/Core/Nodes/Blocks/Base/Widgets.js")
include("Engine/Core/Nodes/Blocks/Base/Objects.js")
include("Engine/Core/Nodes/Blocks/Base/Hierarchy.js")

include("Engine/Core/Nodes/Blocks/Math/Colour.js")
include("Engine/Core/Nodes/Blocks/Math/Vector.js")
include("Engine/Core/Nodes/Blocks/Math/Euler.js")

include("Engine/Core/Nodes/Blocks/Input/Keyboard.js")

// Material
include("Engine/Core/Nodes/Material/MaterialNodes.js")

// Particles
include("Engine/Core/Nodes/Particles/ParticlesNodes.js")

include("Engine/Core/FileSystem.js")

//Codemirror
include("Engine/Libraries/codemirror/codemirror.min.js")
include("Engine/Libraries/codemirror/codemirror.css")
include("Engine/Libraries/codemirror/keymap/sublime.js")
include("Engine/Libraries/codemirror/keymap/emacs.js")
include("Engine/Libraries/codemirror/keymap/vim.js")
include("Engine/Libraries/codemirror/addon/edit/closebrackets.js")
include("Engine/Libraries/codemirror/addon/edit/matchbrackets.js")
include("Engine/Libraries/codemirror/addon/search/search.js")
include("Engine/Libraries/codemirror/addon/search/searchcursor.js")
include("Engine/Libraries/codemirror/addon/search/jump-to-line.js")
include("Engine/Libraries/codemirror/addon/hint/show-hint.js")
include("Engine/Libraries/codemirror/addon/hint/show-hint.css")
include("Engine/Libraries/codemirror/addon/hint/anyword-hint.js")
include("Engine/Libraries/codemirror/addon/dialog/dialog.js")
include("Engine/Libraries/codemirror/addon/dialog/dialog.css")
include("Engine/Libraries/codemirror/addon/selection/active-line.js")
include("Engine/Libraries/codemirror/mode/javascript.js")
include("Engine/Libraries/codemirror/mode/glsl.js")
include("Engine/Libraries/codemirror/addon/lint/lint.css")
include("Engine/Libraries/codemirror/addon/lint/lint.js")
include("Engine/Libraries/codemirror/addon/lint/javascript-lint")
include("Engine/Libraries/codemirror/theme/*")

include("Engine/Libraries/jshint.min.js")
include("Engine/Libraries/jscolor.min.js")
include("Engine/Libraries/quickhull.js")

include("Engine/Libraries/litegraph/litegraph.css")
include("Engine/Libraries/litegraph/litegui.css")

//Threejs
include("Engine/Libraries/three/loaders/OBJLoader.js")
include("Engine/Libraries/three/loaders/MTLLoader.js")
include("Engine/Libraries/three/loaders/VRMLLoader.js")
include("Engine/Libraries/three/loaders/FBXLoader.js")
include("Engine/Libraries/three/loaders/GLTFLoader.js")
include("Engine/Libraries/three/loaders/ColladaLoader.js")
include("Engine/Libraries/three/loaders/PLYLoader.js")
include("Engine/Libraries/three/loaders/VTKLoader.js")
include("Engine/Libraries/three/loaders/AWDLoader.js")
include("Engine/Libraries/three/loaders/TGALoader.js")
include("Engine/Libraries/three/loaders/PCDLoader.js")

include("Engine/Libraries/three/animation/Animation.js")
include("Engine/Libraries/three/animation/AnimationHandler.js")
include("Engine/Libraries/three/animation/KeyFrameAnimation.js")

//Internal modules
include("Editor/UI/Element/Bar.js")
include("Editor/UI/Element/Button.js")
include("Editor/UI/Element/Text.js")
include("Editor/UI/Element/Division.js")
include("Editor/UI/Element/ImageBox.js")
include("Editor/UI/Element/DivisionResizable.js")
include("Editor/UI/Element/ButtonImage.js")
include("Editor/UI/Element/ButtonDrawer.js")
include("Editor/UI/Element/Canvas.js")
include("Editor/UI/Element/DualDivisionResizable.js")
include("Editor/UI/Element/ButtonImageToggle.js")
include("Editor/UI/Element/Form.js")

include("Editor/UI/Element/Input/Graph.js")
include("Editor/UI/Element/Input/CodeEditor.js")
include("Editor/UI/Element/Input/CheckBox.js")
include("Editor/UI/Element/Input/TextBox.js")
include("Editor/UI/Element/Input/ColorChooser.js")
include("Editor/UI/Element/Input/Slider.js")
include("Editor/UI/Element/Input/DropdownList.js")
include("Editor/UI/Element/Input/NumberBox.js")
include("Editor/UI/Element/Input/CoordinatesBox.js")
include("Editor/UI/Element/Input/ImageChooser.js")
include("Editor/UI/Element/Input/TextureBox.js")

include("Editor/UI/DropdownMenu.js")
include("Editor/UI/TabGroup.js")
include("Editor/UI/TabElement.js")
include("Editor/UI/TreeView.js")
include("Editor/UI/TreeElement.js")
include("Editor/UI/FolderTree.js")
include("Editor/UI/FolderElement.js")
include("Editor/UI/TabButton.js")
include("Editor/UI/ContextMenu.js")
include("Editor/UI/AssetExplorer.js")

include("Editor/UI/Asset/Asset.js")
include("Editor/UI/Asset/MaterialAsset.js")
include("Editor/UI/Asset/TextureAsset.js")
include("Editor/UI/Asset/BlockAsset.js")
include("Editor/UI/Asset/FontAsset.js")
include("Editor/UI/Asset/AudioAsset.js")
include("Editor/UI/Asset/FolderAsset.js")

include("Editor/Files/Style/Editor.css")

include("Editor/UI/Theme/Theme.js")
include("Editor/UI/Theme/ThemeDark.js")

include("Editor/UI/Tab/ScriptEditor.js")
include("Editor/UI/Tab/SceneEditor.js")
include("Editor/UI/Tab/SettingsTab.js")
include("Editor/UI/Tab/ParticleEditor.js")
include("Editor/UI/Tab/AboutTab.js")
include("Editor/UI/Tab/MaterialEditor.js")
include("Editor/UI/Tab/BlockEditor.js")
include("Editor/UI/Tab/ShaderMaterialEditor.js")

include("Editor/Tools/TransformControls.js")
include("Editor/Tools/GizmoMaterial.js")
include("Editor/Tools/GizmoLineMaterial.js")
include("Editor/Tools/TransformGizmo.js")
include("Editor/Tools/TransformGizmoRotate.js")
include("Editor/Tools/TransformGizmoScale.js")
include("Editor/Tools/TransformGizmoTranslate.js")

include("Editor/Helpers/ParticleEmitterHelper.js")
include("Editor/Helpers/ObjectIconHelper.js")
include("Editor/Helpers/PhysicsObjectHelper.js")
include("Editor/Helpers/BoundingBoxHelper.js")
include("Editor/Helpers/WireframeHelper.js")
include("Editor/Helpers/GridHelper.js")

include("Editor/Utils/MaterialRenderer.js")
include("Editor/Utils/ObjectIcons.js")

include("Editor/History/History.js")
include("Editor/History/Action.js")

include("Editor/DragBuffer.js")
include("Editor/Interface.js")
include("Editor/Settings.js")

// Editor state
Editor.STATE_IDLE = 8
Editor.STATE_EDITING = 9
Editor.STATE_TESTING = 11

// Editor editing modes
Editor.MODE_SELECT = 0
Editor.MODE_MOVE = 1
Editor.MODE_SCALE = 2
Editor.MODE_ROTATE = 3

// Editor camera mode
Editor.CAMERA_ORTHOGRAPHIC = 20
Editor.CAMERA_PERSPECTIVE = 21

// Initialize Main
Editor.initialize = function() {
	Editor.fullscreen = false

	document.body.style.overflow = "hidden"

	Keyboard.initialize()
	Mouse.initialize()

	// Load settings
	Settings.load()

	// Load interface theme
	Editor.theme = Theme.get(Settings.general.theme)

	// Set windows close event
	if(Editor.gui !== undefined) {
		// Close event
		Editor.gui.Window.get().on("close", function() {
			if(confirm("All unsaved changes to the project will be lost! Do you really wanna exit?")) {
				Editor.exit()
			}
		})
	}

	// Set window title
	document.title = PHANTANIZER.NAME + " " + PHANTANIZER.VERSION + " (" + PHANTANIZER.TIMESTAMP + ")"

	// Editor initial state
	Editor.tool_mode = Editor.MODE_SELECT
	Editor.state = Editor.STATE_EDITING

    // Open file
    Editor.open_file = null

	// Editor Selected object
	Editor.selected_object = null
	Editor.is_editing_object = false

	// Performance meter
	Editor.stats = null

	// History
	Editor.history = new History()

	// Editor program and scene
	Editor.program = null
	Editor.program_running = null

	// VR effect and controls
	Editor.vr_controls = new VRControls()
	Editor.vr_effect = null

	// Renderer and canvas
	Editor.renderer = null
	Editor.canvas = null
	Editor.gl = null

	// Material renderer for material previews
	Editor.material_renderer = new MaterialRenderer()

	// Default resources
	Editor.createDefaultResources()

	// Initialize User Interface
	Interface.initialize()

	// Debug Elements
	Editor.tool_scene = new THREE.Scene()
	Editor.tool_scene_top = new THREE.Scene()

	// Raycaster
	Editor.raycaster = new THREE.Raycaster();

	// Grid and axis helpers
	Editor.grid_helper = new GridHelper(Settings.grid_size, Settings.editor.grid_spacing)
    Editor.grid_helper.visible = Settings.editor.grid_enabled
    Editor.tool_scene.add(Editor.grid_helper)

	Editor.axis_helper = new THREE.AxisHelper(Settings.editor.grid_size)
	Editor.axis_helper.material.depthWrite = false
	Editor.axis_helper.material.transparent = true
	Editor.axis_helper.material.opacity = 1
	Editor.axis_helper.visible = Settings.editor.axis_enabled
	Editor.tool_scene.add(Editor.axis_helper)

	// Object helper container
	Editor.object_helper = new THREE.Scene()
	Editor.tool_scene.add(Editor.object_helper)

	// Tool container
	Editor.tool_container = new THREE.Scene()
	Editor.tool_scene_top.add(Editor.tool_container)
	Editor.tool = null

	// Editor Camera
	Editor.camera_mode = Editor.CAMERA_PERSPECTIVE
	Editor.camera_rotation = new Vector2(0, 0)
	Editor.setCameraMode(Editor.CAMERA_PERSPECTIVE)

	// Check if some .isp is passed as argument
	for(var i = 0; i < Editor.args.length; i++) {
		if (Editor.args[i].endsWith(".isp")) {
			Editor.loadProgram(Editor.args[i])
			break
		}
	}

	// Create new program
	if(Editor.program === null) {
		Editor.createNewProgram()
	}

	// Update views and start update loop
	Editor.updateObjectViews()
	Editor.update()
}

//Update Editor
Editor.update = function()
{
	requestAnimationFrame(Editor.update)

	// Update input
	Mouse.update()
	Keyboard.update()

	//End performance measure
	if(Editor.stats !== null)
	{
		Editor.stats.begin()
	}

	//Update editor interface
	Interface.update()
	Editor.is_editing_object = false

	//If not on test mode
	if(Editor.state !== Editor.STATE_TESTING)
	{
		//Close tab, Save and load project
		if(Keyboard.keyPressed(Keyboard.CTRL))
		{
			if(Keyboard.keyJustPressed(Keyboard.S))
			{
                if(Editor.open_file === null) {
                    Interface.saveProgram()
                } else {
                    Editor.saveProgram(undefined, false)
                }
            }
			else if(Keyboard.keyJustPressed(Keyboard.O))
			{
				Interface.loadProgram()
			}
			else if(Keyboard.keyJustPressed(Keyboard.W) || Keyboard.keyJustPressed(Keyboard.F4))
			{
				Interface.tab.closeActual()
			} else if (Keyboard.keyJustPressed(Keyboard.TAB) || Keyboard.keyJustPressed(Keyboard.PAGE_DOWN)) {
				Interface.tab.selectNextTab()
			} else if (Keyboard.keyJustPressed(Keyboard.PAGE_UP)) {
				Interface.tab.selectPreviousTab()
			}
		}
	}

	// Editing a scene
	if(Editor.state === Editor.STATE_EDITING) {
		// Keyboard shortcuts
		if(Keyboard.keyJustPressed(Keyboard.DEL)) {
			Editor.deleteObject()
		} else if(Keyboard.keyPressed(Keyboard.CTRL)) {
			if(Keyboard.keyJustPressed(Keyboard.C)) {
				Editor.copyObject()
			} else if(Keyboard.keyJustPressed(Keyboard.V)) {
				Editor.pasteObject()
			} else if(Keyboard.keyJustPressed(Keyboard.X)) {
				Editor.cutObject()
			} else if(Keyboard.keyJustPressed(Keyboard.Y)) {
				Editor.redo()
			} else if(Keyboard.keyJustPressed(Keyboard.Z)) {
				Editor.undo()
			}
		}

		// Select objects
		if(Editor.tool_mode === Editor.MODE_SELECT) {
			if(Mouse.buttonJustPressed(Mouse.LEFT) && Mouse.insideCanvas()) {
				Editor.selectObjectWithMouse()
			}

			Editor.is_editing_object = false
		} else {
			// If mouse double clicked, select object
			if (Mouse.buttonDoubleClicked() && Mouse.insideCanvas()) {
				Editor.selectObjectWithMouse()
			}

			// If no object selected, update tool
			if(Editor.selected_object !== null) {
				if(Editor.tool !== null) {
					Editor.is_editing_object = Editor.tool.update()

                    if(Mouse.buttonJustPressed(Mouse.LEFT) && Editor.is_editing_object) {
                        Editor.history.push(Editor.selected_object, Action.CHANGED)
                    }

					if (Editor.is_editing_object) {
						Editor.updateObjectPanel()
					}
				} else {
					Editor.is_editing_object = false
				}
			}
		}

		// Update object transformation matrix
		if (Editor.selected_object !== null) {
			if (!Editor.selected_object.matrixAutoUpdate) {
				Editor.selected_object.updateMatrix()
			}
		}
		
		// Update object helper
		Editor.object_helper.update()

		// Check if mouse is inside canvas
		if(Mouse.insideCanvas()) {
			// Lock mouse wheen camera is moving
			if(Settings.editor.lock_mouse) {
				if(!Editor.is_editing_object && (Mouse.buttonJustPressed(Mouse.LEFT) || Mouse.buttonJustPressed(Mouse.RIGHT) || Mouse.buttonJustPressed(Mouse.MIDDLE))) {
					Mouse.setLock(true)
				} else if(Mouse.buttonJustReleased(Mouse.LEFT) || Mouse.buttonJustReleased(Mouse.RIGHT) || Mouse.buttonJustReleased(Mouse.MIDDLE)) {
					Mouse.setLock(false)
				}
			}

			//  Orthographic Camera (2D Mode)
			if(Editor.camera_mode === Editor.CAMERA_ORTHOGRAPHIC) {
					// Move camera on x / y
				if(Mouse.buttonPressed(Mouse.RIGHT)) {
					var ratio = Editor.camera.size / Editor.canvas.width * 2

					Editor.camera.position.x -= Mouse.delta.x * ratio
					Editor.camera.position.y += Mouse.delta.y * ratio
				}

				// Camera zoom
				if (Mouse.wheel !== 0) {
					Editor.camera.size += Mouse.wheel * 0.01

					if (Editor.camera.size < 0.01) {
						Editor.camera.size = 0.01
					}

					Editor.camera.updateProjectionMatrix()
				}
			}

			// Perspective camera
			else {

				// Look camera
				if (Mouse.buttonPressed(Mouse.LEFT) && !Editor.is_editing_object) {
					Editor.camera_rotation.x -= 0.002 * Mouse.delta.x
					Editor.camera_rotation.y -= 0.002 * Mouse.delta.y

					// Limit vertical rotation to 90 degrees
					var pid2 = 1.57
					if (Editor.camera_rotation.y < -pid2) {
						Editor.camera_rotation.y = -pid2
					} else if (Editor.camera_rotation.y > pid2) {
						Editor.camera_rotation.y = pid2
					}

						Editor.setCameraRotation(Editor.camera_rotation, Editor.camera)
				}

				// Move Camera on X and Z
				else if (Mouse.buttonPressed(Mouse.RIGHT)) {
					// Move speed
					var speed = Editor.camera.position.distanceTo(new THREE.Vector3(0, 0, 0)) / 1000
					if (speed < 0.02) {
						speed = 0.02
					}

					// Move Camera Front and Back
					var angle_cos = Math.cos(Editor.camera_rotation.x)
					var angle_sin = Math.sin(Editor.camera_rotation.x)
					Editor.camera.position.z += Mouse.delta.y * speed * angle_cos
					Editor.camera.position.x += Mouse.delta.y * speed * angle_sin

					// Move Camera Lateral
					var angle_cos = Math.cos(Editor.camera_rotation.x + MathUtils.pid2)
					var angle_sin = Math.sin(Editor.camera_rotation.x + MathUtils.pid2)
					Editor.camera.position.z += Mouse.delta.x * speed * angle_cos
					Editor.camera.position.x += Mouse.delta.x * speed * angle_sin
				}

				// Move Camera on Y
				else if (Mouse.buttonPressed(Mouse.MIDDLE)) {
					Editor.camera.position.y += Mouse.delta.y * 0.1
				}

				// Move in camera direction using mouse scroll
				if (Mouse.wheel !== 0) {
					// Move speed
					var speed = Editor.camera.position.distanceTo(new THREE.Vector3(0, 0, 0)) / 2000
					speed *= Mouse.wheel

					// Limit zoom speed
					if (speed < 0 && speed > -0.03) {
						speed = -0.03
					} else if (speed > 0 && speed < 0.03) {
						speed = 0.03
					}

					// Move camera
					var direction = Editor.camera.getWorldDirection()
					Editor.camera.position.x -= speed * direction.x
					Editor.camera.position.y -= speed * direction.y
					Editor.camera.position.z -= speed * direction.z
				}
			}
		}
	}
	//Update Scene if on test mode
	else if(Editor.state === Editor.STATE_TESTING)
	{
		Editor.program_running.update();
	}

	Editor.render()
}

// Render stuff into screen
Editor.render = function()
{
	var renderer = Editor.renderer
	renderer.clear()

	if(Editor.state === Editor.STATE_EDITING)
	{
		// Render scene
		renderer.setViewport(0, 0, Editor.canvas.width, Editor.canvas.height)
		renderer.setScissor(0, 0, Editor.canvas.width, Editor.canvas.height)
		renderer.render(Editor.program.scene, Editor.camera)

		// Render tools
		renderer.render(Editor.tool_scene, Editor.camera)
		renderer.clearDepth()
		renderer.render(Editor.tool_scene_top, Editor.camera)

		// Render camera preview
		if(Settings.editor.camera_preview_enabled && (Editor.selected_object instanceof THREE.Camera || Editor.program.scene.cameras.length > 0))
		{
			var width = Settings.editor.camera_preview_percentage * Editor.canvas.width
			var height = Settings.editor.camera_preview_percentage * Editor.canvas.height

			renderer.setScissorTest(true)
			var offset = Editor.canvas.width - width - 10
			renderer.setViewport(offset, 10, width, height)
			renderer.setScissor(offset, 10, width, height)
			renderer.clear()

			if (Editor.selected_object instanceof THREE.Camera) {
				var camera = Editor.selected_object
				camera.aspect = width / height
				camera.updateProjectionMatrix()

				renderer.setViewport(offset + width * camera.offset.x, 10 + height * camera.offset.y, width * camera.viewport.x, height * camera.viewport.y)
				renderer.setScissor(offset + width * camera.offset.x, 10 + height * camera.offset.y, width * camera.viewport.x, height * camera.viewport.y)

				renderer.render(Editor.program.scene, camera)
			} else {
				var scene = Editor.program.scene
				for(var i = 0; i < scene.cameras.length; i++) {
					var camera = scene.cameras[i]
					camera.aspect = width / height
					camera.updateProjectionMatrix()

					if (camera.clear_color) {
						renderer.clearColor()
					}

					if (camera.clear_depth) {
						renderer.clearDepth()
					}

					renderer.setViewport(offset + width * camera.offset.x, 10 + height * camera.offset.y, width * camera.viewport.x, height * camera.viewport.y)
					renderer.setScissor(offset + width * camera.offset.x, 10 + height * camera.offset.y, width * camera.viewport.x, height * camera.viewport.y)
					renderer.render(scene, camera)
				}
			}

			renderer.setScissor(0, 0, Editor.canvas.width, Editor.canvas.height)
		}
	}
	else if(Editor.state === Editor.STATE_TESTING)
	{
		Editor.program_running.render(renderer, Editor.canvas.width, Editor.canvas.height)
	}

	//End performance measure
	if(Editor.stats !== null)
	{
		Editor.stats.end()
	}
}

//Resize to fit window
Editor.resize = function()
{
	if(!Editor.fullscreen)
	{
		Interface.updateInterface()
	}
}

//Select a object
Editor.selectObject = function(object)
{
	if (object instanceof THREE.Object3D) {
		Editor.selected_object = object

		Editor.selectObjectPanel()
		Editor.selectObjectHelper()

		if (Editor.tool !== null) {
			Editor.tool.detach()
			Editor.tool.attach(object)
		} else {
			Editor.selectTool(Editor.tool_mode)
		}
	} else {
		Editor.selected_object = null
		Editor.resetEditingFlags()
	}
}

//Add object to actual scene
Editor.addToScene = function(obj)
{
	if(Editor.program.scene !== null)
	{
		Editor.program.scene.add(obj);

        Editor.history.push(obj, Action.ADDED)
		
        Editor.updateObjectViews();
	}
}

//Check if object is selected
Editor.isObjectSelected = function(obj)
{
	if(Editor.selected_object !== null)
	{
		return Editor.selected_object.uuid === obj.uuid
	}
	return false
}

// Delete Selected Object
Editor.deleteObject = function(obj)
{
	if(obj === undefined) {
		obj = Editor.selected_object
	}

	if(obj instanceof THREE.Object3D)
	{
		if(Editor.isObjectSelected(obj))
		{
			Editor.resetEditingFlags()
		}

        Editor.history.push(obj, Action.REMOVED)

		obj.destroy()

		Editor.updateObjectViews()
	}
}

//Copy selected object
Editor.copyObject = function(obj)
{
	if(obj !== undefined)
	{
		if(Editor.clipboard !== undefined)
		{
			Editor.clipboard.set(JSON.stringify(obj.toJSON()), "text")
		}
	}
	else if(Editor.selected_object !== null && !(Editor.selected_object instanceof Program || Editor.selected_object instanceof Scene))
	{
		if(Editor.clipboard !== undefined)
		{
			Editor.clipboard.set(JSON.stringify(Editor.selected_object.toJSON()), "text")
		}
	}
}

//Cut selected object
Editor.cutObject = function(obj)
{
	if(obj === undefined)
	{
		if(Editor.selected_object !== undefined && !(Editor.selected_object instanceof Program || Editor.selected_object instanceof Scene))
		{
            obj = Editor.selected_object
        } else {
            return
        }
	}
    
    if(Editor.clipboard !== undefined) {
        Editor.clipboard.set(JSON.stringify(obj.toJSON()), "text")
    }

    Editor.history.push(obj, Action.REMOVED)
    obj.destroy()

    Editor.updateObjectViews()
    if(Editor.isObjectSelected(obj)) {
        Editor.resetEditingFlags() 
    }
}

//Paste object as children of target object
Editor.pasteObject = function(target)
{
	try
	{
		var content = Editor.clipboard.get("text");
		var data = JSON.parse(content);

		//Create object
		var obj = new ObjectLoader().parse(data);
		obj.traverse(function(child)
		{
			child.uuid = THREE.Math.generateUUID();
		});

		//Add object to target
		if(target !== undefined)
		{
			target.add(obj);
		}
		else
		{
			Editor.program.scene.add(obj);
		}

        Editor.history.push(obj, Action.REMOVED)

		Editor.updateObjectViews();
	}
	catch(e){}
}

// Redo action
Editor.redo = function() {
	// TODO: This
}

// Undo action
Editor.undo = function() {
    var action = Editor.history.undo()
    
    if(action !== null) {
        Editor.updateObjectViews()

        if(action.type === Action.CHANGED) {
            if(action.object.uuid === Editor.selected_object.uuid) {
                Editor.selectObject(action.object)
            }
        }
    } else {
        alert("Not possible to undo any further")
    }

}

//Update UI panel to match selected object
Editor.selectObjectPanel = function()
{
	Interface.tree_view.updateSelectedObject(Editor.selected_object)

	if(Interface.panel !== null)
	{
		Interface.panel.destroy()
	}

	if(Editor.selected_object !== null) {
		Interface.panel = new Panel(Interface.explorer_resizable.div_b)
		Interface.panel.attachObject(Editor.selected_object)
		Interface.panel.updateInterface()
	}
	else
	{
		Interface.panel = null
	}
}

// TODO: Remove Test code
var update = 0
var tree_delta, asset_delta, tabs_delta, panel_delta

//Update all object views
Editor.updateObjectViews = function()
{
	// TODO: Remove test code
	var start = Date.now()

	Editor.updateTreeView()
	Editor.updateObjectPanel()
	Editor.updateTabsData()
	Editor.updateAssetExplorer()

	// TODO: Remove test code
	//var delta = Date.now() - start
	//console.log("Update " + (update++) + " ObjectView: " + delta + "ms")
	//console.log("    Treeview " + tree_delta + "ms")
	//console.log("    Panel " + panel_delta + "ms")
	//console.log("    Tabs " + tabs_delta + "ms")
	//console.log("    Assets " + asset_delta + "ms\n\n")
}

//Update tab names to match objects actual info
Editor.updateTabsData = function()
{
	// TODO: Remove test code
	var start = Date.now()

	Interface.tab.updateMetadata();

	tabs_delta = Date.now() - start
}

//Update tree view to match actual scene
Editor.updateTreeView = function()
{
	// TODO: Remove test code
	var start = Date.now()

	Interface.tree_view.attachObject(Editor.program);
	Interface.tree_view.updateView()

	// TODO: Remove test code
	tree_delta = Date.now() - start
}

//Update assets explorer content
Editor.updateAssetExplorer = function()
{
	// TODO: Remove test code
	var start = Date.now()

	// Clean asset explorer
	Interface.asset_explorer.clear()
	
	Interface.folders_explorers.clear()
	Interface.folders_explorers.update()

	// Folders
	var folders = Editor.program.folders
	for(var i in folders) {
		var file = new FolderAsset(Interface.asset_explorer.element)
		file.setFolder(folders[i])
		Interface.asset_explorer.add(file)
	}

	// Materials
	var materials = ObjectUtils.getMaterials(Editor.program, Editor.program.materials)

	for(var i in materials) {
		var file = new MaterialAsset(Interface.asset_explorer.element)
		file.setMaterial(materials[i])
		Interface.asset_explorer.add(file)
	}

	// Objects
	var objects = Editor.program.asset_objects

	for(var i in objects) {
		var file = new BlockAsset(Interface.asset_explorer.element)
		file.setBlocks(objects[i])
		Interface.asset_explorer.add(file)
	}

	// Textures
	var textures = ObjectUtils.getTextures(Editor.program, Editor.program.textures)
	for(var i in textures) {
		var file = new TextureAsset(Interface.asset_explorer.element)
		file.setTexture(textures[i])
		Interface.asset_explorer.add(file)
	}

	// Fonts
	var fonts = ObjectUtils.getFonts(Editor.program, Editor.program.fonts)
	for(var i in fonts) {
		var file = new FontAsset(Interface.asset_explorer.element)
		file.setFont(fonts[i])
		Interface.asset_explorer.add(file)
	}

	// Audio
	var audio = ObjectUtils.getAudio(Editor.program, Editor.program.audio)
	for(var i in audio) {
		var file = new AudioAsset(Interface.asset_explorer.element)
		file.setAudio(audio[i])
		Interface.asset_explorer.add(file)
	}

	Interface.asset_explorer.updateInterface()

	// TODO: Remove test code
	asset_delta = Date.now() - start
}

//Updates object panel values
Editor.updateObjectPanel = function()
{
	// TODO: Remove test code
	var start = Date.now()

	if(Interface.panel !== null)
	{
		Interface.panel.updatePanel();
	}

	// TODO: Remove test code
	panel_delta = Date.now() - start
}

// Create default resources to be used when creating new objects
Editor.createDefaultResources = function() {
	Editor.default_image = new PHANTANIZER.Image("Engine/Data/sample.png")
	Editor.default_font = new Font("Engine/Data/Fonts/montserrat.json")
	Editor.default_audio = new Audio("Engine/Data/sample.ogg")
	Editor.default_texture = new Texture(Editor.default_image)
	Editor.default_material = new MeshStandardMaterial({roughness: 0.6, metalness: 0.2})
	Editor.default_material.name = "default"
	Editor.default_sprite_material = new SpriteMaterial({map: Editor.default_texture, color: 0xffffff})
	Editor.default_sprite_material.name = "default"
}

//Select tool to manipulate objects
Editor.selectTool = function(tool)
{
	Editor.tool_mode = tool;
	Editor.tool_container.removeAll();

	if (Editor.tool !== null) {
		Editor.tool.dispose()
	}

	for(var i = 0; i < Interface.tab.options.length; i++) {
		if (Interface.tab.options[i].component instanceof SceneEditor) {
			Interface.tab.options[i].component.updateInterface()
			break;
		}
	}

	if (Editor.selected_object !== null && tool !== Editor.MODE_SELECT) {
		if(tool === Editor.MODE_MOVE)
		{
			Editor.tool = new TransformControls()
			Editor.tool.setMode("translate")
			Editor.tool.setSpace(Settings.editor.transformation_space)
		}
		else if(tool === Editor.MODE_SCALE)
		{
			Editor.tool = new TransformControls()
			Editor.tool.setMode("scale")
		}
		else if (tool === Editor.MODE_ROTATE) {
			Editor.tool = new TransformControls()
			Editor.tool.setMode("rotate")
			Editor.tool.setSpace(Settings.editor.transformation_space)
		}

		Editor.tool.attach(Editor.selected_object)
		Editor.tool_container.add(Editor.tool)
	} else {
		Editor.tool = null
	}
}

// Select helper to debug selected object data
Editor.selectObjectHelper = function() {
	Editor.object_helper.removeAll()

	if(Editor.selected_object !== null) {
		// Camera
		if(Editor.selected_object instanceof THREE.Camera) {
			Editor.object_helper.add(new THREE.CameraHelper(Editor.selected_object))
			Editor.object_helper.add(new ObjectIconHelper(Editor.selected_object, Interface.file_dir + "Icons/Camera/Camera.png"))
		}
		// Directional light
		else if(Editor.selected_object instanceof THREE.DirectionalLight) {
			Editor.object_helper.add(new THREE.DirectionalLightHelper(Editor.selected_object, 1))
		}
		// Point light
		else if(Editor.selected_object instanceof THREE.PointLight) {
			Editor.object_helper.add(new THREE.PointLightHelper(Editor.selected_object, 1))
		}
		// Spot light
		else if(Editor.selected_object instanceof THREE.SpotLight) {
			Editor.object_helper.add(new THREE.SpotLightHelper(Editor.selected_object))
		}
		// Hemisphere light
		else if(Editor.selected_object instanceof THREE.HemisphereLight) {
			Editor.object_helper.add(new THREE.HemisphereLightHelper(Editor.selected_object, 1))
		}
		// Particle
		else if(Editor.selected_object instanceof ParticleEmitter) {
			Editor.object_helper.add(new ParticleEmitterHelper(Editor.selected_object))
		}
		// Physics
		else if(Editor.selected_object instanceof PhysicsObject) {
			Editor.object_helper.add(new PhysicsObjectHelper(Editor.selected_object))
		}
		// Scripts
		else if (Editor.selected_object instanceof Script || Editor.selected_object instanceof AudioEmitter || Editor.selected_object instanceof BlockScript) {
			Editor.object_helper.add(new ObjectIconHelper(Editor.selected_object, ObjectIcons.get(Editor.selected_object.type)))
		}
		// Animated Mesh
		else if (Editor.selected_object instanceof THREE.SkinnedMesh) {
			Editor.object_helper.add(new BoundingBoxHelper(Editor.selected_object, 0xFFFF00))
			Editor.object_helper.add(new WireframeHelper(Editor.selected_object))
			Editor.object_helper.add(new THREE.SkeletonHelper(Editor.selected_object))
		}
		// Mesh
		else if (Editor.selected_object instanceof THREE.Mesh) {
			Editor.object_helper.add(new BoundingBoxHelper(Editor.selected_object, 0xFFFF00))
			Editor.object_helper.add(new WireframeHelper(Editor.selected_object))
		}
		// Object Caller
		else if (Editor.selected_object instanceof ObjectCaller) {
			// By default, the object caller will only have the ObjectIconHelper
			Editor.object_helper.add(new ObjectIconHelper(Editor.selected_object, ObjectIcons.get(Editor.selected_object.obj_type)))
		}
		// Object 3D
		else if(Editor.selected_object instanceof THREE.Object3D) {
			Editor.object_helper.add(new BoundingBoxHelper(Editor.selected_object, 0xFFFF00))
		}
	}
}

// Resize Camera
Editor.resizeCamera = function() {
	if(Editor.canvas !== null && Editor.renderer !== null) {
		Editor.renderer.setSize(Editor.canvas.width, Editor.canvas.height)
		Editor.camera.aspect = Editor.canvas.width/Editor.canvas.height
		Editor.camera.updateProjectionMatrix();

		if(Editor.state === Editor.STATE_TESTING) {
			Editor.program_running.resize(Editor.canvas.width, Editor.canvas.height)
		}
	}
}

// Set camera mode (orthographic/perspective)
Editor.setCameraMode = function(mode) {

	if (mode === undefined) {
		mode = (Editor.camera_mode === Editor.CAMERA_PERSPECTIVE) ? Editor.CAMERA_ORTHOGRAPHIC : Editor.CAMERA_PERSPECTIVE
	}

	var aspect = (Editor.canvas !== null) ? Editor.canvas.width/Editor.canvas.height : 1.0

	if (mode === Editor.CAMERA_ORTHOGRAPHIC) {
		Editor.camera = new OrthographicCamera(10, aspect, OrthographicCamera.FIXED_VERTICAL)
		Editor.camera.position.set(0, 0, 100)
		Editor.grid_helper.rotation.x = Math.PI / 2
	} else if (mode === Editor.CAMERA_PERSPECTIVE) {
		Editor.camera = new PerspectiveCamera(60, aspect)
		Editor.camera.position.set(0, 10, 30)
		Editor.camera_rotation.set(3.14, 0)
		Editor.grid_helper.rotation.x = 0
		Editor.setCameraRotation(Editor.camera_rotation, Editor.camera)
	}

	Editor.camera_mode = mode
	Editor.selectTool(Editor.tool_mode)
}

// Set camera rotation
Editor.setCameraRotation = function(camera_rotation, camera) {
	// Calculate direction vector
	var cos_angle_y = Math.cos(camera_rotation.y)
	var direction = new THREE.Vector3(Math.sin(camera_rotation.x)*cos_angle_y, Math.sin(camera_rotation.y), Math.cos(camera_rotation.x)*cos_angle_y)

	// Add position offset and set camera direction
	direction.add(camera.position)
	camera.lookAt(direction)
}

//Update raycaster position from editor mouse position
Editor.updateRaycasterFromMouse = function() {
	var mouse = new THREE.Vector2((Mouse.position.x/Editor.canvas.width)*2 - 1, -(Mouse.position.y/Editor.canvas.height)*2 + 1)
	Editor.raycaster.setFromCamera(mouse, Editor.camera)
}

// Select objects with mouse
Editor.selectObjectWithMouse = function() {
	Editor.updateRaycasterFromMouse()
	var intersects = Editor.raycaster.intersectObjects(Editor.program.scene.children, true)
	if (intersects.length > 0) {
		Editor.selectObject(intersects[0].object)
	}
}

// Update editor raycaster with new x and y positions (normalised -1 to 1)
Editor.updateRaycaster = function(x, y) {
	Editor.raycaster.setFromCamera(new THREE.Vector2(x, y), Editor.camera)
}

//Reset editing flags
Editor.resetEditingFlags = function()
{
	Editor.selected_object = null
	Editor.is_editing_object = false
	
	if (Interface.panel !== null) {
		Interface.panel.destroy()
		Interface.panel = null
	}

	Editor.selectTool(Editor.MODE_SELECT)
	Editor.selectObjectHelper()
}

//Craete new Program
Editor.createNewProgram = function()
{
	Editor.createDefaultResources()

	//Create new program
	Editor.program = new Program();
	Editor.program.addDefaultScene(Editor.default_material);
	Editor.resetEditingFlags();

    // Reset open file
    Editor.setOpenFile(null)

    // Reset the folder explorer tree
	Interface.folders_explorers.clear()
    Editor.CURRENT_PATH = "/"
	
    //Remove old tabs from interface
	if(Interface.tab !== undefined)
	{
		Interface.tab.clear()
		var scene = Interface.tab.addTab("scene", Interface.file_dir + "Icons/Tab/Scene.png", true)
		var canvas = new SceneEditor(scene.element)
		canvas.setScene(Editor.program.scene)
		scene.attachComponent(canvas)
		Interface.tab.selectTab(0)
	}
}

//Save program to file
Editor.saveProgram = function(fname, compressed)
{
    if(fname === undefined && Editor.open_file !== null) {
        fname = Editor.open_file
    }

	if (compressed) {
		var json = JSON.stringify(Editor.program.toJSON())
	} else {
		var output = Editor.program.toJSON()
		var json = JSON.stringify(output, null, "\t").replace(/[\n\t]+([\d\.e\-\[\]]+)/g, "$1")
	}

	FileSystem.writeFile(fname, json)

    if(Editor.open_file === null) {
        Editor.setOpenFile(fname)
    }
}

//Load program from file
Editor.loadProgram = function(fname)
{
	// Dispose old program
	if (Editor.program !== null) {
		Editor.program.dispose()
	}

	// Load program data file
	var loader = new ObjectLoader();
	var data = JSON.parse(FileSystem.readFile(fname));
	var program = loader.parse(data);
	Editor.program = program;
	Editor.resetEditingFlags()
	
	//Remove old tabs from interface
	Interface.tab.clear();

    // Clears the old Folder tree
    Interface.folders_explorers.clear()
    Editor.CURRENT_PATH = "/"

    // Set open file
    Editor.setOpenFile(fname)

	//Add new scene tab to interface
	if(Editor.program.scene !== null)
	{
		var scene = Interface.tab.addTab("scene", Interface.file_dir + "Icons/Tab/Scene.png", true);
		var editor = new SceneEditor(scene.element);
		editor.setScene(Editor.program.scene);
		scene.attachComponent(editor);
		Interface.tab.selectTab(0);
	}
}

// Set currently open file (also updates the editor title)
Editor.setOpenFile = function(fname) {
    Editor.open_file = (fname !== undefined) ? fname : null

    if(fname === null) {
        document.title = PHANTANIZER.NAME + " " + PHANTANIZER.VERSION + " (" + PHANTANIZER.TIMESTAMP + ")"
    } else {
        document.title = PHANTANIZER.NAME + " " + PHANTANIZER.VERSION + " (" + PHANTANIZER.TIMESTAMP + ") (" + fname + ")"
    }
}

//Export web project
Editor.exportWebProject = function(dir)
{
	FileSystem.makeDirectory(dir)
	FileSystem.copyFile("Binaries/Runtime/vr.png", dir + "/vr.png")
	FileSystem.copyFile("Binaries/Runtime/fullscreen.png", dir + "/fullscreen.png")
	FileSystem.copyFile("Binaries/Runtime/index.html", dir + "/index.html")
	FileSystem.copyFile("Binaries/Phantanizer.min.js", dir + "/Phantanizer.min.js")

	Editor.saveProgram(dir + "/app.isp", true)
}

//Export windows project
Editor.exportWindowsProject = function(dir)
{
	Editor.exportWebProject(dir);

	FileSystem.copyFolder("nwjs", dir + "/nwjs")
	FileSystem.writeFile(dir + "/package.json", JSON.stringify({name: Editor.program.name,main: "index.html",window:{frame: true}}))
}

// Get an asset through its UUID
Editor.getAssetByUUID = function(uuid) {
	if (Interface.asset_explorer.files !== undefined && Interface.asset_explorer.files.length > 0) {
		for(var i = 0; i < Interface.asset_explorer.files.length; i++) {

			// If it's a file
			if (Interface.asset_explorer.files[i].material !== undefined) {
				if (Interface.asset_explorer.files[i].material.uuid === uuid) {
					return Interface.asset_explorer.files[i].material
				}
			}

		}
	}
}

//Set editor state
Editor.setState = function(state)
{
	if(state === Editor.STATE_EDITING)
	{
		//Dispose running program
		Editor.disposeRunningProgram();

		//Set run button text
		Interface.run.setText("Run");
		Interface.run.visible = true;
		Interface.run.updateInterface();

		//Hide fullscreen and VR buttons
		var tab = Interface.tab.getActual();
		if(tab instanceof SceneEditor)
		{
			tab.show_buttons_tools = true
			tab.show_buttons_fullscreen = false;
			tab.show_buttons_vr = false;
			tab.updateInterface();
		}
	}
	else if(state === Editor.STATE_TESTING)
	{
		// Register all the nodes
		Register.registerAll()

		//Copy program
		Editor.program_running = Editor.program.clone();

		//Use editor camera as default camera for program
		Editor.program_running.default_camera = Editor.camera;
		Editor.program_running.renderer = Editor.renderer;

		//Initialize scene
		Editor.program_running.initialize();
		Editor.program_running.resize(Editor.canvas.width, Editor.canvas.height);

		//Show full screen and VR buttons
		var tab = Interface.tab.getActual();
		tab.show_buttons_fullscreen = true;
		tab.show_buttons_tools = false

		//If program uses VR set button
		if(Editor.program_running.vr)
		{
			if(Editor.webvrAvailable())
			{
				Editor.vr_effect = new THREE.VREffect(Editor.renderer)
				
				// Show VR button
				tab.show_buttons_vr = true

				// Create VR switch callback
				var vr = true
				tab.vr_button.setCallback(function() {
					// TODO: Change this
				})
			}
		}

		// Update tab to show buttons
		tab.updateInterface()

		// Set renderer size
		Editor.renderer.setViewport(0, 0, Editor.canvas.width, Editor.canvas.height)
		Editor.renderer.setScissor(0, 0, Editor.canvas.width, Editor.canvas.height)

		// Set run button text
		Interface.run.setText("Stop")
		Interface.run.visible = true
		Interface.run.updateInterface()
	}
	else if(state === Editor.STATE_IDLE)
	{
		//Dispose running program
		Editor.disposeRunningProgram();

		//Hide run button
		Interface.run.visible = false;
		Interface.run.updateInterface();
	}

	//Set editor state
	Editor.state = state;
}

//Dispose running program if there is one
Editor.disposeRunningProgram = function()
{
	//Dispose running program if there is one
	if(Editor.program_running !== null)
	{
		Editor.program_running.dispose();
		Editor.program_running = null;
		Editor.vr_effect = null;
	}

	//Unlock mouse
	Mouse.setLock(false);
}

//Set performance meter to be used
Editor.setPerformanceMeter = function(stats)
{
	Editor.stats = stats;
}

//Set render canvas
Editor.setRenderCanvas = function(canvas)
{
	Mouse.setCanvas(canvas);
	Editor.canvas = canvas;
	Editor.initializeRenderer(canvas);
}

//Initialize renderer
Editor.initializeRenderer = function(canvas)
{
	Editor.renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: Settings.render.antialiasing});
	Editor.renderer.setSize(canvas.width, canvas.height);
	Editor.renderer.autoClear = false;
	Editor.renderer.shadowMap.enabled = Settings.render.shadows;
	Editor.renderer.shadowMap.type = Settings.render.shadows_type;
	Editor.gl = Editor.renderer.context
}

// Set fullscreen mode
Editor.setFullscreen = function(fullscreen, element) {
	Editor.fullscreen = fullscreen

	if (fullscreen) {
		if (element === undefined) {
			element = document.body
		}

		element.requestFullscreen = element.requestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen || element.msRequestFullscreen

		if (element.requestFullscreen) {
			element.requestFullscreen()
		}
	} else {
		document.exitFullscreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen

		if (document.exitFullscreen) {
			document.exitFullscreen()
		}
	}
}

// Check if webvr is available
Editor.webvravailable = function() {
	return (navigator.getVRDisplays !== undefined)
}

// Opens a different window
Editor.openWindow = function(options) {
	
	var title = (options.title !== undefined) ? options.title : Editor.NAME
	var w = (options.width !== undefined) ? options.width : 800
	var h = (options.height !== undefined) ? options.height : 600

	var wind = window.open("", "", "width="+w+", height="+h+", location=no, status=no, menubar=no, titlebar=no, fullscreen=yes")
	wind.document.write(`<head><title>${title}</title></head><body oncontextmenu='return false'></body>`)

	// transfer files
	wind.document.write("<script src='Editor/Editor.js'></script>")

	wind.document.close()

	wind.window.editor = Editor

	return wind
}

//Exit editor
Editor.exit = function()
{
	Settings.store()

	if (Editor.gui !== undefined) {
		Editor.gui.App.closeAllWindows()
		Editor.gui.App.quit()
		process.exit()
	}
}

// Include javascript or css file in project
function include(file, onload) {
	if(file.endsWith(".js")) {
		var js = document.createElement("script")
		js.src = file
		js.type = "text/javascript"
		js.async = false

		if(onload) {
			js.onload = onload;
		}

		document.body.appendChild(js)
	} else if(file.endsWith(".css")) {
		var css = document.createElement("link")
		css.href = file
		css.rel = "stylesheet"
		document.body.appendChild(css)
	} else if(file.endsWith("*")) {
		if(Editor.fs !== undefined) {
			var directory = file.replace("*", "")
			var files = Editor.fs.readdirSync(directory)
			for(var i = 0; i < files.length; i++) {
				include(directory + files[i])
			}
		}
	} else {
		if(Editor.fs !== undefined) {
			var directory = file + "/"
			try {
				var files = Editor.fs.readdirSync(directory)
				for(var i = 0; i < files.length; i++) {
					include(directory + files[i])
				}
			}
			catch(e){}
		}
	}
} 
