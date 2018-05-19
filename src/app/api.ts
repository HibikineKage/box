import * as io from 'socket.io-client';
import {REQUEST_SERVER_INFO, RECEIVE_SERVER_INFO} from './ducks';
import {ServerInfo} from './sagas';

const socket = io();
export const fetchServerInfo = async() => {
  socket.emit(REQUEST_SERVER_INFO);
  return await new Promise((resolve, reject) => socket.on(RECEIVE_SERVER_INFO, resolve));
}