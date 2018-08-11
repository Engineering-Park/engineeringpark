import reducer from '../reducer'
import { Move, Panel } from '../types'
​
describe('game reducer', () => {
  it('should return the initial state', () => {
    const answer = reducer(undefined, {type: '', payload: []});
    expect(answer).toEqual({
      difficulty: 1,
      sequence: answer.sequence,
      inputLocked: false
    });
  });
​
  it('should handle ADD_MOVE when the move is correct', () => {
    // generate the initial state
    const initialState = reducer(undefined, {type: '', payload: []});

    // make the correct move
    const move = initialState.sequence;

    const action = {
      type: 'ADD_MOVE',
      payload: move
    }

    const answer = reducer(initialState, action);

    const expectedState = {
      difficulty: 2,
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

    const action = {
      type: 'ADD_MOVE',
      payload: move
    }

    const answer = reducer(initialState, action);

    const expectedState = {
      difficulty: 1,
      sequence: initialState.sequence,
      inputLocked: true
    }

    expect(answer).toEqual(expectedState);
  });

  it('should not make a move when the input is locked', () => {
    // generate the initial state
    const initialState = reducer(undefined, {type: '', payload: []});

    // make the wrong move
    let move = Panel.GREEN;
    if (initialState.sequence[0] === Panel.GREEN) {
      move = Panel.YELLOW;
    }

    const action = {
      type: 'ADD_MOVE',
      payload: move
    }

    const answer1 = reducer(initialState, action);

    const expectedState = {
      difficulty: 1,
      sequence: initialState.sequence,
      inputLocked: true
    }

    expect(answer1).toEqual(expectedState);

    const answer2 = reducer(initialState, action);
    expect(answer2).toEqual(expectedState);
  });
});
