import createGltfShape from "../entities/createGltfShape";
import createScene, { SceneArgs } from "../entities/createScene";

export default function createBicycleScene({
  name,
  location
}: SceneArgs): Entity {
  const scene = createScene({ name, location, heading: 90 });

  const terminal = new Entity("terminal");
  engine.addEntity(terminal);
  terminal.setParent(scene);
  const gltfShape = new GLTFShape("models/Terminal_01/Terminal_01.glb");
  gltfShape.withCollisions = true;
  gltfShape.isPointerBlocker = true;
  gltfShape.visible = true;
  terminal.addComponentOrReplace(gltfShape);
  const transform2 = new Transform({
    position: new Vector3(3, 0, 23),
    rotation: new Quaternion(0, -0.2902846772544624, 0, 0.9569403357322089),
    scale: new Vector3(1, 1, 1)
  });
  terminal.addComponentOrReplace(transform2);

  const mailpost = new Entity("mailpost");
  engine.addEntity(mailpost);
  mailpost.setParent(scene);
  const gltfShape2 = new GLTFShape("models/MailPost_01/MailPost_01.glb");
  gltfShape2.withCollisions = true;
  gltfShape2.isPointerBlocker = true;
  gltfShape2.visible = true;
  mailpost.addComponentOrReplace(gltfShape2);
  const transform3 = new Transform({
    position: new Vector3(3.5, 0, 10.5),
    rotation: new Quaternion(0, 0.29028467725446233, 0, 0.9569403357322089),
    scale: new Vector3(1, 1, 1)
  });
  mailpost.addComponentOrReplace(transform3);

  const bicycleparking = new Entity("bicycleparking");
  engine.addEntity(bicycleparking);
  bicycleparking.setParent(scene);
  const gltfShape3 = new GLTFShape(
    "models/BicycleParking_01/BicycleParking_01.glb"
  );
  gltfShape3.withCollisions = true;
  gltfShape3.isPointerBlocker = true;
  gltfShape3.visible = true;
  bicycleparking.addComponentOrReplace(gltfShape3);
  const transform4 = new Transform({
    position: new Vector3(1.5, 0, 6),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  bicycleparking.addComponentOrReplace(transform4);

  const bicycleparking2 = new Entity("bicycleparking2");
  engine.addEntity(bicycleparking2);
  bicycleparking2.setParent(scene);
  bicycleparking2.addComponentOrReplace(gltfShape3);
  const transform5 = new Transform({
    position: new Vector3(1.5, 0, 30),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  bicycleparking2.addComponentOrReplace(transform5);

  const bicycle = new Entity("bicycle");
  engine.addEntity(bicycle);
  bicycle.setParent(scene);
  const gltfShape4 = new GLTFShape("models/Bicycle_01/Bicycle_01.glb");
  gltfShape4.withCollisions = true;
  gltfShape4.isPointerBlocker = true;
  gltfShape4.visible = true;
  bicycle.addComponentOrReplace(gltfShape4);
  const transform6 = new Transform({
    position: new Vector3(1, 0, 29),
    rotation: new Quaternion(0, 0.9999999999999999, 0, 9.71445146547012e-17),
    scale: new Vector3(1, 1, 1)
  });
  bicycle.addComponentOrReplace(transform6);

  const bicycle2 = new Entity("bicycle2");
  engine.addEntity(bicycle2);
  bicycle2.setParent(scene);
  const gltfShape5 = new GLTFShape("models/Bicycle_02/Bicycle_02.glb");
  gltfShape5.withCollisions = true;
  gltfShape5.isPointerBlocker = true;
  gltfShape5.visible = true;
  bicycle2.addComponentOrReplace(gltfShape5);
  const transform7 = new Transform({
    position: new Vector3(1, 0, 6.5),
    rotation: new Quaternion(0, 1, 0, 1.1102230246251565e-16),
    scale: new Vector3(1, 1, 1)
  });
  bicycle2.addComponentOrReplace(transform7);

  const lamppost = new Entity("lamppost");
  engine.addEntity(lamppost);
  lamppost.setParent(scene);
  const gltfShape6 = new GLTFShape("models/LampPost_01/LampPost_01.glb");
  gltfShape6.withCollisions = true;
  gltfShape6.isPointerBlocker = true;
  gltfShape6.visible = true;
  lamppost.addComponentOrReplace(gltfShape6);
  const transform8 = new Transform({
    position: new Vector3(1.5, 0, 27.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  lamppost.addComponentOrReplace(transform8);

  const lamppost2 = new Entity("lamppost2");
  engine.addEntity(lamppost2);
  lamppost2.setParent(scene);
  lamppost2.addComponentOrReplace(gltfShape6);
  const transform9 = new Transform({
    position: new Vector3(1.5, 0, 8.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  lamppost2.addComponentOrReplace(transform9);

  const canopy = new Entity("canopy");
  engine.addEntity(canopy);
  canopy.setParent(scene);
  const gltfShape7 = new GLTFShape("models/Canopy_01/Canopy_01.glb");
  gltfShape7.withCollisions = true;
  gltfShape7.isPointerBlocker = true;
  gltfShape7.visible = true;
  canopy.addComponentOrReplace(gltfShape7);
  const transform10 = new Transform({
    position: new Vector3(3, 0, 23),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  canopy.addComponentOrReplace(transform10);

  const floorbasepebbles = new Entity("floorbasepebbles");
  engine.addEntity(floorbasepebbles);
  floorbasepebbles.setParent(scene);
  const gltfShape8 = new GLTFShape(
    "models/FloorBasePebbles_01/FloorBasePebbles_01.glb"
  );
  gltfShape8.withCollisions = true;
  gltfShape8.isPointerBlocker = true;
  gltfShape8.visible = true;
  floorbasepebbles.addComponentOrReplace(gltfShape8);
  const transform11 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  floorbasepebbles.addComponentOrReplace(transform11);

  const floorbasepebbles2 = new Entity("floorbasepebbles2");
  engine.addEntity(floorbasepebbles2);
  floorbasepebbles2.setParent(scene);
  floorbasepebbles2.addComponentOrReplace(gltfShape8);
  const transform12 = new Transform({
    position: new Vector3(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  floorbasepebbles2.addComponentOrReplace(transform12);

  const constructionfence = new Entity("constructionfence");
  engine.addEntity(constructionfence);
  constructionfence.setParent(scene);
  const gltfShape9 = new GLTFShape(
    "models/ConstructionFence_02/ConstructionFence_02.glb"
  );
  gltfShape9.withCollisions = true;
  gltfShape9.isPointerBlocker = true;
  gltfShape9.visible = true;
  constructionfence.addComponentOrReplace(gltfShape9);
  const transform13 = new Transform({
    position: new Vector3(6, 0, 8.5),
    rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
    scale: new Vector3(1, 1, 1)
  });
  constructionfence.addComponentOrReplace(transform13);

  const constructionladder = new Entity("constructionladder");
  engine.addEntity(constructionladder);
  constructionladder.setParent(scene);
  const gltfShape10 = new GLTFShape(
    "models/ConstructionLadder_01/ConstructionLadder_01.glb"
  );
  gltfShape10.withCollisions = true;
  gltfShape10.isPointerBlocker = true;
  gltfShape10.visible = true;
  constructionladder.addComponentOrReplace(gltfShape10);
  const transform14 = new Transform({
    position: new Vector3(10.5, 0, 8.5),
    rotation: new Quaternion(0, 0.21323665648145898, 0, 0.9770005774474283),
    scale: new Vector3(1, 1, 1)
  });
  constructionladder.addComponentOrReplace(transform14);

  const canopy2 = new Entity("canopy2");
  engine.addEntity(canopy2);
  canopy2.setParent(scene);
  const gltfShape11 = new GLTFShape("models/Canopy_02/Canopy_02.glb");
  gltfShape11.withCollisions = true;
  gltfShape11.isPointerBlocker = true;
  gltfShape11.visible = true;
  canopy2.addComponentOrReplace(gltfShape11);
  const transform15 = new Transform({
    position: new Vector3(9, 0, 3),
    rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
    scale: new Vector3(1, 1, 1)
  });
  canopy2.addComponentOrReplace(transform15);

  const boombox = new Entity("boombox");
  engine.addEntity(boombox);
  boombox.setParent(scene);
  const gltfShape12 = new GLTFShape("models/Boombox_01/Boombox_01.glb");
  gltfShape12.withCollisions = true;
  gltfShape12.isPointerBlocker = true;
  gltfShape12.visible = true;
  boombox.addComponentOrReplace(gltfShape12);
  const transform16 = new Transform({
    position: new Vector3(
      11.049986683453403,
      0.9231387863913671,
      2.020973234507734
    ),
    rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
    scale: new Vector3(1, 1, 1)
  });
  boombox.addComponentOrReplace(transform16);

  const cardboardbox = new Entity("cardboardbox");
  engine.addEntity(cardboardbox);
  cardboardbox.setParent(scene);
  const gltfShape13 = new GLTFShape(
    "models/CardboardBox_02/CardboardBox_02.glb"
  );
  gltfShape13.withCollisions = true;
  gltfShape13.isPointerBlocker = true;
  gltfShape13.visible = true;
  cardboardbox.addComponentOrReplace(gltfShape13);
  const transform17 = new Transform({
    position: new Vector3(11, 0, 2),
    rotation: new Quaternion(0, -0.0980171403295606, 0, 0.9951847266721969),
    scale: new Vector3(1, 1, 1)
  });
  cardboardbox.addComponentOrReplace(transform17);

  const cardboardbox2 = new Entity("cardboardbox2");
  engine.addEntity(cardboardbox2);
  cardboardbox2.setParent(scene);
  const gltfShape14 = new GLTFShape(
    "models/CardboardBox_01/CardboardBox_01.glb"
  );
  gltfShape14.withCollisions = true;
  gltfShape14.isPointerBlocker = true;
  gltfShape14.visible = true;
  cardboardbox2.addComponentOrReplace(gltfShape14);
  const transform18 = new Transform({
    position: new Vector3(9.713690805806383, 0, 1.7651561434318488),
    rotation: new Quaternion(0, -0.7671988032633387, 0, 0.641409382743425),
    scale: new Vector3(1, 1, 1)
  });
  cardboardbox2.addComponentOrReplace(transform18);

  const chair = new Entity("chair");
  engine.addEntity(chair);
  chair.setParent(scene);
  const gltfShape15 = new GLTFShape("models/Chair_07/Chair_07.glb");
  gltfShape15.withCollisions = true;
  gltfShape15.isPointerBlocker = true;
  gltfShape15.visible = true;
  chair.addComponentOrReplace(gltfShape15);
  const transform19 = new Transform({
    position: new Vector3(
      6.003682066935178,
      1.7763568394002505e-15,
      2.7562263761013437
    ),
    rotation: new Quaternion(0, 0.3394158789935285, 0, 0.9406364128009554),
    scale: new Vector3(1, 1, 1)
  });
  chair.addComponentOrReplace(transform19);

  const constructioncone = new Entity("constructioncone");
  engine.addEntity(constructioncone);
  constructioncone.setParent(scene);
  const gltfShape16 = new GLTFShape(
    "models/ConstructionCone_01/ConstructionCone_01.glb"
  );
  gltfShape16.withCollisions = true;
  gltfShape16.isPointerBlocker = true;
  gltfShape16.visible = true;
  constructioncone.addComponentOrReplace(gltfShape16);
  const transform20 = new Transform({
    position: new Vector3(4.85708465545722, 0, 6.232604284080317),
    rotation: new Quaternion(0, -0.34496106468929516, 0, 0.9386169952906398),
    scale: new Vector3(1, 1, 1)
  });
  constructioncone.addComponentOrReplace(transform20);

  const constructionhat = new Entity("constructionhat");
  engine.addEntity(constructionhat);
  constructionhat.setParent(scene);
  const gltfShape17 = new GLTFShape(
    "models/ConstructionHat_01/ConstructionHat_01.glb"
  );
  gltfShape17.withCollisions = true;
  gltfShape17.isPointerBlocker = true;
  gltfShape17.visible = true;
  constructionhat.addComponentOrReplace(gltfShape17);
  const transform21 = new Transform({
    position: new Vector3(9.5, 0.6305006777516831, 1.6688825761468529),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  constructionhat.addComponentOrReplace(transform21);

  const paintbucket = new Entity("paintbucket");
  engine.addEntity(paintbucket);
  paintbucket.setParent(scene);
  const gltfShape18 = new GLTFShape("models/PaintBucket_01/PaintBucket_01.glb");
  gltfShape18.withCollisions = true;
  gltfShape18.isPointerBlocker = true;
  gltfShape18.visible = true;
  paintbucket.addComponentOrReplace(gltfShape18);
  const transform22 = new Transform({
    position: new Vector3(11.675051303364882, 0, 2.7019263600243004),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  paintbucket.addComponentOrReplace(transform22);

  const wheelbarrow = new Entity("wheelbarrow");
  engine.addEntity(wheelbarrow);
  wheelbarrow.setParent(scene);
  const gltfShape19 = new GLTFShape("models/Wheelbarrow_01/Wheelbarrow_01.glb");
  gltfShape19.withCollisions = true;
  gltfShape19.isPointerBlocker = true;
  gltfShape19.visible = true;
  wheelbarrow.addComponentOrReplace(gltfShape19);
  const transform23 = new Transform({
    position: new Vector3(12.676648697643923, 0, 23.78759862350336),
    rotation: new Quaternion(0, 0.9038759617683957, 0, 0.42779463032775067),
    scale: new Vector3(1, 1, 1)
  });
  wheelbarrow.addComponentOrReplace(transform23);

  const wheelbarrow2 = new Entity("wheelbarrow2");
  engine.addEntity(wheelbarrow2);
  wheelbarrow2.setParent(scene);
  const gltfShape20 = new GLTFShape("models/Wheelbarrow_02/Wheelbarrow_02.glb");
  gltfShape20.withCollisions = true;
  gltfShape20.isPointerBlocker = true;
  gltfShape20.visible = true;
  wheelbarrow2.addComponentOrReplace(gltfShape20);
  const transform24 = new Transform({
    position: new Vector3(11.005561945693046, 0, 25.72991146360021),
    rotation: new Quaternion(0, 0.9817010988379933, 0, 0.19042833964585054),
    scale: new Vector3(1, 1, 1)
  });
  wheelbarrow2.addComponentOrReplace(transform24);

  const constructionpallet = new Entity("constructionpallet");
  engine.addEntity(constructionpallet);
  constructionpallet.setParent(scene);
  const gltfShape21 = new GLTFShape(
    "models/ConstructionPallet_01/ConstructionPallet_01.glb"
  );
  gltfShape21.withCollisions = true;
  gltfShape21.isPointerBlocker = true;
  gltfShape21.visible = true;
  constructionpallet.addComponentOrReplace(gltfShape21);
  const transform25 = new Transform({
    position: new Vector3(9.5, 0, 29.5),
    rotation: new Quaternion(0, -0.016617394440257525, 0, 0.9998619215681825),
    scale: new Vector3(1, 1, 1)
  });
  constructionpallet.addComponentOrReplace(transform25);

  const constructionpallet2 = new Entity("constructionpallet2");
  engine.addEntity(constructionpallet2);
  constructionpallet2.setParent(scene);
  constructionpallet2.addComponentOrReplace(gltfShape21);
  const transform26 = new Transform({
    position: new Vector3(9.5, 0.21787693191017432, 29.5),
    rotation: new Quaternion(0, 0.02924308750335038, 0, 0.9995723294655925),
    scale: new Vector3(1, 1, 1)
  });
  constructionpallet2.addComponentOrReplace(transform26);

  const constructionpallet3 = new Entity("constructionpallet3");
  engine.addEntity(constructionpallet3);
  constructionpallet3.setParent(scene);
  constructionpallet3.addComponentOrReplace(gltfShape21);
  const transform27 = new Transform({
    position: new Vector3(9.5, 0.41802617538670916, 29.5),
    rotation: new Quaternion(0, 0.03597003583655039, 0, 0.9993528688716096),
    scale: new Vector3(1, 1, 1)
  });
  constructionpallet3.addComponentOrReplace(transform27);

  const constructionpallet4 = new Entity("constructionpallet4");
  engine.addEntity(constructionpallet4);
  constructionpallet4.setParent(scene);
  constructionpallet4.addComponentOrReplace(gltfShape21);
  const transform28 = new Transform({
    position: new Vector3(9.5, 0.5, 29.5),
    rotation: new Quaternion(0, -0.014045083246949547, 0, 0.9999013629536595),
    scale: new Vector3(1, 1, 1)
  });
  constructionpallet4.addComponentOrReplace(transform28);

  const constructionpallet5 = new Entity("constructionpallet5");
  engine.addEntity(constructionpallet5);
  constructionpallet5.setParent(scene);
  constructionpallet5.addComponentOrReplace(gltfShape21);
  const transform29 = new Transform({
    position: new Vector3(9.5, 0.7046329621139746, 29.5),
    rotation: new Quaternion(0, 0.034204981019585974, 0, 0.999414838429693),
    scale: new Vector3(1, 1, 1)
  });
  constructionpallet5.addComponentOrReplace(transform29);

  const constructionpallet6 = new Entity("constructionpallet6");
  engine.addEntity(constructionpallet6);
  constructionpallet6.setParent(scene);
  constructionpallet6.addComponentOrReplace(gltfShape21);
  const transform30 = new Transform({
    position: new Vector3(
      10.652687313053725,
      0.5834053745500347,
      30.119504785644217
    ),
    rotation: new Quaternion(0, 0, -0.3765293454472517, 0.9264046912753974),
    scale: new Vector3(1, 1, 1)
  });
  constructionpallet6.addComponentOrReplace(transform30);

  const constructionMetalFence = new Entity("constructionMetalFence");
  engine.addEntity(constructionMetalFence);
  constructionMetalFence.setParent(scene);
  constructionMetalFence.addComponentOrReplace(gltfShape9);
  const transform31 = new Transform({
    position: new Vector3(8, 0, 10.5),
    rotation: new Quaternion(0, 0.3826834559440613, 0, 0.9238795638084412),
    scale: new Vector3(1, 1, 1)
  });
  constructionMetalFence.addComponentOrReplace(transform31);

  const constructionMetalFence2 = new Entity("constructionMetalFence2");
  engine.addEntity(constructionMetalFence2);
  constructionMetalFence2.setParent(scene);
  constructionMetalFence2.addComponentOrReplace(gltfShape9);
  const transform32 = new Transform({
    position: new Vector3(10.310097694396973, 0, 12.006284713745117),
    rotation: new Quaternion(
      8.899907477655233e-9,
      0.5555702447891235,
      -2.148627586961993e-8,
      0.8314696550369263
    ),
    scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
  });
  constructionMetalFence2.addComponentOrReplace(transform32);

  const constructionMetalFence3 = new Entity("constructionMetalFence3");
  engine.addEntity(constructionMetalFence3);
  constructionMetalFence3.setParent(scene);
  constructionMetalFence3.addComponentOrReplace(gltfShape9);
  const transform33 = new Transform({
    position: new Vector3(13, 0, 12.5),
    rotation: new Quaternion(
      1.7457795209452343e-8,
      0.7071068286895752,
      -4.214684778958144e-8,
      0.7071068286895752
    ),
    scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
  });
  constructionMetalFence3.addComponentOrReplace(transform33);

  const constructionMetalFence4 = new Entity("constructionMetalFence4");
  engine.addEntity(constructionMetalFence4);
  constructionMetalFence4.setParent(scene);
  constructionMetalFence4.addComponentOrReplace(gltfShape9);
  const transform34 = new Transform({
    position: new Vector3(13.5, 0, 19),
    rotation: new Quaternion(
      1.7457795209452343e-8,
      0.7071068286895752,
      -4.214684778958144e-8,
      0.7071068286895752
    ),
    scale: new Vector3(1.000001072883606, 1, 1.000001072883606)
  });
  constructionMetalFence4.addComponentOrReplace(transform34);

  const constructionMetalFence5 = new Entity("constructionMetalFence5");
  engine.addEntity(constructionMetalFence5);
  constructionMetalFence5.setParent(scene);
  constructionMetalFence5.addComponentOrReplace(gltfShape9);
  const transform35 = new Transform({
    position: new Vector3(10.783488273620605, 0, 19.064577102661133),
    rotation: new Quaternion(
      1.8733944173732198e-8,
      0.7283247113227844,
      -4.5227739775555165e-8,
      0.6852322220802307
    ),
    scale: new Vector3(1.0000017881393433, 1, 1.0000017881393433)
  });
  constructionMetalFence5.addComponentOrReplace(transform35);

  const constructionMetalFence6 = new Entity("constructionMetalFence6");
  engine.addEntity(constructionMetalFence6);
  constructionMetalFence6.setParent(scene);
  constructionMetalFence6.addComponentOrReplace(gltfShape9);
  const transform36 = new Transform({
    position: new Vector3(8.04961109161377, 0, 19.14998435974121),
    rotation: new Quaternion(
      1.7457795209452343e-8,
      0.7071068286895752,
      -4.214684778958144e-8,
      0.7071068286895752
    ),
    scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
  });
  constructionMetalFence6.addComponentOrReplace(transform36);

  const constructionMetalFence7 = new Entity("constructionMetalFence7");
  engine.addEntity(constructionMetalFence7);
  constructionMetalFence7.setParent(scene);
  constructionMetalFence7.addComponentOrReplace(gltfShape9);
  const transform37 = new Transform({
    position: new Vector3(5.856101989746094, 0, 20.423633575439453),
    rotation: new Quaternion(
      3.5264285713765275e-8,
      0.9569404125213623,
      -8.513552529620938e-8,
      0.2902847230434418
    ),
    scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
  });
  constructionMetalFence7.addComponentOrReplace(transform37);

  const underConstructionSign = new Entity("underConstructionSign");
  engine.addEntity(underConstructionSign);
  underConstructionSign.setParent(scene);
  const transform38 = new Transform({
    position: new Vector3(5.1550140380859375, 0, 23.14190101623535),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  underConstructionSign.addComponentOrReplace(transform38);
  const gltfShape22 = new GLTFShape(
    "models/ConstructionSign_01/ConstructionSign_01.glb"
  );
  gltfShape22.withCollisions = true;
  gltfShape22.isPointerBlocker = true;
  gltfShape22.visible = true;
  underConstructionSign.addComponentOrReplace(gltfShape22);

  const constructionCone = new Entity("constructionCone");
  engine.addEntity(constructionCone);
  constructionCone.setParent(scene);
  const transform39 = new Transform({
    position: new Vector3(5.540011405944824, 0, 23.13750457763672),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  });
  constructionCone.addComponentOrReplace(transform39);
  constructionCone.addComponentOrReplace(gltfShape16);

  const constructionLight = new Entity("constructionLight");
  engine.addEntity(constructionLight);
  constructionLight.setParent(scene);
  const transform40 = new Transform({
    position: new Vector3(7, 0, 27),
    rotation: new Quaternion(
      -4.297560994814516e-15,
      0.9807853102684021,
      -1.1691871293351142e-7,
      0.19509035348892212
    ),
    scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
  });
  constructionLight.addComponentOrReplace(transform40);
  const gltfShape23 = new GLTFShape(
    "models/ConstructionLight_01/ConstructionLight_01.glb"
  );
  gltfShape23.withCollisions = true;
  gltfShape23.isPointerBlocker = true;
  gltfShape23.visible = true;
  constructionLight.addComponentOrReplace(gltfShape23);

  return scene;
}
