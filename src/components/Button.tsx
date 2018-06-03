import { createElement, Vector3Component } from "metaverse-api";

export interface IProps {
  position: Vector3Component;
}

export const Button = (props: IProps) => {
  return (
    <entity position={props.position}>
      <gltf-model
        id="start_button"
        src="assets/Simon_Button.gltf"
        rotation={{ x: 90, y: 0, z: 0 }}
        scale={{ x: 0.5, y: 0.5, z: 0.5 }}
      />
    </entity>
  );
};
