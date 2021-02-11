import addSound from "../components/addSound";
import addAttribution from "../entities/addAttribution";
import createGltfShape from "../entities/createGltfShape";
import createScene, { SceneArgs } from "../entities/createScene";
import FlightSystem from "../systems/FlightSystem";

export default function createParachuteScene({
  name,
  location
}: SceneArgs): Entity {
  const scene = createScene({ name, location });

  const parachute = createGltfShape({
    model: "parachute.glb",
    name: "Parachute",
    position: new Vector3(8, 1, 8),
    scale: new Vector3(0.25, 0.25, 0.25)
  });
  parachute.setParent(scene);

  addAttribution({
    entity: parachute,
    text: "CC-BY: Poly by Google",
    position: new Vector3(0, 0, -2),
    rotation: Quaternion.Euler(0, -90, 0)
  });

  addSound({ entity: parachute, sound: "parachute.mp3" });

  engine.addSystem(new FlightSystem(parachute, -0.5, 3));

  return scene;
}
