import { Action } from 'redux';
import { Vector3Component } from 'metaverse-api'

// Define action types here
export const TICK_HUMMINGBIRDS = "TICK_HUMMINGBIRDS";

// Define action interfaces here
export interface TickHummingbirdsAction extends Action {
  payload: number;
  type: typeof TICK_HUMMINGBIRDS;
}

// Create a union type of all action interfaces here
export type HummingbirdActions = TickHummingbirdsAction;

// Define the state interfaces
export interface HummingbirdsState {
  positions: Vector3Component[];
  actions: HummingbirdAction[];
}

export type HummingbirdAction = null | 'looking' | 'shaking'
