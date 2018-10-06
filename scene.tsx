import * as DCL from 'decentraland-api'
import { Pedestal } from "./src/components/Pedestal";
import { Tree } from "src/components/Tree";
import { createStore } from 'redux'
//import { parcelDisplacement } from './src/utils'
import { addElement, rootReducer } from 'oset';
import { AircraftModel, AircraftState, FollowTrackController } from 'simkit';

const store = createStore(rootReducer);

export interface DynamicState {
  ac: AircraftState
  sbs: number;
}

export default class OSEVRScene extends DCL.ScriptableScene {
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
      },
      sbs: 0
    }

    this.ac = new AircraftModel(this.state.ac);

    this.ftc = new FollowTrackController(1, 5);
    this.ftc.setTrack({ x: 10, y: -20 }, { x: 10, y: -30 });

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  public async sceneDidMount() {
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

    //temp for test
    store.dispatch(addElement({ id: 'element1', relationships: { built_from: ['element2', 'element3', 'element4'], built_in: [] } }));
    store.dispatch(addElement({ id: 'element2', relationships: { built_from: [], built_in: ['element1'] } }));
    store.dispatch(addElement({ id: 'element3', relationships: { built_from: [], built_in: ['element1'] } }));
    store.dispatch(addElement({ id: 'element4', relationships: { built_from: [], built_in: ['element1'] } }));

    this.subscribeTo("click", e => {
      console.log(e.elementId + ` clicked`);
    })
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
        <gltf-model
          id='steam_train'
          src='assets/models/steam_train.gltf'
          position={{ x: -4, y: 0, z: 0 }}
          rotation={{ x: 0, y: -90, z: 0 }}
        />
        <Pedestal
          id='credits_steam_train'
          value='Steam Train by Jarlan Perez, used under CC-BY'
          position={{ x: -4, y: 0, z: 4 }}
          color={'#3d9693'}
        />
        <gltf-model
          id='jet'
          src='assets/models/jet.gltf'
          position={{ x: this.state.ac.x, y: 0.5, z: this.state.ac.y }}
          transition={{ position: { duration: 100, timing: 'linear' } }}
        />
        <Pedestal
          id='credits_jet'
          value='Jet by Poly by Google, used under CC-BY'
          position={{ x: 5, y: 0, z: -15 }}
          color={'#e8daa0'}
        />
        <Tree
          id='sbs_tree'
          position={{ x: -20, y: 2, z: -30 }}
          colour={'#15a83f'}
          scale={0.5}
          onClick={this.treeCB}
          elements={state.model.elements}
        />
      </scene>
    );
  }

  public async sceneWillUnmount() {
    this.unsubscribe();
  }

  // Callbacks
  private treeCB = (id: string) => {
    console.log(id);
    // const newID = id +`1`;
    // store.dispatch(addElement({ newID, relationships: { built_from: [], built_in: ['element1'] } }));
  }

  // Properties
  private ac: AircraftModel;
  private ftc: FollowTrackController;
}
