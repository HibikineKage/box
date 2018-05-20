import {Action} from 'redux';
import {ClientRoom} from '../server/app';
export const REQUEST_ROOM_LIST = 'REQUEST_ROOM_LIST';
export const RECEIVE_ROOM_LIST = 'RECEIVE_ROOM_LIST';
export const ROOM_LIST_FETCH_FAILED = 'ROOM_LIST_FETCH_FAILED';
export const ROOM_LIST_FETCH_SUCCEED = 'ROOM_LIST_FETCH_SUCCEED';
export const ADD_ROOM = 'ADD_ROOM';
export const ADD_ROOM_FAILED = 'ADD_ROOM_FAILED';
export const ADD_ROOM_SUCCEED = 'ADD_ROOM_SUCCEED';
export const requestRoomList = () => ({type: REQUEST_ROOM_LIST});
export interface AddRoomPayload {
  roomName : string
}
export interface State {
  rooms : ClientRoom[]
}
export interface CreateRoom {
  roomName : string;
}
export interface RoomListFetchSucceedAction extends Action {
  payload : ClientRoom[];
}
const initialState : State = {
  rooms: []
};
export const reducer = (state : State = initialState, action : Action) => {
  switch (action.type) {
    case ROOM_LIST_FETCH_SUCCEED:
      const roomListFetchAction = action as RoomListFetchSucceedAction;
      return {
        ...state,
        rooms: roomListFetchAction.payload
      }
  }
  return state;
}
export default reducer;