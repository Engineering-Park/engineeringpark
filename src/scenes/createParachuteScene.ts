import addAttribution from "../entities/addAttribution";
import addSound from "../entities/addSound";
import createGltfShape from "../entities/createGltfShape";
import FlightSystem from "../systems/FlightSystem";
import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";

export interface Args {
  location: Location; // the location of the entity in the DCL LAND coordinate system
}

export default function createParachuteScene({ location }: Args): Entity {
  const origin = getCoordinatesRelativeToBase(location);

  const parachute = createGltfShape({
    model: "parachute.glb",
    name: "Parachute",
    position: new Vector3(origin.x + 8, 1, origin.y + 8),
    scale: new Vector3(0.25, 0.25, 0.25)
  });

  addAttribution({
    entity: parachute,
    text: "CC-BY: Poly by Google",
    position: new Vector3(0, 0, -2),
    rotation: Quaternion.Euler(0, -90, 0)
  });

  addSound({ entity: parachute, sound: "parachute.mp3" });

  engine.addSystem(new FlightSystem(parachute, -0.5, 3));

  return parachute;
}
