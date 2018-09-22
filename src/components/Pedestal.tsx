import { createElement, Vector3Component } from 'decentraland-api'

export interface Props {
  id: string;
  value: string;
  position: Vector3Component;
  color: string | number;
}

export const Pedestal = (props: Props) => {
  return (
    <entity position={props.position}>
      <box
        id={props.id}
        color={props.color}
        position={{ x: 0, y: 0.3, z: 0 }}
        scale={{ x: 0.45, y: 0.7, z: 0.45 }}
      />
      <box
        id={props.id}
        position={{ x: 0, y: 0.7, z: 0 }}
        color={props.color}
        scale={{ x: 0.55, y: 0.20, z: 0.55 }}
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
