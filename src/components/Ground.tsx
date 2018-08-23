import { createElement, ISimplifiedNode, Vector3Component } from 'metaverse-api'
import { parcelDisplacement, Parcel } from '../utils';

const baseParcel: Parcel = {x:69, z:49};

export const Ground = () => {
  return (
    <entity id='ground'>
      <material
        id='stars_material'
        albedoTexture='assets/stars.png'
      />
      <material
        id='water_material'
        albedoTexture='assets/water.png'
      />
      <gltf-model src="assets/Ground.gltf" position={{ x:0, y: 0.1, z:0 }} />
      {createGroundStrip({x:65, z:49}, {x:72, z:49}, 'stars')}
      {createGroundStrip({x:65, z:48}, {x:71, z:48}, 'stars')}
      {createGroundStrip({x:65, z:47}, {x:71, z:47}, 'water')}
      {createGroundStrip({x:65, z:46}, {x:71, z:46}, 'water')}
      {createGroundStrip({x:65, z:45}, {x:71, z:45}, 'water')}
      {createGroundStrip({x:65, z:44}, {x:71, z:44}, 'water')}
      {createGroundStrip({x:65, z:43}, {x:71, z:43}, 'water')}
      {createGroundStrip({x:65, z:42}, {x:71, z:42}, 'water')}
      {createGroundStrip({x:65, z:41}, {x:71, z:41}, 'water')}
      {createGroundStrip({x:65, z:40}, {x:71, z:40}, 'water')}
      {createGroundStrip({x:65, z:39}, {x:71, z:39}, 'water')}
      {createGroundStrip({x:65, z:38}, {x:71, z:38}, 'water')}
    </entity>
  );
}

function createGroundStrip(corner1: Parcel, corner2: Parcel, material: string) {
  let strip: ISimplifiedNode[] = [];

  const numWallSections = corner2.x - corner1.x;
  for (let i = 0; i <= numWallSections; i++) {
    const d = parcelDisplacement(baseParcel, {x:corner1.x + i, z:corner1.z});
    strip.push(createGroundSection({x:d.x, y:0, z:d.z}, material));
  }
  return strip;
}

function createGroundSection(position: Vector3Component, material: string) {
  return (
    <entity position={position}>
      <plane
        id={'pane_'+material}
        position={{x:0, y:0, z:0}}
        rotation={{x:90, y:0, z:0}}
        scale={{ x:9.99, y:9.99, z:0 }}
        material={'#'+material+'_material'}
      />
    </entity>
  );
}
