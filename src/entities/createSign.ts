export interface Args {
  position?: Vector2; // the position relative to the parent
}

export default function createSign({
  position = new Vector2(0, 0)
}: Args): Entity {
  const anchor = new Entity("sign_anchor");
  anchor.addComponentOrReplace(
    new Transform({
      position: new Vector3(position.x, 0, position.y)
    })
  );

  const shape = new Entity("se-toolkit-sign");
  shape.addComponentOrReplace(
    new Transform({
      position: new Vector3(0, 1, 0),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(3, 0.7, 0.1)
    })
  );

  const box = new BoxShape();
  shape.addComponentOrReplace(box);

  const primaryColour = new Material();
  primaryColour.albedoColor = Color3.FromHexString("#0d47a1");
  shape.addComponent(primaryColour);

  shape.addComponent(
    new OnPointerDown(() => {
      openExternalURL("https://se-toolkit.app");
    })
  );

  const textEntity = new Entity("sign_text");
  textEntity.addComponentOrReplace(
    new Transform({
      position: new Vector3(0, 1, 0.11),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(1, 1, 1)
    })
  );
  textEntity.setParent(anchor);

  const text = new TextShape(
    "Systems Engineering Toolkit\n<i>se-toolkit.app</i>"
  );
  text.fontSize = 2;
  text.color = Color3.White();
  textEntity.addComponent(text);

  shape.setParent(anchor);
  return anchor;
}
