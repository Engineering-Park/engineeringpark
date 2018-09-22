import { Action } from 'redux';

// Define action types here
export const SET_COLOUR = "SET_COLOUR";

// Define action interfaces here
export interface SetColourAction extends Action {
  payload: string;
  type: typeof SET_COLOUR;
}

// Create a union type of all action interfaces here
export type SceneActions = SetColourAction;

// Define the state interfaces
export interface StaticState {
  colour: string | number;
}

export const colours = ['#3d9693', '#e8daa0', '#968fb7', '#966161', '#879e91', '#66656b', '#6699cc'];
