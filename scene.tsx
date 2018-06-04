import { createElement, ISimplifiedNode, ScriptableScene } from 'metaverse-api'
import RollerCoaster from "./src/components/RollerCoaster";
import SimonSays from "./src/components/SimonSays";

export interface IComposeableScene {
  render(): ISimplifiedNode;
  state: any;
}

export default class OSEVRScene extends ScriptableScene {
  components: Array<IComposeableScene>;

  constructor(props: any) {
    super(props);
    this.components = [];
    this.components.push(new RollerCoaster);
    this.components.push(new SimonSays);
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
