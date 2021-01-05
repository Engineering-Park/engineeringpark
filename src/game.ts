import addGltfShape from "./addGltfShape";

// Create a parent entity for the scene
const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

addGltfShape({
  parent: _scene,
  model: "FloorBaseGrass_01/FloorBaseGrass_01.glb",
  name: "FloorBase",
  position: new Vector3(8, 0, 8),
  scale: new Vector3(2, 1, 2)
});

addGltfShape({
  parent: _scene,
  model: "ConstructionSign_01/ConstructionSign_01.glb",
  name: "UnderConstructionSign"
});
