import {Action} from 'redux';
import {ADD_ROOM_SUCCEED} from '../rooms/ducks';
import {MATCH_ROOM_FAILED, JOIN_ROOM_SUCCEED, MATCH_ROOM_SUCCEED, JOIN_ROOM_FAILED, JOIN_ROOM} from '../matching/ducks';
export enum Scene {
  Top = 'TOP',
  Rooms = 'ROOMS',
  Game = 'GAME',
  Matching = 'MATCHING'
}
export interface State {
  currentScene : Scene;
}
const initialState : State = {
  currentScene: Scene.Rooms
};
export const reducer = (state : State = initialState, action : Action) : State => {
  switch (action.type) {
    case ADD_ROOM_SUCCEED:
    case JOIN_ROOM:
      return {
        ...state,
        currentScene: Scene.Matching
      };
    case MATCH_ROOM_FAILED:
    case JOIN_ROOM_FAILED:
      return {
        ...state,
        currentScene: Scene.Rooms
      };
    case JOIN_ROOM_SUCCEED:
    case MATCH_ROOM_SUCCEED:
      return {
        ...state,
        currentScene: Scene.Game
      };
  }
  return state;
}
export default reducer;