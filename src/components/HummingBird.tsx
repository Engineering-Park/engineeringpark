import { createElement, Vector3Component } from 'metaverse-api'
import { BirdAction } from '../store/scene/types'

export interface Props {
  key: string;
  position: Vector3Component;
  action: BirdAction;
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
          { clip: "Bird_fly" , playing: true, loop:true },
          { clip: "Bird_look" , playing: props.action == 'looking' },
          { clip: "Bird_shake" , playing: props.action == 'shaking' }
        ]}
      />
    </entity>
  );
}
