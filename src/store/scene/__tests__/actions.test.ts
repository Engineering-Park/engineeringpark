import { SceneActions } from '../types';
import { setColour, setDogAngle, setDonutAngle } from "../actions";

describe('actions', () => {
  it('should create an action to set the colour', () => {
    const expectedAction: SceneActions = {
      payload: '#e8daa0',
      type: 'SET_COLOUR'
    }
    expect(setColour('#e8daa0')).toEqual(expectedAction);
  })

  it('should create an action to set the dog angle', () => {
    const expectedAction: SceneActions = {
      payload: 2,
      type: 'SET_DOG_ANGLE'
    }
    expect(setDogAngle(2)).toEqual(expectedAction);
  })

  it('should create an action to set the donut angle', () => {
    const expectedAction: SceneActions = {
      payload: 20,
      type: 'SET_DONUT_ANGLE'
    }
    expect(setDonutAngle(20)).toEqual(expectedAction);
  })
})
