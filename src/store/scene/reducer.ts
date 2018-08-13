import { Reducer } from 'redux';
import { BirdAction, colours, SET_COLOUR, TICK, SET_DONUT_ANGLE, SceneActions, SceneState } from './types';

const dogAngularRate = 20; // degrees per second

const initialState: SceneState = {
  pedestalColor: colours[0],
  dogAngle: 0,
  donutAngle: 0,
  birdPositions: [{x:5, y:1, z:5},{x:5, y:1, z:5},{x:5, y:1, z:5}],
  birdActions: [null, null, null]
};

export const reducer: Reducer<SceneState> = (state: SceneState = initialState, action) => {
  switch ((action as SceneActions).type) {
    case SET_COLOUR:
      return {...state,
        pedestalColor: action.payload,
      };
    case TICK:
      return {...state,
        dogAngle: state.dogAngle + dogAngularRate * action.payload,
        birdPositions: [newBirdPosition(), newBirdPosition(), newBirdPosition()],
        birdActions: [newBirdAction(), newBirdAction(), newBirdAction()]
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

function newBirdPosition() {
  return {
    x: Math.random()*10,
    y: Math.random()*2 + 1,
    z: Math.random()*10 - 5
  }
}

function newBirdAction() {
  let newAction: BirdAction = null;
  const ranNum = Math.random()
  if (ranNum < 0.6){
    newAction = null
  } else if (ranNum < 0.8) {
    newAction =  'looking'
  } else {
    newAction =  'shaking'
  }
  return newAction;
}
