import { createElement, Vector3Component } from 'metaverse-api'

export interface Props {
  id: string;
  position: Vector3Component;
  opacity: number;
}

export const Pane = (props: Props) => {
  return (
    <entity position={props.position}>
      <material
        id="pane_material"
        albedoColor="#c6ffce"
        alpha={props.opacity}
      />
      <plane material="#pane_material"
        id={props.id}
        scale={{ x: 10, y: 1, z: 1 }}
      />
    </entity>
  );
}
