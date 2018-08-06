import { GameActions, Move, Panel } from '../types';
import { addMove } from "../actions";

describe('actions', () => {
  it('should create an action to add a move', () => {
    const move: Move = [Panel.GREEN, Panel.BLUE, Panel.YELLOW, Panel.RED];
    const expectedAction: GameActions = {
      type: 'ADD_MOVE',
      payload: move
    }
    expect(addMove(move)).toEqual(expectedAction);
  })
})
