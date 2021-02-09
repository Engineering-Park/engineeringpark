import addVideo from "./components/addVideo";
import createGltfShape from "./entities/createGltfShape";
import createAircraftScene from "./scenes/createAircraftScene";
import createBicycleScene from "./scenes/createBicycleScene";
import createParachuteScene from "./scenes/createParachuteScene";
import createRailwayScene from "./scenes/createRailwayScene";
import createStaticSystemStructureScene from "./scenes/createStaticSystemStructureScene";

// Create a parent entity for the scene
const _scene = new Entity("_scene");
engine.addEntity(_scene);

createGltfShape({
  model: "FloorBaseGrass_01/FloorBaseGrass_01.glb",
  name: "FloorBase",
  position: new Vector3(16, 0, 16),
  scale: new Vector3(2, 1, 2)
}).setParent(_scene);

addVideo({
  parent: _scene,
  video: "Why.mp4",
  position: new Vector3(8, 3, 8),
  rotation: Quaternion.Euler(-15, -135, -10),
  scale: new Vector3(3, (3 * 360) / 640, 1)
});

createBicycleScene({
  location: { east: 68, north: 47 }
}).setParent(_scene);

createAircraftScene({
  location: { east: 68, north: 47 }
}).setParent(_scene);

createParachuteScene({
  location: { east: 68, north: 47 }
}).setParent(_scene);

createRailwayScene({
  location: { east: 68, north: 47 }
}).setParent(_scene);

createStaticSystemStructureScene({
  location: { east: 68, north: 47 }
}).setParent(_scene);
