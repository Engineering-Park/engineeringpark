import createGltfShape from "../entities/createGltfShape";
import createLayout from "../entities/createLayout";
import createScene, { SceneArgs } from "../entities/createScene";
import createStaticModelLayout from "../se-toolkit/createStaticModelLayout";

export default function createStaticSystemStructureScene({
  name,
  location
}: SceneArgs): Entity {
  const scene = createScene({ name, location });

  createGltfShape({
    model: "ConstructionSign_01/ConstructionSign_01.glb",
    name: "UnderConstructionSign",
    position: new Vector3(0, 0, 0),
    rotation: Quaternion.Euler(0, 90, 0)
  }).setParent(scene);

  createLayout({
    layout: createStaticModelLayout(),
    position: new Vector3(12, 0, 4),
    rotation: Quaternion.Euler(0, 135, 0),
    scale: new Vector3(0.5, 0.5, 0.5)
  }).setParent(scene);

  return scene;
}
