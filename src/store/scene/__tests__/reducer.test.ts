import reducer from '../reducer'
import { colours } from '../types';

describe('scene reducer', () => {
  it('should return the initial state', () => {
    const answer = reducer(undefined, { payload: null, type: '' });
    expect(answer).toEqual({
      colour: colours[0]
    });
  });

  it('should handle SET_COLOUR', () => {
    const answer = reducer(undefined, { payload: '#968fb7', type: 'SET_COLOUR' });
    expect(answer).toEqual({
      colour: colours[2]
    });
  });
});
