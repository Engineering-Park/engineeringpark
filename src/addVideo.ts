export interface Args {
  parent: Entity; // the parent of the video entity
  video: string; // the relative path to the video
  position?: Vector3; // the position relative to the parent
  rotation?: Quaternion; // the rotation relative to the parent
  scale?: Vector3; // the scale relative to the parent
}

export default function addGltfShape({
  parent,
  video,
  position = new Vector3(0, 0, 0),
  rotation = new Quaternion(0, 0, 0, 1),
  scale = new Vector3(1, 1, 1)
}: Args) {
  const screen = new Entity(parent.name + "_video");

  const screenTransform = new Transform({ position, rotation, scale });
  screen.addComponentOrReplace(screenTransform);

  const videoClip = new VideoClip(`videos/${video}`);
  const videoTexture = new VideoTexture(videoClip);
  const material = new BasicMaterial();
  material.texture = videoTexture;

  screen.addComponent(new PlaneShape());
  screen.addComponent(material);
  screen.addComponent(
    new OnPointerDown(() => {
      videoTexture.playing = !videoTexture.playing;
    })
  );

  screen.setParent(parent);
  return screen;
}
