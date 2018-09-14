import { createElement, ScriptableScene } from 'decentraland-api'
import { Pedestal } from "./src/components/Pedestal";
import { createStore } from 'redux'
import { rootReducer } from './src/store'
import { colours } from './src/store/scene/types'
import { setColour, setDogAngle, setDonutAngle } from "./src/store/scene/actions";
import { AircraftModel, AircraftState, FollowTrackController } from 'oset';

const store = createStore(rootReducer);

export interface State {
  ac: AircraftState
}

export default class OSEVRScene extends ScriptableScene {
  public state: State;
  private unsubscribe: () => void

  constructor(props: any) {
    super(props);

    this.state = {
      ac: {
        x: 0,
        y: 0,
        phi: Math.PI,
        xdot: 0,
        ydot: -2,
        phidot: 0
      }
    }

    this.ac = new AircraftModel(this.state.ac);

    this.ftc = new FollowTrackController(1, 5);
    this.ftc.setTrack({ x: 0, y: 0 }, { x: -10, y: -10 });

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

    setInterval(() => {
      this.ftc.run(0.1, { x: this.state.ac.x, y: this.state.ac.y });
      this.ac.setHeadingCommand(this.ftc.getHeadingCommand());
      this.ac.run(0.1);
      this.setState({ ac: this.ac.getState() });
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

  // Properties
  private ac: AircraftModel;
  private ftc: FollowTrackController;
}
