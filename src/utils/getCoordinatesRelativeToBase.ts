import getBaseLocation from "./getBaseLocation";
import { Location } from "./Location";

export interface Args {
  location: Location; // the location of the scene in the DCL LAND coordinate system
}

export default function getCoordinatesRelativeToBase(
  location: Location
): ReadOnlyVector2 {
  const baseLocation = getBaseLocation();
  return {
    x: (location.east - baseLocation.east) * 16,
    y: (location.north - baseLocation.north) * 16
  };
}
