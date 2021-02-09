import addAttribution from "../components/addAttribution";
import addSound from "../components/addSound";
import createGltfShape from "../components/createGltfShape";
import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";

export interface Args {
  location: Location; // the location of the entity in the DCL LAND coordinate system
}

export default function createStaticSystemStructureScene({
  location
}: Args): Entity {
  const origin = getCoordinatesRelativeToBase(location);

  const scene = createGltfShape({
    model: "train.glb",
    name: "Train",
    position: new Vector3(16, 0.1, 16),
    scale: new Vector3(0.25, 0.25, 0.25)
  });

  addSound({ entity: scene, sound: "train.mp3" });

  addAttribution({
    entity: scene,
    text: "CC Attribution: Spark",
    position: new Vector3(0, 2, 0),
    rotation: Quaternion.Euler(0, -90, 0)
  });

  return scene;
}
