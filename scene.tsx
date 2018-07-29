import { createElement, ScriptableScene } from 'metaverse-api'
import { ComposeableScene } from './src/composeablescene'
import RollerCoaster from "./src/components/RollerCoaster";
import SimonSays from "./src/components/SimonSays";
import Pedestal from "./src/components/Pedestal";

interface State {
    updateToggle: boolean
}

export default class OSEVRScene extends ScriptableScene<any, State> {
  components: Array<ComposeableScene<any, any>>;

  constructor(props: any) {
    super(props);
    this.state = { updateToggle: false };
    this.components = [];

    this.components.push(new RollerCoaster({
      position: { x: 30, y: 4, z: 0 },
      rotation: { x: 0, y: 0, z: 0 }
    }));

    this.components.push(new SimonSays({
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 180, z: 0 }
    }));

    this.components.push(new Pedestal({
      position: { x: 20, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 }
    }));
  }

  public async sceneDidMount(){
    this.eventSubscriber.on(`pedestal_click`, () => {
      this.components[2].clickCallback();
      this.setState({ updateToggle: !this.state.updateToggle });
    });
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
