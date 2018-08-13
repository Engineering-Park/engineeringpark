import { createElement, ScriptableScene } from 'metaverse-api'
import { Boundary } from './src/components/Boundary'
import { Ground } from './src/components/Ground'
import { Pedestal } from "./src/components/Pedestal";
import { createStore } from 'redux'
import { rootReducer } from './src/store'
import { colours } from './src/store/scene/types'
import { setColour, tick, setDonutAngle } from "./src/store/scene/actions";

const store = createStore(rootReducer);

const dt = 0.1; // seconds

export default class OSEVRScene extends ScriptableScene {
  private unsubscribe: () => void

  constructor(props: any) {
    super(props);

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  public async sceneDidMount() {
    this.eventSubscriber.on(`pedestal_click`, () => {
      let col = Math.floor(Math.random() * colours.length);
      store.dispatch(setColour(colours[col]));
    });

    setInterval(() => {
      store.dispatch(tick(dt));
    }, dt*1000)

    this.subscribeTo('positionChanged', e => {
      const rotateDonuts = ( e.position.x + e.position.z) * 10
      store.dispatch(setDonutAngle(rotateDonuts));
    })
  }

  public async render() {
    const state = store.getState().scene;
    return (
      <scene position={{ x: 5, y: 0, z: 5 }}>
        <Ground />
        <Boundary />
        <Pedestal
          id='pedestal'
          position={{x:20, y:0.5, z:0}}
          color={state.pedestalColor}
        />
        <gltf-model
          src='assets/angry-dog.gltf'
          scale={0.3}
          position={{x:20, y:1.4, z:0}}
          rotation={{y:state.dogAngle, x:0, z:0}}
          transition={{ rotation: { duration: 100, timing: 'linear' } }}
        />
        <gltf-model
          src='assets/donutado.gltf'
          scale={0.8}
          position={{x:20, y:8.5, z:0}}
          rotation={{y:state.donutAngle, x:0, z:0}}
          transition={{ rotation: { duration: 100, timing: 'linear' } }}
        />
        <gltf-model
          src='assets/steam_train.gltf'
          scale={2}
          position={{x:-10, y:-2.5, z:0}}
          rotation={{y:0, x:0, z:0}}
        />
      </scene>
    );
  }

  public async sceneWillUnmount() {
    this.unsubscribe();
  }
}
