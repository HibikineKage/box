import {Action} from 'redux';
import {ClientRoom} from '../server/app';
export const REQUEST_ROOM_LIST = 'REQUEST_ROOM_LIST';
export const RECEIVE_ROOM_LIST = 'RECEIVE_ROOM_LIST';
export interface State {
  rooms : ClientRoom[]
}
const initialState : State = {
  rooms: []
};
export const reducer = (state : State = initialState, action : Action) => {
  return state;
}
export default reducer;