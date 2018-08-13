import { ActionCreator } from 'redux';
import { SET_COLOUR, TICK, SET_DONUT_ANGLE,
  SetColourAction, TickAction, SetDonutAngleAction } from './types';

export const setColour: ActionCreator<SetColourAction> = (colour: string) => ({
  payload: colour,
  type: SET_COLOUR
});

export const tick: ActionCreator<TickAction> = (dt: number) => ({
  payload: dt,
  type: TICK
});

export const setDonutAngle: ActionCreator<SetDonutAngleAction> = (angle: number) => ({
  payload: angle,
  type: SET_DONUT_ANGLE
});
