import { createTree, Node } from 'oset';
import * as DCL from 'decentraland-api'
import { Element } from 'oset'
import { Leaf } from './Leaf'

export interface Props {
  id: string;
  position: DCL.Vector3Component;
  elements: Element[];
  colour: string;
  scale: number;
  onClick: (id: string) => void;
}

export const Tree = (props: Props) => {
  const tree = createTree(props.elements, 'built_from', 'built_in');
  if (!tree) { return };

  const onClick = (id: string) => () => { props.onClick(id); };

  const renderLeaves = (nodes: Node[], nodeWidth: number, horizontalSpacing: number, verticalSpacing: number) => {
    const numChildren = nodes.length;
    const totalWidth = (numChildren * nodeWidth) + ((numChildren - 1) * horizontalSpacing);
    const x0 = -(totalWidth - nodeWidth) / 2;
    let leaves: DCL.ISimplifiedNode[] = [];
    for (let i = 0; i < numChildren; i++) {
      const id = 'leaf' + i;
      const position = { x: x0 + (nodeWidth + horizontalSpacing) * i, y: -verticalSpacing, z: 0 };
      leaves.push(
        Leaf({
          id,
          position,
          colour: props.colour,
          scale: props.scale,
          onClick: onClick(id)
        })
      );
    }

    return leaves;
  }

  return (
    <entity id={props.id} position={props.position}>
      <box
        id={tree.id()}
        position={{ x: 0, y: 0, z: 0 }}
        color={props.colour}
        scale={props.scale}
        onClick={onClick(props.id)}
      >
        {renderLeaves(tree.children(), 1, 1.5, 1.5)}
      </box>
    </entity>
  );
}
