import * as DCL from 'decentraland-api'
import { Leaf } from './Leaf'
import { Node } from 'oset'

export interface Props {
  id: string;
  position: DCL.Vector3Component;
  rotation: DCL.Vector3Component;
  colour: string;
  scale: number;
  onClick: (id: string) => void;
  tree: Node | undefined;
}

export const Tree = (props: Props) => {
  if (!props.tree) { return; }

  const renderNode = (id: string, position: DCL.Vector3Component) => {
    return Leaf({
      id,
      position,
      colour: props.colour,
      scale: props.scale,
      onClick: props.onClick
    })
  }

  const renderLeaves = () => {
    if (!props.tree) { return; }

    const leafNodes = props.tree.children();
    if (leafNodes.length === 0) { return }

    const nodeWidth = 1;
    const horizontalSpacing = 1.5;
    const verticalSpacing = 1.5;
    const numChildren = leafNodes.length;
    const totalWidth = (numChildren * nodeWidth) + ((numChildren - 1) * horizontalSpacing);
    const x0 = -(totalWidth - nodeWidth) / 2;

    let leaves: DCL.ISimplifiedNode[] = [];
    for (let i = 0; i < leafNodes.length; i++) {
      const id = leafNodes[i].id();
      const position = { x: x0 + (nodeWidth + horizontalSpacing) * i, y: -verticalSpacing, z: 0 };
      leaves.push(renderNode(id, position));
    };
    return leaves;
  }

  return (
    <entity id={props.id} position={props.position} rotation={props.rotation}>
      {renderNode(props.tree.id(), { x: 0, y: 0, z: 0 })}
      {renderLeaves()}
    </entity >
  );
}
