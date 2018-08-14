import { Reducer } from 'redux';
import { HummingbirdAction, HummingbirdActions, HummingbirdsState, TICK_HUMMINGBIRDS } from './types';

const initialState: HummingbirdsState = {
  positions: [{x:5, y:1, z:5},{x:5, y:1, z:5},{x:5, y:1, z:5}],
  actions: [null, null, null]
};

export const reducer: Reducer<HummingbirdsState> = (state: HummingbirdsState = initialState, action) => {
  switch ((action as HummingbirdActions).type) {
    case TICK_HUMMINGBIRDS:
      return {...state,
        positions: [newBirdPosition(), newBirdPosition(), newBirdPosition()],
        actions: [newBirdAction(), newBirdAction(), newBirdAction()]
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
  let newAction: HummingbirdAction = null;
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
