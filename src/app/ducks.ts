import {Action} from 'redux';
export const REQUEST_SERVER_INFO = 'REQUEST_SERVER_INFO';
export const RECEIVE_SERVER_INFO = 'RECEIVE_SERVER_INFO';
export const SERVRE_INFO_FETCH_SUCCEED = 'SERVER_INFO_FETCH_SUCCEED';
export const SERVER_INFO_FETCH_FAILED = 'SERVER_INFO_FETCH_FAILED';
export interface State {}
const initialState = {};
const reducer = (state : State = initialState, action : Action) => {
  return state;
};
export default reducer;
