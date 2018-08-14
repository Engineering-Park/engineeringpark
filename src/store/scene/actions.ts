import { ActionCreator } from 'redux';
import { SET_COLOUR, SET_DOG_ANGLE, SET_DONUT_ANGLE,
  SetColourAction, SetDogAngleAction, SetDonutAngleAction } from './types';

export const setColour: ActionCreator<SetColourAction> = (colour: string) => ({
  payload: colour,
  type: SET_COLOUR
});

export const setDogAngle: ActionCreator<SetDogAngleAction> = (angle: number) => ({
  payload: angle,
  type: SET_DOG_ANGLE
});

export const setDonutAngle: ActionCreator<SetDonutAngleAction> = (angle: number) => ({
  payload: angle,
  type: SET_DONUT_ANGLE
});
