import { createElement, ISimplifiedNode, ScriptableScene } from 'metaverse-api'
import { ComposeableScene } from './src/composeablescene'
import RollerCoaster from "./src/components/RollerCoaster";
import SimonSays from "./src/components/SimonSays";
import { Pedestal } from "./src/components/Pedestal";

const colors = ['#3d9693', '#e8daa0', '#968fb7', '#966161', '#879e91', '#66656b', '#6699cc'];

interface State {
    pedestalColor: string | number;
    dogAngle: number;
    donutAngle: number;
}

interface ComposeableSceneContainer {
  [index: string]: ComposeableScene<any, any>
}

export default class OSEVRScene extends ScriptableScene<any, State> {
  private components: ComposeableSceneContainer;

  constructor(props: any) {
    super(props);
    this.state = {
      pedestalColor: colors[0],
      dogAngle: 0,
      donutAngle: 0
    };
    this.components = {};

    this.components['RollerCoaster'] = new RollerCoaster({
      position: { x: 30, y: 4, z: 0 },
      rotation: { x: 0, y: 0, z: 0 }
    });

    this.components['SimonSays'] = new SimonSays({
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 180, z: 0 }
    });
  }

  public async sceneDidMount() {
    this.eventSubscriber.on(`pedestal_click`, () => {
      let col = Math.floor(Math.random() * colors.length);
      this.setState({pedestalColor: colors[col]});
      console.log(colors[col]);
    });

    setInterval(() => {
      this.setState({ dogAngle: this.state.dogAngle + 2})
    }, 100)

    this.subscribeTo('positionChanged', e => {
      const rotateDonuts = ( e.position.x + e.position.z) * 10
      this.setState({donutAngle: rotateDonuts})
    })
  }

  public async render() {
    return (
      <scene position={{ x: 5, y: 0, z: 5 }}>
        {this.renderComponents()}
        <Pedestal
          id='pedestal'
          position={{x:20, y:0.5, z:0}}
          color={this.state.pedestalColor}
        />
        <gltf-model
          src='assets/angry-dog.gltf'
          scale={0.3}
          position={{x:20, y:1.4, z:0}}
          rotation={{y:this.state.dogAngle, x:0, z:0}}
          transition={{ rotation: { duration: 100, timing: 'linear' } }}
        />
        <gltf-model
          src='assets/donutado.gltf'
          scale={0.8}
          position={{x:20, y:8.5, z:0}}
          rotation={{y:this.state.donutAngle, x:0, z:0}}
          transition={{ rotation: { duration: 100, timing: 'linear' } }}
        />
      </scene>
    );
  }

  private renderComponents() {
    let renderedComponents: Array<ISimplifiedNode>=[];

    for(var key in this.components) {
      if(this.components.hasOwnProperty(key)) {
        renderedComponents.push(this.components[key].render());
      }
    }

    return renderedComponents;
  }
}
