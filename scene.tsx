import { createElement, ScriptableScene } from 'metaverse-api'
import { Pedestal } from "./src/components/Pedestal";
import { createStore } from 'redux'
import { rootReducer } from './src/store'

const store = createStore(rootReducer);

const colors = ['#3d9693', '#e8daa0', '#968fb7', '#966161', '#879e91', '#66656b', '#6699cc'];

interface State {
    pedestalColor: string | number;
    dogAngle: number;
    donutAngle: number;
}

export default class OSEVRScene extends ScriptableScene<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      pedestalColor: colors[0],
      dogAngle: 0,
      donutAngle: 0
    };
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
        <material
          id="pane_material1"
          albedoTexture="assets/Inky_Smoke.png"
          hasAlpha
        />
        <plane
          id='pane1'
          position={{x:0, y:2, z:4.99}}
          scale={{ x:4, y:4, z:1 }}
          material="#pane_material1"
        />
        <material
          id="pane_material2"
          albedoTexture="assets/Ink_Drop.png"
          hasAlpha
        />
        <plane
          id='pane2'
          position={{x:10, y:2, z:4.99}}
          scale={{ x:2, y:4, z:1 }}
          material="#pane_material2"
        />
      </scene>
    );
  }
}
