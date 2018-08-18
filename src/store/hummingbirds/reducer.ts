import { Reducer } from 'redux';
import { CREATE_HUMMINGBIRD, HummingbirdAction, HummingbirdActions, HummingbirdsState, MOVE_HUMMINGBIRD } from './types';
import { Vector3Component } from 'metaverse-api'

const initialState: HummingbirdsState = {
  positions: [{x:5, y:1, z:5},{x:5, y:1, z:5},{x:5, y:1, z:5}],
  actions: [null, null, null]
};

export const reducer: Reducer<HummingbirdsState> = (state: HummingbirdsState = initialState, action) => {
  switch ((action as HummingbirdActions).type) {
    case CREATE_HUMMINGBIRD:
      return {...state,
        positions: [...state.positions, {x: 4, y: 2, z: 8}],
        actions: [...state.actions, null]
      };
    case MOVE_HUMMINGBIRD:
      return {...state,
        positions: newBirdPositions(state.positions, action.payload),
        actions: newBirdActions(state.actions, action.payload)
      };
    default:
      return state;
  }
};

export default reducer;

function newBirdPositions(positions: Vector3Component[], bird: number) {
  let newPositions = positions.slice();
  newPositions[bird] = {
    x: (Math.random() *10 ),
    y:  Math.random() *2 + 1,
    z: (Math.random() *10 - 5)
  }
  return newPositions;
}

function newBirdActions(actions: HummingbirdAction[], bird: number) {
  let newActions = actions.slice();
  const ranNum = Math.random()
  if (ranNum < 0.6){
    newActions[bird] = null
  } else if (ranNum < 0.8) {
    newActions[bird] = 'looking'
  } else {
    newActions[bird] = 'shaking'
  }
  return newActions;
}
