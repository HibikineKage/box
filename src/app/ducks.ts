import { Action } from 'redux';
import * as io from 'socket.io-client';

export const REQUEST_SERVER_INFO = 'REQUEST_SERVER_INFO';
export const RECEIVE_SERVER_INFO = 'RECEIVE_SERVER_INFO';
export const SERVRE_INFO_FETCH_SUCCEED = 'SERVER_INFO_FETCH_SUCCEED';
export const SERVER_INFO_FETCH_FAILED = 'SERVER_INFO_FETCH_FAILED';
export interface State {
  socket: SocketIOClient.Socket;
}
const initialState = {
  socket: io('http://localhost:3000'),
};
const reducer = (state: State = initialState, action: Action) => state;
export default reducer;
