// Create a parent entity for the scene
const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

// Add the floor
const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape = new GLTFShape(
  "models/FloorBaseGrass_01/FloorBaseGrass_01.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
entity.addComponentOrReplace(gltfShape);
