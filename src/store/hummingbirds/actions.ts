import { ActionCreator } from 'redux';
import { TICK_HUMMINGBIRDS, TickHummingbirdsAction } from './types';

export const tickHummingbirdsAction: ActionCreator<TickHummingbirdsAction> = (dt: number) => ({
  payload: dt,
  type: TICK_HUMMINGBIRDS
});
