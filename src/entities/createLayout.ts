import { Layout, Shape } from "../se-toolkit/createStaticModelLayout";

export interface Args {
  layout: Layout; // the layout to add
  position?: Vector3; // the position relative to the parent
  rotation?: Quaternion; // the rotation relative to the parent
  scale?: Vector3; // the scale relative to the parent
}

export default function createLayout({
  layout,
  position = new Vector3(0, 0, 0),
  rotation = new Quaternion(0, 0, 0, 1),
  scale = new Vector3(1, 1, 1)
}: Args): Entity {
  const entity = new Entity("layout_anchor");
  entity.addComponentOrReplace(new Transform({ position, rotation, scale }));

  const layoutEntity = new Entity("layout");
  layoutEntity.addComponentOrReplace(
    new Transform({
      position: new Vector3(-layout.width / 2, layout.height + 1, 0),
      rotation: Quaternion.Euler(90, 0, 0)
    })
  );
  layoutEntity.setParent(entity);

  layout.shapes.forEach(shape => createShape(shape).setParent(layoutEntity));

  return entity;
}

const createShape = (shape: Shape): Entity => {
  const entity = new Entity(shape.name);
  entity.addComponentOrReplace(
    new Transform({
      position: new Vector3(shape.position.x, 0, shape.position.y),
      rotation: Quaternion.Euler(90, 0, 0),
      scale: new Vector3(shape.width, shape.height, 0.5)
    })
  );

  const box = new BoxShape();
  entity.addComponentOrReplace(box);

  createName(shape).setParent(entity);

  return entity;
};

const createName = (shape: Shape): Entity => {
  const entity = new Entity(shape.name);
  entity.addComponentOrReplace(
    new Transform({
      position: new Vector3(0, 0, 0.51),
      rotation: Quaternion.Euler(180, 0, 0),
      scale: new Vector3(1, 1, 1)
    })
  );

  const text = new TextShape(shape.name);
  text.fontSize = 2;
  text.color = Color3.Black();
  entity.addComponent(text);

  return entity;
};
