import { createElement, Vector3Component } from 'metaverse-api'

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
      {createWallSection({x:0, y:0, z:0})}
      {createWallSection({x:10, y:0, z:0})}
    </entity>
  );
}

function createWallSection(position: Vector3Component) {
  return (
    <entity position={position}>
      <plane
        id='pane1'
        position={{x:-3, y:2, z:4.99}}
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
        position={{x:3, y:2, z:4.99}}
        scale={{ x:4, y:4, z:1 }}
        material="#pane_material1"
      />
    </entity>
  );
}
