import reducer from '../reducer'
import { Panel } from '../types'
​
describe('simonsays reducer', () => {
  it('should return the initial state', () => {
    const answer = reducer(undefined, {type: '', payload: []});
    expect(answer).toEqual({
      sequence: answer.sequence,
      inputLocked: false
    });
  });
​
  it('should handle ADD_MOVE when the move is correct', () => {
    // generate the initial state
    const initialState = reducer(undefined, {type: '', payload: []});

    // make the correct move
    const action = {
      type: 'ADD_MOVE',
      payload: initialState.sequence
    }
    const answer = reducer(initialState, action);

    const expectedState = {
      sequence: [...initialState.sequence, answer.sequence[1]],
      inputLocked: false
    }

    expect(answer).toEqual(expectedState);
  });

  it('should handle ADD_MOVE when the move is wrong', () => {
    // generate the initial state
    const initialState = reducer(undefined, {type: '', payload: []});

    // make the wrong move
    let move = Panel.GREEN;
    if (initialState.sequence[0] === Panel.GREEN) {
      move = Panel.YELLOW;
    }
    const action1 = {
      type: 'ADD_MOVE',
      payload: move
    }
    const answer1 = reducer(initialState, action1);

    const expectedState = {
      sequence: initialState.sequence,
      inputLocked: true
    }

    expect(answer1).toEqual(expectedState);

    // attempt to make the correct move
    const action2 = {
      type: 'ADD_MOVE',
      payload: initialState.sequence
    }
    const answer2 = reducer(answer1, action2);
    expect(answer2).toEqual(expectedState);
  });
});
