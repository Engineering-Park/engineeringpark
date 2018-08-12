import { Reducer } from 'redux';
import { colours, SET_COLOUR, SET_DOG_ANGLE, SET_DONUT_ANGLE, GameActions, GameState } from './types';

const initialState: GameState = {
  pedestalColor: colours[0],
  dogAngle: 0,
  donutAngle: 0
};

export const reducer: Reducer<GameState> = (state: GameState = initialState, action) => {
  switch ((action as GameActions).type) {
    case SET_COLOUR:
      return {...state,
        pedestalColor: action.payload,
      };
    case SET_DOG_ANGLE:
      return {...state,
        dogAngle: action.payload,
      };
    case SET_DONUT_ANGLE:
      return {...state,
        donutAngle: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
