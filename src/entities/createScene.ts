import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";

export interface Args {
  name: string; // the name of the scene
  location: Location; // the location of the entity in the DCL LAND coordinate system
  position?: Vector2; // the position in meters relative to the south west corner of the parcel where the scene is located
  heading?: number; // the rotation of the scene around its vertical axis in degrees (north = 0 degrees, east = 90 degrees, etc.)
}

export default function createScene({
  name,
  location,
  position = new Vector2(0, 0),
  heading = 0
}: Args): Entity {
  const origin = getCoordinatesRelativeToBase(location);

  const scene = new Entity(name);
  scene.addComponentOrReplace(
    new Transform({
      position: new Vector3(origin.x + position.x, 0, origin.y + position.y),
      rotation: Quaternion.Euler(0, heading, 0)
    })
  );

  return scene;
}
