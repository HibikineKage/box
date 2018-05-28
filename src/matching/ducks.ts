import {Action} from 'redux';
export const MATCH_ROOM_SUCCEED = 'MATCH_ROOM_SUCCEED';
export const MATCH_ROOM_FAILED = 'MATCH_ROOM_FAILED';
export const MATCH_ROOM = 'MATCH_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';
export const JOIN_ROOM_SUCCEED = 'JOIN_ROOM_SUCCEED';
export const JOIN_ROOM_FAILED = 'JOIN_ROOM_FAILED';
export interface MatchingUser {
  name: string;
}
export enum MatchingStatus {
  Waiting = 'WAITING',
  Joining = 'JOINING'
}
export interface State {
  status : MatchingStatus
}
const initialState : State = {
  status: MatchingStatus.Joining
};
const reducer = (state : State = initialState, action : Action) => {
  return state;
}