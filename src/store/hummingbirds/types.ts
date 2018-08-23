import { Action } from 'redux';
import { Vector3Component } from 'metaverse-api'

// Define action types here
export const MOVE_HUMMINGBIRD = "MOVE_HUMMINGBIRD";
export const CREATE_HUMMINGBIRD = "CREATE_HUMMINGBIRD";

// Define action interfaces here
export interface MoveHummingbirdAction extends Action {
  payload: number;
  type: typeof MOVE_HUMMINGBIRD;
}

export interface CreateHummingbirdAction extends Action {
  payload: number;
  type: typeof CREATE_HUMMINGBIRD;
}

// Create a union type of all action interfaces here
export type HummingbirdActions = MoveHummingbirdAction | CreateHummingbirdAction;

// Define the state interfaces
export interface HummingbirdsState {
  positions: Vector3Component[];
  actions: HummingbirdAction[];
}

export type HummingbirdAction = null | 'looking' | 'shaking'
