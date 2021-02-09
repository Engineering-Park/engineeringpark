import addGltfShape from "./addGltfShape";
import addVideo from "./addVideo";
import addAttribution from "./entities/addAttribution";
import addSound from "./entities/addSound";
import createParachuteScene from "./scenes/createParachuteScene";
import createRailwayScene from "./scenes/createRailwayScene";
import createStaticSystemStructureScene from "./scenes/createStaticSystemStructureScene";
import FlightSystem from "./systems/FlightSystem";

// Create a parent entity for the scene
const _scene = new Entity("_scene");
engine.addEntity(_scene);

addGltfShape({
  parent: _scene,
  model: "FloorBaseGrass_01/FloorBaseGrass_01.glb",
  name: "FloorBase",
  position: new Vector3(16, 0, 16),
  scale: new Vector3(2, 1, 2)
});

addGltfShape({
  parent: _scene,
  model: "ConstructionSign_01/ConstructionSign_01.glb",
  name: "UnderConstructionSign",
  position: new Vector3(8, 0, 8)
});

addGltfShape({
  parent: _scene,
  model: "Bench_01/Bench_01.glb",
  name: "Bench",
  position: new Vector3(24, 0, 24)
});

addGltfShape({
  parent: _scene,
  model: "Bicycle_02/Bicycle_02.glb",
  name: "Bicycle",
  position: new Vector3(24, 0, 23.5),
  rotation: new Quaternion(0.1, 0, 0, 1)
});

const aircraft = addGltfShape({
  parent: _scene,
  model: "airplane.glb",
  name: "Airplane",
  position: new Vector3(11, 1, 24),
  scale: new Vector3(0.25, 0.25, 0.25)
});

addAttribution({
  entity: aircraft,
  text: "CC Attribution: MaX3Dd",
  position: new Vector3(0, 0, -2),
  rotation: Quaternion.Euler(0, -90, 0)
});

addSound({ entity: aircraft, sound: "aircraft.mp3" });

engine.addSystem(new FlightSystem(aircraft, 0.5, 3));

addVideo({
  parent: _scene,
  video: "Why.mp4",
  position: new Vector3(8, 3, 8),
  rotation: Quaternion.Euler(-15, -135, -10),
  scale: new Vector3(3, (3 * 360) / 640, 1)
});

createParachuteScene({
  location: { east: 68, north: 47 }
}).setParent(_scene);

createRailwayScene({
  location: { east: 68, north: 47 }
}).setParent(_scene);

createStaticSystemStructureScene({
  location: { east: 68, north: 47 }
}).setParent(_scene);
