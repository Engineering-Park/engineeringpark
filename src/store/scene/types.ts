import { Action } from 'redux';
import { Vector3Component } from 'metaverse-api'

// Define action types here
export const SET_COLOUR = "SET_COLOUR";
export const TICK = "TICK";
export const SET_DONUT_ANGLE = "SET_DONUT_ANGLE";

// Define action interfaces here
export interface SetColourAction extends Action {
  payload: string;
  type: typeof SET_COLOUR;
}

export interface TickAction extends Action {
  payload: number;
  type: typeof TICK;
}

export interface SetDonutAngleAction extends Action {
  payload: number;
  type: typeof SET_DONUT_ANGLE;
}

// Create a union type of all action interfaces here
export type SceneActions = SetColourAction | TickAction | SetDonutAngleAction;

// Define the state interfaces
export interface SceneState {
  pedestalColor: string | number;
  dogAngle: number;
  donutAngle: number;
  birdPositions: Vector3Component[];
  birdActions: BirdAction[];
}

export const colours = ['#3d9693', '#e8daa0', '#968fb7', '#966161', '#879e91', '#66656b', '#6699cc'];

export type BirdAction = null | 'looking' | 'shaking'
