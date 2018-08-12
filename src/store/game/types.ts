import { Action } from 'redux';

// Define action types here
export const SET_COLOUR = "SET_COLOUR";
export const SET_DOG_ANGLE = "SET_DOG_ANGLE";
export const SET_DONUT_ANGLE = "SET_DONUT_ANGLE";

// Define action interfaces here
export interface SetColourAction extends Action {
  payload: string;
  type: typeof SET_COLOUR;
}

export interface SetDogAngleAction extends Action {
  payload: number;
  type: typeof SET_DOG_ANGLE;
}

export interface SetDonutAngleAction extends Action {
  payload: number;
  type: typeof SET_DONUT_ANGLE;
}

// Create a union type of all action interfaces here
export type GameActions = SetColourAction | SetDogAngleAction | SetDonutAngleAction;

// Define the state interfaces
export interface GameState {
  pedestalColor: string | number;
  dogAngle: number;
  donutAngle: number;
}

export const colours = ['#3d9693', '#e8daa0', '#968fb7', '#966161', '#879e91', '#66656b', '#6699cc'];
