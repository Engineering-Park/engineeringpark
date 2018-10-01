import { createTree, Node } from 'oset';
import * as DCL from 'decentraland-api'
import { Element } from 'oset'

export interface Props {
  id: string;
  elements: Element[];
  position: DCL.Vector3Component;
  colour: string;
  scale: number;
  onClick?: () => {}
}

export const Tree = (props: Props) => {
  const tree = createTree(props.elements, 'built_from', 'built_in');
  if (!tree) { return };
  return (
    <entity id={props.id} position={props.position}>
      <box id={tree.id()} position={{ x: 0, y: 0, z: 0 }} color={props.colour} scale={props.scale} onClick={props.onClick}>
        {childNodes(tree.children(), 1, 1.5, 1.5)}
      </box>
    </entity>
  );
}

const childNodes = (nodes: Node[], nodeWidth: number, horizontalSpacing: number, verticalSpacing: number) => {
  const numChildren = nodes.length;
  const totalWidth = (numChildren * nodeWidth) + ((numChildren - 1) * horizontalSpacing);
  const x0 = -(totalWidth - nodeWidth) / 2;
  let nodeBoxes: DCL.ISimplifiedNode[] = [];
  for (let i = 0; i < numChildren; i++) {
    nodeBoxes.push(
      <box position={{ x: x0 + (nodeWidth + horizontalSpacing) * i, y: -verticalSpacing, z: 0 }} />
    );
  }

  return nodeBoxes;
}
