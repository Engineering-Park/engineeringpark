import { createElement, Vector3Component } from "metaverse-api";

export interface IProps {
  position: Vector3Component;
  activePanel: Panel | null;
}

export enum Panel {
  GREEN = "green",
  RED = "red",
  YELLOW = "yellow",
  BLUE = "blue"
}

export const Panels = (props: IProps) => {
  return (
    <entity id="panels" position={props.position}>
      <gltf-model
        src="assets/Simon.gltf"
        position={{ x: 0, y: 0.5, z: 0 }}
        rotation={{ x: 90, y: 0, z: 0 }}
        scale={{ x: 0.5, y: 0.5, z: 0.5 }}
      />
      <entity position={{ x: 0, y: 0, z: 0.04 }}>
        <plane
          id={Panel.GREEN}
          position={{ x: -0.5, y: 1, z: 0 }}
          color={props.activePanel === Panel.GREEN ? "#00FF00" : "#002200"}
        />
        <plane
          id={Panel.RED}
          position={{ x: 0.5, y: 1, z: 0 }}
          color={props.activePanel === Panel.RED ? "#FF0000" : "#220000"}
        />
        <plane
          id={Panel.YELLOW}
          position={{ x: -0.5, y: 0, z: 0 }}
          color={props.activePanel === Panel.YELLOW ? "#FFFF00" : "#222200"}
        />
        <plane
          id={Panel.BLUE}
          position={{ x: 0.5, y: 0, z: 0 }}
          color={props.activePanel === Panel.BLUE ? "#0000FF" : "#000022"}
        />
      </entity>
    </entity>
  );
};
