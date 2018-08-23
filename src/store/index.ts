import { combineReducers, Reducer } from 'redux';

// Import state types and reducers here
import { SceneState } from './scene/types';
import sceneReducer from './scene/reducer';
import { HummingbirdsState } from './hummingbirds/types';
import hummingBirdReducer from './hummingbirds/reducer';

// The top-level state object
export interface ApplicationState {
  hummingbirds: HummingbirdsState;
  scene: SceneState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  hummingbirds: hummingBirdReducer,
  scene: sceneReducer
});
