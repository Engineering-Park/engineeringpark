import { Action } from 'redux';

// Define action types here
export const ADD_MOVE = "ADD_MOVE";

// Define action interfaces here
export interface AddMoveAction extends Action {
  payload: Move;
  type: typeof ADD_MOVE;
}

// Create a union type of all action interfaces here
export type GameActions = AddMoveAction;

// Define the state interfaces
export interface GameState {
  difficulty: number;
  sequence: Panel[];
  inputLocked: boolean;
}

export enum Panel {
  GREEN = "green",
  RED = "red",
  YELLOW = "yellow",
  BLUE = "blue"
}

export type Move = Panel[];
