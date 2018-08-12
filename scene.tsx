import { createElement, ScriptableScene } from 'metaverse-api'
import { Pedestal } from "./src/components/Pedestal";
import { createStore } from 'redux'
import { rootReducer } from './src/store'
import { colours } from './src/store/game/types'
import { setColour, setDogAngle, setDonutAngle } from "./src/store/game/actions";

const store = createStore(rootReducer);

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
      store.dispatch(setDogAngle(store.getState().game.dogAngle + 2));
    }, 100)

    this.subscribeTo('positionChanged', e => {
      const rotateDonuts = ( e.position.x + e.position.z) * 10
      store.dispatch(setDonutAngle(rotateDonuts));
    })
  }

  public async render() {
    const state = store.getState().game;
    return (
      <scene position={{ x: 5, y: 0, z: 5 }}>
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

  public async sceneWillUnmount() {
    this.unsubscribe();
  }
}
