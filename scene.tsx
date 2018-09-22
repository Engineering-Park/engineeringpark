import { createElement, ScriptableScene } from 'decentraland-api'
import { Pedestal } from "./src/components/Pedestal";
import { createStore } from 'redux'
import { rootReducer } from './src/store'
import { colours } from './src/store/scene/types'
import { setColour } from "./src/store/scene/actions";
//import { parcelDisplacement } from './src/utils'
import { AircraftModel, AircraftState, FollowTrackController } from 'oset';

const store = createStore(rootReducer);

export interface DynamicState {
  ac: AircraftState
}

export default class OSEVRScene extends ScriptableScene {
  public state: DynamicState;
  private unsubscribe: () => void

  constructor(props: any) {
    super(props);

    this.state = {
      ac: {
        x: 10,
        y: -20,
        phi: Math.PI,
        xdot: 0,
        ydot: -2,
        phidot: 0
      }
    }

    this.ac = new AircraftModel(this.state.ac);

    this.ftc = new FollowTrackController(1, 5);
    this.ftc.setTrack({ x: 10, y: -20 }, { x: 10, y: -30 });

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  public async sceneDidMount() {
    this.eventSubscriber.on(`pedestal_click`, () => {
      let col = Math.floor(Math.random() * colours.length);
      store.dispatch(setColour(colours[col]));
    });

    // Update the dynamic state
    setInterval(() => {
      // Aircraft position
      if (this.state.ac.y < -100) {
        this.state.ac.y = -20;
      }

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
        <text
          value='Engineering Park'
          position={{ x: 0, y: 5.5, z: -4 }}
          rotation={{ x: 0, y: 180, z: 0 }}
          width={10}
          height={2}
          fontFamily='Georgia'
          fontSize={650}
          color='#00ffff'
          outlineColor='#ff0000'
          outlineWidth={10}
        />
        <Pedestal
          id='pedestal'
          position={{ x: -10, y: 0.5, z: -20 }}
          color={state.scene.colour}
        />
        <gltf-model
          src='assets/models/steam_train.gltf'
          position={{ x: -4, y: 0, z: 0 }}
          rotation={{ x: 0, y: -90, z: 0 }}
        />
        <gltf-model
          src='assets/models/jet.gltf'
          position={{ x: this.state.ac.x, y: 0.5, z: this.state.ac.y }}
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
