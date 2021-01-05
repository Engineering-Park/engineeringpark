export interface Args {
  parent: Entity; // the parent of the entity
  model: string; // the relative path to the gltf model
  name?: string; // an optional name for the entity
  position?: Vector3; // the position relative to the parent
  rotation?: Quaternion; // the rotation relative to the parent
  scale?: Vector3; // the scale relative to the parent
}

export default function addGltfShape({
  parent,
  model,
  name,
  position = new Vector3(0, 0, 0),
  rotation = new Quaternion(0, 0, 0, 1),
  scale = new Vector3(1, 1, 1)
}: Args) {
  const entity = new Entity(name);
  engine.addEntity(entity);
  entity.setParent(parent);

  const transform3 = new Transform({ position, rotation, scale });
  entity.addComponentOrReplace(transform3);

  const gltfShape = new GLTFShape(`models/${model}`);
  gltfShape.withCollisions = true;
  gltfShape.isPointerBlocker = true;
  gltfShape.visible = true;
  entity.addComponentOrReplace(gltfShape);
}
