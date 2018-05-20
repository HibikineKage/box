import socket from '../app/socket';
import {ClientRoom} from '../server/app';
import {
  REQUEST_ROOM_LIST,
  RECEIVE_ROOM_LIST,
  ADD_ROOM,
  CreateRoom,
  ADD_ROOM_SUCCEED,
  ADD_ROOM_FAILED
} from './ducks';

export const fetchRoomList = async() => {
  return new Promise((resolve, reject) => {
    socket.on(RECEIVE_ROOM_LIST, (a : ClientRoom[]) => {
      resolve(a);
    });
    socket.emit(REQUEST_ROOM_LIST);
  });
}

export const addRoom = async(roomName : string) => {
  return new Promise((resolve, reject) => {
    const createRoom : CreateRoom = {
      roomName
    };
    socket.on(ADD_ROOM_SUCCEED, () => {
      resolve();
    })
    socket.on(ADD_ROOM_FAILED, () => {
      reject();
    })
    console.log('addroom');
    socket.emit(ADD_ROOM, createRoom);
  })
}
