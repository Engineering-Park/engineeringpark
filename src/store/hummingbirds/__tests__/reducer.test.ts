import reducer from '../reducer'
​
describe('scene reducer', () => {
  xit('should return the initial state', () => {
    const answer = reducer(undefined, {payload: null, type: ''});
    expect(answer).toEqual({
      positions: [{x:5, y:1, z:5},{x:5, y:1, z:5},{x:5, y:1, z:5}],
      actions: [null, null, null]
    });
  });

  xit('should handle TICK_HUMMINGBIRDS', () => {
    const answer1 = reducer(undefined, {payload: 25, type: 'TICK_HUMMINGBIRDS'});
    expect(answer1).toEqual({
      positions: [{x:5, y:1, z:5},{x:5, y:1, z:5},{x:5, y:1, z:5}],
      actions: [null, null, null]
    });
    const answer2 = reducer(answer1, {payload: 25, type: 'TICK_HUMMINGBIRDS'});
    expect(answer2).toEqual({
      positions: [{x:5, y:1, z:5},{x:5, y:1, z:5},{x:5, y:1, z:5}],
      actions: [null, null, null]
    });
  });
});
