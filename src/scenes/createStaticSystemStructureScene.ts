import createGltfShape from "../entities/createGltfShape";
import createLayout from "../entities/createLayout";
import createStaticModelLayout from "../se-toolkit/createStaticModelLayout";
import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";

export interface Args {
  location: Location; // the location of the entity in the DCL LAND coordinate system
}

export default function createStaticSystemStructureScene({
  location
}: Args): Entity {
  const origin = getCoordinatesRelativeToBase(location);

  const scene = new Entity("layout_scene");
  scene.addComponentOrReplace(
    new Transform({ position: new Vector3(origin.x, 0, origin.y) })
  );

  createGltfShape({
    model: "ConstructionSign_01/ConstructionSign_01.glb",
    name: "UnderConstructionSign",
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 90, 0)
  }).setParent(scene);

  createLayout({
    layout: createStaticModelLayout(),
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(0.5, 0.5, 0.5)
  }).setParent(scene);

  return scene;
}
