import { Action } from 'redux';
import { Player } from '../player/ducks';

export const ADD_BOX = 'ADD_BOX';
export interface AddBoxPayload {
  x: number;
  y: number;
  player: Player;
}
export interface AddBoxAction extends Action {
  payload: AddBoxPayload;
}
const initBox = (addBoxPayload: AddBoxPayload): Box => ({
  ...addBoxPayload,
  isFalling: false,
  isAlive: true,
});
export const REMOVE_BOX = 'REMOVE_BOX';
export interface Box {
  player: Player;
  isFalling: boolean;
  isAlive: boolean;
  x: number;
  y: number;
}
export interface State {
  boxes: Box[];
}
const initialState: State = { boxes: [] };
export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
  case ADD_BOX:
    return {
      ...state,
      boxes: [...state.boxes, initBox(action.payload)],
    };
  case REMOVE_BOX:
  default:
    return state;
  }
};
export default reducer;
