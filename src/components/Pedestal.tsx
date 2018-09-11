import { createElement, Vector3Component } from 'decentraland-api'

export interface Props {
  id: string;
  position: Vector3Component;
  color: string | number;
}

export const Pedestal = (props: Props) => {
  return (
    <entity position={props.position}>
      <box
        id={props.id}
        color={props.color}
        scale={{ x: 0.45, y: 0.7, z: 0.45 }}
      />
      <box
        id={props.id}
        position={{ x: 0, y: 0.3, z: 0 }}
        color={props.color}
        scale={{ x: 0.55, y: 0.20, z: 0.55 }}
      />
    </entity>
  );
}
