import utils from "../node_modules/decentraland-ecs-utils/index";

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
    new utils.TriggerComponent(
      triggerBox, //shape
      0, //layer
      0, //triggeredByLayer
      null, //onTriggerEnter
      null, //onTriggerExit
      () => {
        //onCameraEnter
        audioSource.playing = true;
      },
      () => {
        //onCameraExit
        audioSource.playing = false;
      }
    )
  );
}
