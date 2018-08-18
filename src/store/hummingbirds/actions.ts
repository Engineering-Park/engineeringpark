import { ActionCreator } from 'redux';
import { CREATE_HUMMINGBIRD, CreateHummingbirdAction, MOVE_HUMMINGBIRD, MoveHummingbirdAction } from './types';

export const moveHummingbirdAction: ActionCreator<MoveHummingbirdAction> = (bird: number) => ({
  payload: bird,
  type: MOVE_HUMMINGBIRD
});

export const createHummingbirdAction: ActionCreator<CreateHummingbirdAction> = (id: number) => ({
  payload: id,
  type: CREATE_HUMMINGBIRD
});
