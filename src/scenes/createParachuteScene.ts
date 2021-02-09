import addAttribution from "../components/addAttribution";
import addSound from "../components/addSound";
import createGltfShape from "../components/createGltfShape";
import FlightSystem from "../FlightSystem";
import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";

export interface Args {
  location: Location; // the location of the entity in the DCL LAND coordinate system
}

export default function createParachuteScene({ location }: Args): Entity {
  const origin = getCoordinatesRelativeToBase(location);

  const scene = createGltfShape({
    model: "parachute.glb",
    name: "Parachute",
    position: new Vector3(origin.x + 8, 1, origin.y + 8),
    scale: new Vector3(0.25, 0.25, 0.25)
  });

  addAttribution({
    entity: scene,
    text: "CC-BY: Poly by Google",
    position: new Vector3(0, 0, -2),
    rotation: Quaternion.Euler(0, -90, 0)
  });

  addSound({ entity: scene, sound: "parachute.mp3" });

  engine.addSystem(new FlightSystem(scene, -0.5, 3));

  return scene;
}
