import addAttribution from "../entities/addAttribution";
import addSound from "../components/addSound";
import createGltfShape from "../entities/createGltfShape";
import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";

export interface Args {
  location: Location; // the location of the entity in the DCL LAND coordinate system
}

export default function createRailwayScene({ location }: Args): Entity {
  const origin = getCoordinatesRelativeToBase(location);

  const train = createGltfShape({
    model: "train.glb",
    name: "Train",
    position: new Vector3(origin.x + 8, 0.1, origin.y + 8),
    scale: new Vector3(0.25, 0.25, 0.25)
  });

  addSound({ entity: train, sound: "train.mp3" });

  addAttribution({
    entity: train,
    text: "CC Attribution: Spark",
    position: new Vector3(0, 2, 0),
    rotation: Quaternion.Euler(0, -90, 0)
  });

  return train;
}
