import createGltfShape from "../entities/createGltfShape";
import createScene, { SceneArgs } from "../entities/createScene";

export default function createBicycleScene({
  name,
  location
}: SceneArgs): Entity {
  const scene = createScene({ name, location });

  createGltfShape({
    model: "Bench_01/Bench_01.glb",
    name: "Bench",
    position: new Vector3(8, 0, 8)
  }).setParent(scene);

  createGltfShape({
    model: "Bicycle_02/Bicycle_02.glb",
    name: "Bicycle",
    position: new Vector3(8, 0, 7.5),
    rotation: new Quaternion(0.1, 0, 0, 1)
  }).setParent(scene);

  return scene;
}
