import { createElement } from 'metaverse-api'

export const Boundary = () => {
  return (
    <entity position={{x:0, y:0, z:0}}>
      <material
        id="pane_material1"
        albedoTexture="assets/Inky_Smoke.png"
        hasAlpha
      />
      <plane
        id='pane1'
        position={{x:0, y:2, z:4.99}}
        scale={{ x:4, y:4, z:1 }}
        material="#pane_material1"
      />
      <material
        id="pane_material2"
        albedoTexture="assets/Ink_Drop.png"
        hasAlpha
      />
      <plane
        id='pane2'
        position={{x:10, y:2, z:4.99}}
        scale={{ x:2, y:4, z:1 }}
        material="#pane_material2"
      />
    </entity>
  );
}
