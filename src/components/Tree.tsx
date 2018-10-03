import * as DCL from 'decentraland-api'
import { Leaf } from './Leaf'
import { Node } from 'oset'

export interface Props {
  id: string;
  position: DCL.Vector3Component;
  colour: string;
  scale: number;
  onClick: (id: string) => void;
  rootNode: Node;
}

export const Tree = (props: Props) => {
  const renderLeaves = () => {
    const leafNodes = props.rootNode.children();
    if (leafNodes.length === 0) { return }

    let leaves: DCL.ISimplifiedNode[] = [];
    for (let i = 0; i < leafNodes.length; i++) {
      leaves.push(Leaf({
        id: props.id + `.` + leafNodes[i].id(),
        position: { x: 0 + 2 * i, y: 0, z: 0 },
        colour: props.colour,
        scale: props.scale,
        onClick: props.onClick
      }))
    };
    return leaves;
  }

  return (
    <entity id={props.id} position={props.position}>
      {renderLeaves()}
    </entity >
  );
}
