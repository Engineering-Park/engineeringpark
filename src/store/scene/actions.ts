import { ActionCreator } from 'redux';
import { SET_COLOUR, SetColourAction } from './types';

export const setColour: ActionCreator<SetColourAction> = (colour: string) => ({
  payload: colour,
  type: SET_COLOUR
});
