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

  it('should handle SET_DOG_ANGLE', () => {
    const answer1 = reducer(undefined, {payload: 2, type: 'SET_DOG_ANGLE'});
    expect(answer1).toEqual({
      pedestalColor: colours[0],
      dogAngle: 2,
      donutAngle: 0
    });
    const answer2 = reducer(answer1, {payload: 3, type: 'SET_DOG_ANGLE'});
    expect(answer2).toEqual({
      pedestalColor: colours[0],
      dogAngle: 5,
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
