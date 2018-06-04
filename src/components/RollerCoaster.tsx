import { createElement } from 'metaverse-api'
import { ComposeableScene, SceneProps } from '../composeablescene'

const networkHz = 6;
const interval = 1000 / networkHz;

interface State {
  time: number;
}

export default class RollerCoaster extends ComposeableScene<SceneProps, State> {
  constructor(props?: SceneProps) {
    super(props);
    this.state = {
      time: 0
    };
  }

  public render() {
    const { time } = this.state;

    const size = 2;

    const x = Math.cos(time) * Math.cos(time) * size;
    const y = Math.cos(time) * Math.sin(time) * size;
    const z = Math.sin(time) * size;

    return (
        <entity position={this.props.position} rotation={this.props.rotation}>
          <entity
            id="train"
            position={{ x, y, z }}
            rotation={{ x: Math.cos(time) * 40, y: Math.sin(time) * 40, z: 0 }}
            transition={{
              position: { duration: interval },
              rotation: { duration: interval }
            }}
          >
          <box position={{ x: 0, y: -1, z: 0 }} color="black" scale={{ x: 3, y: 0.4, z: 5 }} />
          <box position={{ x: 1.5, y: 0, z: 0 }} color="red" scale={{ x: 0.2, y: 1, z: 5 }} />
          <box position={{ x: -1.5, y: 0, z: 0 }} color="yellow" scale={{ x: 0.2, y: 1, z: 5 }} />

          <box position={{ x: 0, y: 0, z: 2.5 }} color="green" scale={{ x: 3, y: 1, z: 0.2 }} />
          <box position={{ x: 0, y: 0, z: -2.5 }} color="blue" scale={{ x: 3, y: 1, z: 0.2 }} />
        </entity>
      </entity>
    )
  }
}
