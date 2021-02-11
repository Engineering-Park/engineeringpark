import addSound from "../components/addSound";
import addAttribution from "../entities/addAttribution";
import createGltfShape from "../entities/createGltfShape";
import createScene, { SceneArgs } from "../entities/createScene";
import FlightSystem from "../systems/FlightSystem";

export default function createAircraftScene({
  name,
  location
}: SceneArgs): Entity {
  const scene = createScene({ name, location });

  const aircraft = createGltfShape({
    model: "airplane.glb",
    name: "Airplane",
    position: new Vector3(8, 1, 8),
    scale: new Vector3(0.25, 0.25, 0.25)
  });
  aircraft.setParent(scene);

  addAttribution({
    entity: aircraft,
    text: "CC Attribution: MaX3Dd",
    position: new Vector3(0, 0, -2),
    rotation: Quaternion.Euler(0, -90, 0)
  });

  addSound({ entity: aircraft, sound: "aircraft.mp3" });

  engine.addSystem(new FlightSystem(aircraft, 0.5, 3));

  return scene;
}
