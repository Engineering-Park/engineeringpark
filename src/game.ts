import addAttribution from "./addAttribution";
import addGltfShape from "./addGltfShape";
import FlightSystem from "./FlightSystem";

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

engine.addSystem(new FlightSystem(aircraft, 0.5, 3));

const parachute = addGltfShape({
  parent: _scene,
  model: "parachute.glb",
  name: "Parachute",
  position: new Vector3(27, 1, 8),
  scale: new Vector3(0.25, 0.25, 0.25)
});

addAttribution({
  entity: parachute,
  text: "CC-BY: Poly by Google",
  position: new Vector3(0, 0, -2),
  rotation: Quaternion.Euler(0, -90, 0)
});

engine.addSystem(new FlightSystem(parachute, -0.5, 3));
