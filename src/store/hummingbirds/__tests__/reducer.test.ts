import reducer from '../reducer'
​
describe('scene reducer', () => {
  it('should return the initial state', () => {
    const answer = reducer(undefined, {payload: null, type: ''});
    expect(answer).toEqual({
      positions: [],
      actions: []
    });
  });
});
