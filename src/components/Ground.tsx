import { createElement } from 'metaverse-api'

export const Ground = () => {
  return (
    <entity position={{x:0, y:0, z:0}}>
      <material
        id="stars_material"
        albedoTexture="assets/stars.png"
      />
      <plane
        id='pane'
        position={{x:0, y:0, z:0}}
        rotation={{x:90, y:0, z:0}}
        scale={{ x:9.99, y:9.99, z:0 }}
        material="#stars_material"
      />
    </entity>
  );
}
