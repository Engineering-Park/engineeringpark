import { SceneActions } from '../types';
import { setColour, tick, setDonutAngle } from "../actions";

describe('actions', () => {
  it('should create an action to set the colour', () => {
    const expectedAction: SceneActions = {
      payload: '#e8daa0',
      type: 'SET_COLOUR'
    }
    expect(setColour('#e8daa0')).toEqual(expectedAction);
  })

  it('should create an action to tick the simulation', () => {
    const expectedAction: SceneActions = {
      payload: 20,
      type: 'TICK'
    }
    expect(tick(20)).toEqual(expectedAction);
  })

  it('should create an action to set the donut angle', () => {
    const expectedAction: SceneActions = {
      payload: 20,
      type: 'SET_DONUT_ANGLE'
    }
    expect(setDonutAngle(20)).toEqual(expectedAction);
  })
})
