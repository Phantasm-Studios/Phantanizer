"use strict"

//List of object icon path by object type
function ObjectIcons(){}

//Create icon map
ObjectIcons.icons = []

//Default icon
ObjectIcons.icons["Object3D"] = "Editor/Files/Icons/Tab/Scene.png"

//Devices
ObjectIcons.icons["Kinect"] = "Editor/Files/Icons/Hw/Kinect.png"
ObjectIcons.icons["LeapDevice"] = "Editor/Files/Icons/Hw/Leap.png"

//Ligths
ObjectIcons.icons["Sky"] = "Editor/Files/Icons/Lights/Sky.png"
ObjectIcons.icons["SpotLight"] = "Editor/Files/Icons/Lights/Spot.png"
ObjectIcons.icons["PointLight"] = "Editor/Files/Icons/Lights/Point.png"
ObjectIcons.icons["HemisphereLight"] = "Editor/Files/Icons/Lights/Hemisphere.png"
ObjectIcons.icons["DirectionalLight"] = "Editor/Files/Icons/Lights/Directional.png"
ObjectIcons.icons["AmbientLight"] = "Editor/Files/Icons/Lights/Ambient.png"

//Cameras
ObjectIcons.icons["PerspectiveCamera"] = "Editor/Files/Icons/Camera/Perspective.png"
ObjectIcons.icons["OrthographicCamera"] = "Editor/Files/Icons/Camera/Orthographic.png"

//Objects
ObjectIcons.icons["SpineAnimation"] = "Editor/Files/Icons/Animation/Spine.png"
ObjectIcons.icons["Mesh"] = "Editor/Files/Icons/Models/Cube.png"
ObjectIcons.icons["SkinnedMesh"] = "Editor/Files/Icons/Animation/Skeleton.png"
ObjectIcons.icons["ParticleEmiter"] = "Editor/Files/Icons/Effects/Particles.png"
ObjectIcons.icons["Script"] = "Editor/Files/Icons/Script/Script.png"
ObjectIcons.icons["BlockScript"] = "Editor/Files/Icons/Script/Blocks.png"
ObjectIcons.icons["Sprite"] = "Editor/Files/Icons/Assets/Image.png"
ObjectIcons.icons["Text3D"] = "Editor/Files/Icons/Models/Text.png"
ObjectIcons.icons["Points"] = "Editor/Files/Icons/Models/Points.png"

//Program
ObjectIcons.icons["Program"] = "Editor/Files/Icons/Script/Script.png"
ObjectIcons.icons["Scene"] = "Editor/Files/Icons/Models/Models.png"

//Audio
ObjectIcons.icons["Audio"] = "Editor/Files/Icons/Assets/Audio.png"

//Physics
ObjectIcons.icons["Physics"] = "Editor/Files/Icons/Physics/Physics.png"

//Others
ObjectIcons.icons["Bone"] = "Editor/Files/Icons/Animation/Bone.png"
ObjectIcons.icons["Group"] = "Editor/Files/Icons/Effects/Empty.png"

//Get icon path from object type
ObjectIcons.get = function(type)
{
	return ObjectIcons.icons[type]
}
