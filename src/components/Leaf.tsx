import * as DCL from 'decentraland-api'

export interface Props {
  id: string;
  position: DCL.Vector3Component;
  colour: string;
  scale: number;
  onClick: (id: string) => void;
}

export const Leaf = (props: Props) => {
  const onClick = () => { props.onClick(props.id) };

  return (
    <entity id={props.id}>
      <box
        position={props.position}
        color={props.colour}
        onClick={onClick}
      >
        <text
          value={props.id}
          position={{ x: 0, y: 0, z: -props.scale - 0.01 }}
          width={props.scale + 0.4}
          height={props.scale + 0.4}
          fontFamily='Georgia'
          fontSize={150 * props.scale}
          color={'#ffffff'}
          textWrapping={true}
        />
      </box>
    </entity >
  );
}
