import {Action} from 'redux';
export enum Scene {
  Top = 'TOP',
  Rooms = 'ROOMS'
}
export interface State {
  currentScene : Scene;
}
const initialState : State = {
  currentScene: Scene.Rooms
};
export const reducer = (state : State = initialState, action : Action) => {
  return state;
}
export default reducer;