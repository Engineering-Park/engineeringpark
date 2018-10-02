import * as DCL from 'decentraland-api'

export interface Props {
  id: string;
  position: DCL.Vector3Component;
  colour: string;
  scale: number;
  onClick: () => void;
}

export const Leaf = (props: Props) => {
  const onClick = () => { props.onClick() };

  return (
    <entity>
      <box id={props.id} position={props.position} color={props.colour} onClick={onClick}>
        <text
          value={props.id}
          position={{ x: 0, y: 0, z: -props.scale - 0.01 }}
          width={props.scale + 0.1}
          height={props.scale + 0.1}
          fontFamily='Georgia'
          fontSize={250 * props.scale}
          color={'#ffffff'}
          textWrapping={true}
        />
      </box>
    </entity>
  );
}
