import { Reducer } from 'redux';
import { colours, SET_COLOUR, SceneActions, StaticState } from './types';

const initialState: StaticState = {
  colour: colours[0]
};

export const reducer: Reducer<StaticState> = (state: StaticState = initialState, action) => {
  switch ((action as SceneActions).type) {
    case SET_COLOUR:
      return {
        ...state,
        colour: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
