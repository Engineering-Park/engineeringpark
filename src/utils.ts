import { Vector3Component } from 'metaverse-api'

export function sleep(ms: number = 0) {
  return new Promise(r => setTimeout(r, ms));
}

export function distanceBetweenTwoPoints(p1: Vector3Component, p2: Vector3Component) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const dz = p1.z - p2.z;

  const dxy = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  const dxz = Math.sqrt(Math.pow(dx, 2) + Math.pow(dz, 2));

  return Math.sqrt(Math.pow(dxy, 2) + Math.pow(dxz, 2));
}
