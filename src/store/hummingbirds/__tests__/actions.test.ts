import { HummingbirdActions } from '../types';
import { tickHummingbirdsAction } from "../actions";

describe('actions', () => {
  it('should create an action to tick the simulation', () => {
    const expectedAction: HummingbirdActions = {
      payload: 20,
      type: 'TICK_HUMMINGBIRDS'
    }
    expect(tickHummingbirdsAction(20)).toEqual(expectedAction);
  })
})
