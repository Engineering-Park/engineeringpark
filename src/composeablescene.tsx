import { ISimplifiedNode, Vector3Component } from 'metaverse-api'

export interface SceneProps {
  position: Vector3Component;
  rotation: Vector3Component;
}

export abstract class ComposeableScene<Props, State> {
  props: any;
  state: any;

  constructor(props?: Props, state?: State) {
    if (props) {
      this.props = props;
    }
    if (state) {
      this.state = state;
    }
  }

  public clickCallback() {}

  public abstract render(): ISimplifiedNode
}
