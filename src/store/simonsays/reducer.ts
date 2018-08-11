import { Reducer } from 'redux';
import { ADD_MOVE, GameActions, GameState, Move, Panel } from './types';

const initialState: GameState = {
  sequence: [randomPanel()],
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
      sequence: move.concat(randomPanel())
    };
  }

  console.log("You lose!");
  return {
    ...state,
    inputLocked: true
  };
};

function randomPanel(): Panel {
  const pool = Object.keys(Panel);
  const index = Math.floor(Math.random() * pool.length);
  const key = pool[index] as keyof typeof Panel;
  const panel = Panel[key] as Panel;
  return panel;
}
