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

  const scene = createLayout({
    layout: createStaticModelLayout(),
    position: new Vector3(origin.x + 8, 0, origin.y + 8),
    rotation: Quaternion.Euler(0, 0, 0),
    scale: new Vector3(0.5, 0.5, 0.5)
  });

  return scene;
}
