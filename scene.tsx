import { createElement, ScriptableScene } from 'metaverse-api'
import { Button } from "./src/components/Button";
import { Panel, Panels } from './src/components/Panels'
import { sleep } from "./src/utils";

export interface IState {
  difficulty: number;
  sequence: Panel[];
  guessSequence: Panel[];
  activePanel: Panel | null;
  inputLocked: boolean;
}

export default class SimonSays extends ScriptableScene<any, IState>{
  // why isn't this created in a constructor?
  state = {
    difficulty: 0,
    sequence: [],
    guessSequence: [],
    activePanel: null,
    inputLocked: true
  };

  sceneDidMount() {
    this.eventSubscriber.on(`${Panel.GREEN}_click`, () => {
      this.activatePanel(Panel.GREEN);
    });
    this.eventSubscriber.on(`${Panel.RED}_click`, () => {
      this.activatePanel(Panel.RED);
    });
    this.eventSubscriber.on(`${Panel.YELLOW}_click`, () => {
      this.activatePanel(Panel.YELLOW);
    });
    this.eventSubscriber.on(`${Panel.BLUE}_click`, () => {
      this.activatePanel(Panel.BLUE);
    });
    this.eventSubscriber.on("start_button_click", () => {
      this.newGame(2);
    });
  }

  async newGame(difficulty: number) {
    const sequence = this.randomSequence(difficulty);

    this.setState({
      difficulty,
      sequence,
      inputLocked: true,
      guessSequence: []
    });

    // Play the sequence before allowing the user to play!
    await this.playSequence(sequence);
  }

  async playSequence(sequence: Panel[]) {
    for (let i = 0; i < sequence.length; i++) {
      const panel = sequence[i];
      this.setState({ activePanel: panel });

      await sleep(500);
      this.setState({
        activePanel: null,
        inputLocked: i !== sequence.length - 1
      });
      await sleep(500);
    }
  }

  randomSequence(difficulty: number): Panel[] {
    const pool = Object.keys(Panel);
    let arr: Panel[] = [];
    for (let i = 0; i < difficulty; i++) {
      const index = Math.floor(Math.random() * pool.length);
      const key = pool[index] as keyof typeof Panel;
      const panel = Panel[key] as Panel;
      arr.push(panel);
    }

    return arr;
  }

  async activatePanel(panel: Panel) {
    if (this.state.inputLocked) {
      return;
    }
    const nextSequence = [...this.state.guessSequence, panel];
    if (this.state.sequence[this.state.guessSequence.length] !== panel) {
      // loser
      console.log("You lose!");

      this.setState({
        inputLocked: true,
        sequence: [],
        guessSequence: []
      });
      return;
    }
    this.setState({
      activePanel: panel,
      guessSequence: nextSequence
    });
    await sleep(500);
    this.setState({ activePanel: null });
    if (nextSequence.length === this.state.sequence.length) {
      // Winner winner chicken dinner
      console.log("You win! Keep going!");
      await sleep(500);
      this.newGame(this.state.difficulty + 1);
      return;
    }
  }

  // why is this a function and not a method of the class?
  async render() {
    const { activePanel } = this.state;

    return (
      <scene position={{ x: 5, y: 0, z: 5 }}>
        <Button position={{ x: 0, y: 1.5, z: 0 }} />
        <Panels position={{ x: 0, y: 1, z: 0 }} activePanel={activePanel} />
        <gltf-model
          src="assets/Simon_scene.gltf"
          position={{ x: 0, y: 0.05, z: 0 }}
          scale={{ x: 0.99, y: 0.99, z: 0.99 }}
        />
      </scene>
    );
  }
}
