import { Reducer } from 'redux';
import { ADD_MOVE, GameActions, GameState, Move, Panel } from './types';

const DIFFICULTY = 1;
const initialSequence = randomSequence(DIFFICULTY);

const initialState: GameState = {
  difficulty: DIFFICULTY,
  sequence: initialSequence,
  inputLocked: false
};

export const reducer: Reducer<GameState> = (state: GameState = initialState, action) => {
  switch ((action as GameActions).type) {
    case ADD_MOVE:
      return addMove(state, action.payload);
    default:
      return state;
  }
};

export default reducer;

const addMove = (state: GameState, move: Move): GameState => {
  if (state.inputLocked) {
    return state;
  }

  if (move === state.sequence) {
    console.log("You win! Keep going!");
    return {
      ...state,
      difficulty: state.difficulty + 1,
      sequence: move
    };
  }

  console.log("You lose!");
  return {
    ...state,
    inputLocked: true
  };
};

function randomSequence(difficulty: number): Panel[] {
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
