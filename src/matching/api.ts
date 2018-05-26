import socket from '../app/socket';
import {MATCH_ROOM_SUCCEED, MATCH_ROOM_TIMEOUT} from './ducks';
import {ClientRoom} from '../server/app';
export const matchUser = () => new Promise((resolve, reject) => {
  socket.on(MATCH_ROOM_SUCCEED, (room : ClientRoom) => {
    resolve(room);
  });
});

export const matchUserTimeout = () => {
  socket.emit(MATCH_ROOM_TIMEOUT);
}