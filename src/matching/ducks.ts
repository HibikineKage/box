import { Action } from 'redux';
import { actionCreatorFactory, isType } from 'typescript-fsa';
import { ADD_ROOM_SUCCEED } from '../rooms/ducks';
import { ClientRoom } from '../server/app';

const actionCreator = actionCreatorFactory();
export const MATCH_ROOM_SUCCEED = 'MATCH_ROOM_SUCCEED';
export const matchRoomSucceed = actionCreator<ClientRoom>(MATCH_ROOM_SUCCEED);
export const MATCH_ROOM_FAILED = 'MATCH_ROOM_FAILED';
export const MATCH_ROOM = 'MATCH_ROOM';
export const MATCH_ROOM_TIMEOUT = 'MATCH_ROOM_TIMEOUT';
export const JOIN_ROOM = 'JOIN_ROOM';
export const JOIN_ROOM_SUCCEED = 'JOIN_ROOM_SUCCEED';
export const JOIN_ROOM_TIMEOUT = 'JOIN_ROOM_TIMEOUT';
export const joinRoomSucceed = actionCreator<ClientRoom>(JOIN_ROOM_SUCCEED);
export const JOIN_ROOM_FAILED = 'JOIN_ROOM_FAILED';
export const DELETED_ROOM = 'DELETED_ROOM';
export interface MatchingUser {
  name: string;
}
export interface JoinRoomAction extends Action {
  payload: ClientRoom;
}
export enum MatchingStatus {
  Default = 'DEFAULT',
  Waiting = 'WAITING',
  Joining = 'JOINING',
  Timeout = 'TIMEOUT',
}
export interface State {
  status: MatchingStatus;
}
const initialState: State = {
  status: MatchingStatus.Default,
};
const reducer = (state: State = initialState, action: Action) => {
  if (isType(action, joinRoomSucceed) || isType(action, matchRoomSucceed)) {
    return {
      ...state,
      status: MatchingStatus.Default,
    };
  }
  switch (action.type) {
  case ADD_ROOM_SUCCEED:
    return {
      ...state,
      status: MatchingStatus.Waiting,
    };
  case JOIN_ROOM:
    return {
      ...state,
      status: MatchingStatus.Joining,
    };
  case MATCH_ROOM_FAILED:
  case JOIN_ROOM_FAILED:
    return {
      ...state,
      status: MatchingStatus.Default,
    };
  case MATCH_ROOM_TIMEOUT:
    return {
      ...state,
      status: MatchingStatus.Timeout,
    };
  default:
    return state;
  }
};
export default reducer;
