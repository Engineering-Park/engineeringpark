export interface Vector2 {
  x: number,
  z: number
}

export interface Parcel {
  x: number,
  z: number
}

export function parcelDisplacement(start: Parcel, end: Parcel): Vector2 {
  const displacement: Vector2 = {x: 0, z: 0};
    displacement.x = (end.x - start.x)*10;
    displacement.z = (end.z - start.z)*10;
  return displacement;
}
