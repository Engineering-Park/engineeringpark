import createGltfShape from "../entities/createGltfShape";
import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";

export interface Args {
  location: Location; // the location of the entity in the DCL LAND coordinate system
}

export default function createBicycleScene({ location }: Args): Entity {
  const origin = getCoordinatesRelativeToBase(location);

  const scene = new Entity("bicycle_scene");
  scene.addComponentOrReplace(
    new Transform({ position: new Vector3(origin.x, 0, origin.y) })
  );

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
