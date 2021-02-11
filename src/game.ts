import addVideo from "./components/addVideo";
import createGltfShape from "./entities/createGltfShape";
import createScene from "./entities/createScene";
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

const videoScene = createScene({
  name: "video_why",
  location: { east: 69, north: 48 }
});
videoScene.setParent(_scene);

addVideo({
  parent: videoScene,
  video: "Why.mp4",
  position: new Vector3(0, 3, 0),
  rotation: Quaternion.Euler(-15, -135, -10),
  scale: new Vector3(3, (3 * 360) / 640, 1)
});

createBicycleScene({
  name: "scene_bicycle",
  location: { east: 69, north: 48 }
}).setParent(_scene);

createStaticSystemStructureScene({
  name: "scene_sbs",
  location: { east: 69, north: 48 }
}).setParent(_scene);

createAircraftScene({
  name: "scene_aircraft",
  location: { east: 68, north: 48 }
}).setParent(_scene);

createParachuteScene({
  name: "scene_parachute",
  location: { east: 69, north: 47 }
}).setParent(_scene);

createRailwayScene({
  name: "scene_railway",
  location: { east: 68, north: 47 }
}).setParent(_scene);
