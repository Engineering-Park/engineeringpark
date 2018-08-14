import { createElement, Vector3Component } from 'metaverse-api'

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
      {createGroundSection({x:0, y:0, z:0}, 'stars')}
      {createGroundSection({x:10, y:0, z:0}, 'water')}
    </entity>
  );
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
