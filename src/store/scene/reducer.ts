import { Reducer } from 'redux';
import { colours, SET_COLOUR, SET_DOG_ANGLE, SET_DONUT_ANGLE, SceneActions, SceneState } from './types';

const initialState: SceneState = {
  pedestalColor: colours[0],
  dogAngle: 0,
  donutAngle: 0,
};

export const reducer: Reducer<SceneState> = (state: SceneState = initialState, action) => {
  switch ((action as SceneActions).type) {
    case SET_COLOUR:
      return {...state,
        pedestalColor: action.payload,
      };
    case SET_DOG_ANGLE:
      return {...state,
        dogAngle: state.dogAngle + action.payload,
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
