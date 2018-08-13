import reducer from '../reducer'
import { colours } from '../types';
​
describe('scene reducer', () => {
  it('should return the initial state', () => {
    const answer = reducer(undefined, {payload: null, type: ''});
    expect(answer).toEqual({
      pedestalColor: colours[0],
      dogAngle: 0,
      donutAngle: 0
    });
  });
​
  it('should handle SET_COLOUR', () => {
    const answer = reducer(undefined, {payload: '#968fb7', type: 'SET_COLOUR'});
    expect(answer).toEqual({
      pedestalColor: colours[2],
      dogAngle: 0,
      donutAngle: 0
    });
  });

  it('should handle TICK', () => {
    const answer1 = reducer(undefined, {payload: 25, type: 'TICK'});
    expect(answer1).toEqual({
      pedestalColor: colours[0],
      dogAngle: 25,
      donutAngle: 0
    });
    const answer2 = reducer(answer1, {payload: 25, type: 'TICK'});
    expect(answer2).toEqual({
      pedestalColor: colours[0],
      dogAngle: 50,
      donutAngle: 0
    });
  });

  it('should handle SET_DONUT_ANGLE', () => {
    const answer = reducer(undefined, {payload: 180, type: 'SET_DONUT_ANGLE'});
    expect(answer).toEqual({
      pedestalColor: colours[0],
      dogAngle: 0,
      donutAngle: 180
    });
  });
});
