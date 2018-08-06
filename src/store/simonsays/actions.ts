import { ActionCreator } from 'redux';
import { ADD_MOVE, AddMoveAction, Move } from './types';

export const addMove: ActionCreator<AddMoveAction> = (move: Move) => ({
  payload: move,
  type: ADD_MOVE
});
