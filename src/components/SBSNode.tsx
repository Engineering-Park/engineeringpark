import * as DCL from 'decentraland-api'

export interface Props {
  id: string;
  children: Array<string>;
  position: DCL.Vector3Component;
  colour: string;
  scale: number;
  onClick: () => {}
}

export const SBSNode = (props: Props) => {
  const x = 0;
  const y = 0;
  return (
    <entity position={props.position}>
      <box position={{ x: x, y: y, z: 0 }} color={props.colour} scale={props.scale} onClick={props.onClick}>
        {childNodes(props.children, 1, 1.5, 1.5)}
      </box>
    </entity>
  );
}

const childNodes = (nodeNames: string[], w: number, hs: number, vs: number) => {
  const c = nodeNames.length;
  const nw = (c * w) + ((c - 1) * hs);
  const x0 = -(nw - w) / 2;
  let nodeBoxes: DCL.ISimplifiedNode[] = [];
  for (let i = 0; i < c; i++) {
    nodeBoxes.push(
      <box position={{ x: x0 + (w + hs) * i, y: -vs, z: 0 }} />
    );
  }

  return nodeBoxes;
}
