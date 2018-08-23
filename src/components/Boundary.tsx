import { createElement, ISimplifiedNode, Vector3Component } from 'metaverse-api'
import { parcelDisplacement, Parcel } from '../utils';

const baseParcel: Parcel = {x:69, z:49};

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
      {createNorthWall()}
      {createEastWall()}
      {createSouthWall()}
      {createWestWall()}
      {createExtraBits()}
    </entity>
  );
}

function createNorthWall() {
  let wall: ISimplifiedNode[] = [];

  const corner1: Parcel = {x:65, z:49};
  const corner2: Parcel = {x:72, z:49};

  const numWallSections = corner2.x - corner1.x;
  for (let i = 0; i <= numWallSections; i++) {
    const d = parcelDisplacement(baseParcel, {x:corner1.x + i, z:corner1.z});
    wall.push(createWallSection({x:d.x, y:0, z:d.z}));
  }
  return wall;
}

function createEastWall() {
  let wall: ISimplifiedNode[] = [];

  const corner1: Parcel = {x:65, z:49};
  const corner2: Parcel = {x:65, z:38};

  const numWallSections = corner1.z - corner2.z;
  for (let i = 0; i <= numWallSections; i++) {
    const d = parcelDisplacement(baseParcel, {x:corner1.x, z:corner1.z - i});
    wall.push(createWallSection({x:d.x, y:0, z:d.z}, {x:0, y:-90, z:0}));
  }
  return wall;
}

function createSouthWall() {
  let wall: ISimplifiedNode[] = [];

  const corner1: Parcel = {x:65, z:38};
  const corner2: Parcel = {x:71, z:38};

  const numWallSections = corner2.x - corner1.x;
  for (let i = 0; i <= numWallSections; i++) {
    const d = parcelDisplacement(baseParcel, {x:corner1.x + i, z:corner1.z});
    wall.push(createWallSection({x:d.x, y:0, z:d.z}, {x:0, y:180, z:0}));
  }
  return wall;
}

function createWestWall() {
  let wall: ISimplifiedNode[] = [];

  const corner1: Parcel = {x:71, z:48};
  const corner2: Parcel = {x:71, z:38};

  const numWallSections = corner1.z - corner2.z;
  for (let i = 0; i <= numWallSections; i++) {
    const d = parcelDisplacement(baseParcel, {x:corner1.x, z:corner1.z - i});
    wall.push(createWallSection({x:d.x, y:0, z:d.z}, {x:0, y:90, z:0}));
  }
  return wall;
}

function createExtraBits() {
  let wall: ISimplifiedNode[] = [];

  const bit: Parcel = {x:72, z:49};
  const d = parcelDisplacement(baseParcel, bit);

  wall.push(createWallSection({x:d.x, y:0, z:d.z}, {x:0, y:90, z:0}));
  wall.push(createWallSection({x:d.x, y:0, z:d.z}, {x:0, y:180, z:0}));

  return wall;
}

function createWallSection(position: Vector3Component, rotation: Vector3Component = {x:0, y:0, z:0}) {
  return (
    <entity position={position} rotation={rotation}>
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
