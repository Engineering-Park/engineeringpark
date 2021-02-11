import addSound from "../components/addSound";
import addAttribution from "../entities/addAttribution";
import createGltfShape from "../entities/createGltfShape";
import createScene, { SceneArgs } from "../entities/createScene";

export default function createRailwayScene({
  name,
  location
}: SceneArgs): Entity {
  const scene = createScene({ name, location });

  const train = createGltfShape({
    model: "train.glb",
    name: "Train",
    position: new Vector3(8, 0.1, 8),
    scale: new Vector3(0.25, 0.25, 0.25)
  });
  train.setParent(scene);

  addSound({ entity: train, sound: "train.mp3" });

  addAttribution({
    entity: train,
    text: "CC Attribution: Spark",
    position: new Vector3(0, 2, 0),
    rotation: Quaternion.Euler(0, -90, 0)
  });

  return scene;
}
