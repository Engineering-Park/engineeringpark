const underConstructionSign = new Entity("underConstructionSign");
engine.addEntity(underConstructionSign);
underConstructionSign.setParent(_scene);
const transform3 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
underConstructionSign.addComponentOrReplace(transform3);
const gltfShape2 = new GLTFShape(
  "models/ConstructionSign_01/ConstructionSign_01.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
underConstructionSign.addComponentOrReplace(gltfShape2);
