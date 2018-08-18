import reducer from '../reducer'
​
describe('scene reducer', () => {
  it('should return the initial state', () => {
    const answer = reducer(undefined, {payload: null, type: ''});
    expect(answer).toEqual({
      positions: [{x:5, y:1, z:5},{x:5, y:1, z:5},{x:5, y:1, z:5}],
      actions: [null, null, null]
    });
  });
});
