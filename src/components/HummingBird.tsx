import { createElement, ISimplifiedNode, Vector3Component } from 'decentraland-api'
import { HummingbirdAction, HummingbirdsState } from '../store/hummingbirds/types'

export interface Props {
  key: string;
  position: Vector3Component;
  action: HummingbirdAction;
}

export const HummingBird = (props: Props) => {
  return (
    <entity>
      <gltf-model key={props.key}
        src="assets/hummingbird.gltf"
        scale={0.4}
        position={props.position}
        transition={{
          position: { duration: 500, timing: "ease-in-out" }
        }}
        lookAt={props.position}
        skeletalAnimation={[
          { clip: "Bird_fly", playing: true, loop: true },
          { clip: "Bird_look", playing: props.action == 'looking' },
          { clip: "Bird_shake", playing: props.action == 'shaking' }
        ]}
      />
    </entity>
  );
}

export function renderHummingBirds(state: HummingbirdsState) {
  let birds: ISimplifiedNode[] = [];
  for (const i in state.positions) {
    birds.push(
      <HummingBird key={i.toString()} position={state.positions[i]} action={state.actions[i]} />
    );
  }
  return birds;
}
