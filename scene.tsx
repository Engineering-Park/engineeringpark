import * as DCL from 'decentraland-api'
import { Pedestal } from "./src/components/Pedestal";
import { Tree } from "src/components/Tree";
//import { parcelDisplacement } from './src/utils'
import { createTree, Model } from 'oset';
import { AircraftModel, AircraftState, FollowTrackController } from 'simkit';

export interface State {
  ac: AircraftState;
  mut: number; // model updated toggle
  sbs: number;
}

export default class OSEVRScene extends DCL.ScriptableScene {
  public state: State;

  // Properties
  private ac: AircraftModel;
  private ftc: FollowTrackController;
  private model: Model;

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
      mut: 3,
      sbs: 0
    }

    this.ac = new AircraftModel(this.state.ac);

    this.ftc = new FollowTrackController(1, 5);
    this.ftc.setTrack({ x: 10, y: -20 }, { x: 10, y: -30 });

    this.model = new Model();
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

    // experimental oset integration
    this.model.addElement(Model.createElement('element1'));
    this.model.addElement(Model.createElement('element2'));
    this.model.addRelationship({
      source: 'element1',
      target: 'element2',
      type: 'built_from'
    });
  }

  public async render() {
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
          rotation={{ x: 0, y: 0, z: 0 }}
          colour={'#15a83f'}
          scale={0.5}
          onClick={this.treeCB}
          tree={createTree(this.model.relationships(), 'element1', 'built_from')}
        />
      </scene>
    );
  }

  // Callbacks
  private treeCB = (id: string) => {
    console.log('Hello:' + id);
    const newID = `element` + this.state.mut;
    this.model.addElement(Model.createElement(newID));
    this.model.addRelationship({
      source: 'element1',
      target: newID,
      type: 'built_from'
    });
    this.setState({ mut: this.state.mut + 1 });
  };
}
