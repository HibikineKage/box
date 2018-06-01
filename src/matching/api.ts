import { Action } from 'redux';
import socket from '../app/socket';
import { MATCH_ROOM_SUCCEED, MATCH_ROOM_TIMEOUT, DELETED_ROOM } from './ducks';
import { ClientRoom } from '../server/app';
import { wait } from '../utils';

export const matchUser = (): Promise<ClientRoom> =>
  new Promise((resolve, reject) => {
    socket.on(MATCH_ROOM_SUCCEED, (room: ClientRoom) => {
      resolve(room);
    });
  });

export const matchUserTimeout = (): Promise<any> => {
  socket.emit(MATCH_ROOM_TIMEOUT);
  return Promise.race([
    new Promise(resolve =>
      socket.on(DELETED_ROOM, () => {
        resolve();
      }),
    ),
    wait(3000),
  ]);
};

export const joinRoom = (room: ClientRoom): Promise<ClientRoom | Action> => {
  const race: Promise<ClientRoom | Action | null> = Promise.race([
    new Promise(resolve => socket.on(JOIN_ROOM_SUCCEED, resolve)),
    new Promise(resolve => socket.on(JOIN_ROOM_FAILED, resolve)),
  ]);
  socket.emit(JOIN_ROOM, room);
  return race;
}

