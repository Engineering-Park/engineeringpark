export interface Args {
  parent: Entity; // the parent of the entity
  model: string; // the relative path to the gltf model
  name?: string; // an optional name for the entity
  position?: Vector3; // the position relative to the parent
  rotation?: Quaternion; // the rotation relative to the parent
  scale?: Vector3; // the scale relative to the parent
  attribution?; // Attribution text, for example for a CC license
}

export default function addGltfShape({
  parent,
  model,
  name,
  position = new Vector3(0, 0, 0),
  rotation = new Quaternion(0, 0, 0, 1),
  scale = new Vector3(1, 1, 1),
  attribution
}: Args) {
  const entity = new Entity(name);

  const entityTransform = new Transform({ position, rotation, scale });
  entity.addComponentOrReplace(entityTransform);

  const gltfShape = new GLTFShape(`models/${model}`);
  gltfShape.withCollisions = true;
  gltfShape.isPointerBlocker = true;
  gltfShape.visible = true;
  entity.addComponentOrReplace(gltfShape);

  if (attribution) {
    const textEntity = new Entity(name + "_attribution");
    const textTransform = new Transform({
      position: new Vector3(0, 0, -2),
      rotation: Quaternion.Euler(0, -90, 0)
    });
    textEntity.addComponentOrReplace(textTransform);

    const attributionText = new TextShape(attribution);
    attributionText.fontSize = 2;
    attributionText.color = Color3.Black();
    attributionText.opacity = 0.5;
    textEntity.addComponent(attributionText);

    textEntity.setParent(entity);
  }

  return entity.setParent(parent);
}
