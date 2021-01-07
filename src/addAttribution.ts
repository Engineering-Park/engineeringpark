export interface Args {
  entity: Entity; // the entity to which to attach the attribution text
  text: string; // the attribution text
  position?: Vector3; // the position relative to the parent
  rotation?: Quaternion; // the rotation relative to the parent
  scale?: Vector3; // the scale relative to the parent
}

export default function addAttribution({
  entity,
  text,
  position = new Vector3(0, 0, 0),
  rotation = new Quaternion(0, 0, 0, 1),
  scale = new Vector3(1, 1, 1)
}: Args) {
  const textEntity = new Entity(entity.name + "_attribution");
  const textTransform = new Transform({
    position,
    rotation,
    scale
  });
  textEntity.addComponentOrReplace(textTransform);

  const attribution = new TextShape(text);
  attribution.fontSize = 2;
  attribution.color = Color3.Black();
  attribution.opacity = 0.5;
  textEntity.addComponent(attribution);

  textEntity.setParent(entity);
}
