import { SceneActions } from '../types';
import { setColour } from "../actions";

describe('actions', () => {
  it('should create an action to set the colour', () => {
    const expectedAction: SceneActions = {
      payload: '#e8daa0',
      type: 'SET_COLOUR'
    }
    expect(setColour('#e8daa0')).toEqual(expectedAction);
  })
})
