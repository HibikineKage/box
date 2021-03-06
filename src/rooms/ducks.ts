import { Action } from 'redux';
import { ClientRoom } from '../server/app';
import { actionCreatorFactory, isType } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
export const REQUEST_ROOM_LIST = 'REQUEST_ROOM_LIST';
export const RECEIVE_ROOM_LIST = 'RECEIVE_ROOM_LIST';
export const ROOM_LIST_FETCH_FAILED = 'ROOM_LIST_FETCH_FAILED';
export const ROOM_LIST_FETCH_SUCCEED = 'ROOM_LIST_FETCH_SUCCEED';
export const fetchRoomListSucceed = actionCreator<ClientRoom[]>(ROOM_LIST_FETCH_SUCCEED);
export const ADD_ROOM = 'ADD_ROOM';
export const ADD_ROOM_FAILED = 'ADD_ROOM_FAILED';
export const ADD_ROOM_SUCCEED = 'ADD_ROOM_SUCCEED';
export const START_CPU_BATTLE = 'START_CPU_BATTLE';
export const LEAVE_ROOM = 'LEAVE_ROOM';
export const requestRoomList = () => ({ type: REQUEST_ROOM_LIST });
export interface AddRoomPayload {
  roomName: string;
}
export interface State {
  rooms: ClientRoom[];
}
export interface CreateRoom {
  roomName: string;
  isPrivate: boolean;
}

const initialState: State = {
  rooms: [],
};
export const reducer = (state: State = initialState, action: Action) => {
  if (isType(action, fetchRoomListSucceed)) {
    return {
      ...state,
      rooms: action.payload,
    };
  }
  return state;
};
export default reducer;
