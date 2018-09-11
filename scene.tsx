import { createElement, ScriptableScene } from 'decentraland-api'
import { renderHummingBirds } from './src/components/HummingBird'
import { Pedestal } from "./src/components/Pedestal";
import { createStore } from 'redux'
import { rootReducer } from './src/store'
import { colours } from './src/store/scene/types'
import { setColour, setDogAngle, setDonutAngle } from "./src/store/scene/actions";
import { createHummingbirdAction, moveHummingbirdAction } from "./src/store/hummingbirds/actions";
import { IAircraftState, SimulateAircraft } from 'oset';

const store = createStore(rootReducer);

export interface State {
  treeShake: boolean
  ac: IAircraftState
}

export default class OSEVRScene extends ScriptableScene {
  public state: State;
  private unsubscribe: () => void

  constructor(props: any) {
    super(props);

    this.state = {
      treeShake: false,
      ac: {
        x: 0, // [m]
        y: 0, // [m]
        phi: 0, // [deg]
        xdot: 0, // [m/s]
        ydot: 1, // [m/s]
        phidot: 0 // [deg/s]
      }
    }

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
      store.dispatch(setDogAngle(2));
    }, 100);

    this.subscribeTo('positionChanged', e => {
      const rotateDonuts = (e.position.x + e.position.z) * 10
      store.dispatch(setDonutAngle(rotateDonuts));
    });

    this.eventSubscriber.on('tree_click', () => {
      const bird = store.getState().hummingbirds.positions.length;
      if (bird > 10) { return; }
      this.shakeTree();
      store.dispatch(createHummingbirdAction(bird));
      setInterval(() => {
        store.dispatch(moveHummingbirdAction(bird));
      }, 3000 + Math.random() * 2000)
    })

    setInterval(() => {
      const ac = SimulateAircraft(0.1, this.state.ac, 0);
      this.setState({ ac });
    }, 100);
  }

  public async render() {
    const state = store.getState();
    return (
      <scene position={{ x: 5, y: 0, z: 5 }}>
        <gltf-model
          src='assets/models/ground.gltf'
          position={{ x: 0, y: 0, z: 0 }}
        />
        <gltf-model
          src='assets/models/boundary.gltf'
          position={{ x: 0, y: 0, z: 0 }}
        />
        <Pedestal
          id='pedestal'
          position={{ x: 20, y: 0.5, z: 0 }}
          color={state.scene.pedestalColor}
        />
        {renderHummingBirds(state.hummingbirds)}
        <gltf-model
          src='assets/angry-dog.gltf'
          scale={0.3}
          position={{ x: 20, y: 1.4, z: 0 }}
          rotation={{ y: state.scene.dogAngle, x: 0, z: 0 }}
          transition={{ rotation: { duration: 100, timing: 'linear' } }}
        />
        <gltf-model
          src='assets/donutado.gltf'
          scale={0.8}
          position={{ x: 20, y: 8.5, z: 0 }}
          rotation={{ y: state.scene.donutAngle, x: 0, z: 0 }}
          transition={{ rotation: { duration: 100, timing: 'linear' } }}
        />
        <gltf-model
          src='assets/steam_train.gltf'
          scale={2}
          position={{ x: -10, y: -2.5, z: 0 }}
          rotation={{ y: 0, x: 0, z: 0 }}
        />
        <gltf-model
          src="assets/Tree.gltf"
          id="tree"
          scale={1.1}
          position={{ x: 0, y: 0, z: 0 }}
          skeletalAnimation={[
            {
              clip: "Tree_Action",
              loop: true,
              playing: this.state.treeShake ? true : false
            }
          ]}
        />
        <box
          id='flyer'
          color='#46d12e'
          position={{ x: this.state.ac.x, y: 1, z: this.state.ac.y }}
          transition={{ position: { duration: 100, timing: 'linear' } }}
        />
      </scene>
    );
  }

  public async sceneWillUnmount() {
    this.unsubscribe();
  }

  private async shakeTree() {
    this.setState({ treeShake: true });
    setTimeout(() => {
      this.setState({ treeShake: false })
    }, 2000);
  }
}
