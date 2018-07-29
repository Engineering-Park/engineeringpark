import { createElement } from 'metaverse-api'
import { ComposeableScene, SceneProps } from '../composeablescene'

interface State {
    color: string;
}

const colors = ['#3d9693', '#e8daa0', '#968fb7', '#966161', '#879e91', '#66656b', '#6699cc'];

export default class Pedestal extends ComposeableScene<SceneProps, State> {
  constructor(props?: SceneProps) {
    super(props);
    this.state = {
      color: '#8b96a0'
    };
  }

  public clickCallback() {
    let col = Math.floor(Math.random() * colors.length);
    this.state.color = colors[col];
  }

  public render() {
    return (
      <entity position={this.props.position} rotation={this.props.rotation}>
        <cylinder id='pedestal'
          position={{x:0, y:0.5, z:0}}
          color= {this.state.color}
          radiusBottom={0.8}
          radiusTop={1.1}
          scale={{x:0.35 , y:0.4, z: 0.35}}
        />
      </entity>
    );
  }
}
