import * as DCL from 'decentraland-api'

export interface Props {
  id: string;
  value: string;
  position: DCL.Vector3Component;
  color: string | number;
}

export const Pedestal = (props: Props) => {
  return (
    <entity position={props.position}>
      <gltf-model
        src='assets/models/pedestal.gltf'
      />
      <text
        value={props.value}
        position={{ x: 0, y: 1.0, z: 0 }}
        width={0.6}
        height={0.35}
        fontFamily='Georgia'
        fontSize={40}
        color={'#ffff00'}
        outlineColor='#0000ff'
        outlineWidth={1}
        textWrapping={true}
        billboard={7}
      />
    </entity>
  );
}
