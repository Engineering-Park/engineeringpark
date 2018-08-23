import { createElement, ISimplifiedNode, Vector3Component } from 'metaverse-api'
import { parcelDisplacement, Parcel } from '../utils';

export const Boundary = () => {
  return (
    <entity id='boundary'>
      <material
        id="pane_material1"
        albedoTexture="assets/Inky_Smoke.png"
        hasAlpha
      />
      <material
        id="pane_material2"
        albedoTexture="assets/Ink_Drop.png"
        hasAlpha
      />
      {createWall()}
    </entity>
  );
}

function createWall() {
  let wall: ISimplifiedNode[] = [];

  const baseParcel: Parcel = {x: 69, z:49};
  const eastCorner: Parcel = {x: 65, z:49};
  const westCorner: Parcel = {x: 72, z:49};

  const numWallSections = westCorner.x - eastCorner.x;
  for (let i = 0; i <= numWallSections; i++) {
    const d = parcelDisplacement(baseParcel, {x: eastCorner.x + i, z: eastCorner.z});
    wall.push(createWallSection({x: d.x, y: 0, z: d.z}));
  }
  return wall;
}

function createWallSection(position: Vector3Component) {
  return (
    <entity position={position}>
      <plane
        id='pane1'
        position={{x:-2.99, y:2, z:4.99}}
        scale={{ x:4, y:4, z:1 }}
        material="#pane_material1"
      />
      <plane
        id='pane2'
        position={{x:0, y:2, z:4.99}}
        scale={{ x:2, y:4, z:1 }}
        material="#pane_material2"
      />
      <plane
        id='pane3'
        position={{x:2.99, y:2, z:4.99}}
        scale={{ x:4, y:4, z:1 }}
        material="#pane_material1"
      />
    </entity>
  );
}
