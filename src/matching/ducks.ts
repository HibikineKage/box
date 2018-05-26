import { Action } from 'redux';
import { ADD_ROOM_SUCCEED } from '../rooms/ducks';
export const MATCH_ROOM_SUCCEED = 'MATCH_ROOM_SUCCEED';
export const MATCH_ROOM_FAILED = 'MATCH_ROOM_FAILED';
export const JOIN_ROOM = 'JOIN_ROOM';
export const JOIN_ROOM_SUCCEED = 'JOIN_ROOM_SUCCEED';
export const JOIN_ROOM_FAILED = 'JOIN_ROOM_FAILED';
export enum MatchingStatus {
  Default = 'DEFAULT',
  Waiting = 'WAITING',
  Joining = 'JOINING',
}
export interface State {
  status: MatchingStatus;
}
const initialState: State = {
  status: MatchingStatus.Default,
};
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_ROOM_SUCCEED:
      return { ...state, status: MatchingStatus.Waiting };
    case JOIN_ROOM:
      return { ...state, status: MatchingStatus.Joining };
    case MATCH_ROOM_FAILED:
    case JOIN_ROOM_FAILED:
      return { ...state, status: MatchingStatus.Default };
  }
  return state;
};
export default reducer;
