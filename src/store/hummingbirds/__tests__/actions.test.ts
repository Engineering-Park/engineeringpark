import { HummingbirdActions } from '../types';
import { createHummingbirdAction, moveHummingbirdAction } from "../actions";

describe('actions', () => {
  it('should create an action to create a hummingbird', () => {
    const expectedAction: HummingbirdActions = {
      payload: 0,
      type: 'CREATE_HUMMINGBIRD'
    }
    expect(createHummingbirdAction(0)).toEqual(expectedAction);
  })

  it('should create an action to move a hummingbird', () => {
    const expectedAction: HummingbirdActions = {
      payload: 0,
      type: 'MOVE_HUMMINGBIRD'
    }
    expect(moveHummingbirdAction(0)).toEqual(expectedAction);
  })
})
