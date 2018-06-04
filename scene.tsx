import { createElement, ScriptableScene } from 'metaverse-api'
import { ComposeableScene } from './src/composeablescene'
import RollerCoaster from "./src/components/RollerCoaster";
import SimonSays from "./src/components/SimonSays";

export default class OSEVRScene extends ScriptableScene {
  components: Array<ComposeableScene<any, any>>;

  constructor(props: any) {
    super(props);
    this.components = [];

    let rcProps = {
      position: { x: -5, y: 4, z: 5 },
      rotation: { x: 0, y: 0, z: 0 }
    }

    let ssProps = {
      position: { x: 5, y: 0, z: 5 },
      rotation: { x: 0, y: 0, z: 0 }
    }

    this.components.push(new RollerCoaster(rcProps));
    this.components.push(new SimonSays(ssProps));
  }

  public async render() {
    return (
      <scene position={{ x: 5, y: 0, z: 5 }}>
        {this.renderComponents()}
      </scene>
    );
  }

  private renderComponents() {
    return this.components.map($ => $.render());
  }
}
