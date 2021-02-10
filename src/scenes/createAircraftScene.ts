import addAttribution from "../entities/addAttribution";
import addSound from "../components/addSound";
import createGltfShape from "../entities/createGltfShape";
import FlightSystem from "../systems/FlightSystem";
import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";
import createScene from "../entities/createScene";

export interface Args {
  name: string; // the name of the scene
  location: Location; // the location of the entity in the DCL LAND coordinate system
}

export default function createAircraftScene({ name, location }: Args): Entity {
  const scene = createScene({ name, location });

  createGltfShape({
    model: "FloorBaseGrass_01/FloorBaseGrass_01.glb",
    name: "FloorBase",
    position: new Vector3(8, 0, 8)
  }).setParent(scene);

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
