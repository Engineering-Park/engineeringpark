import * as utils from "@dcl/ecs-scene-utils";

export interface Args {
  entity: Entity; // the entity to which to attach the attribution text
  sound: string; // the relative path to the sound file
}

export default function addSound({ entity, sound }: Args) {
  const audioClip = new AudioClip(`sounds/${sound}`);
  const audioSource = new AudioSource(audioClip);
  audioSource.loop = true;

  entity.addComponent(audioSource);

  const scale = entity.getComponent(Transform).scale;
  let triggerBox = new utils.TriggerBoxShape(
    new Vector3(4 / scale.x, 4 / scale.y, 4 / scale.z),
    Vector3.Zero()
  );
  entity.addComponent(
    new utils.TriggerComponent(triggerBox, {
      onCameraEnter: () => {
        audioSource.playing = true;
      },
      onCameraExit: () => {
        audioSource.playing = false;
      }
    })
  );
}
