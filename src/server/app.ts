/* eslint no-console: 0 */
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as socketIO from 'socket.io';
import {
  REQUEST_ROOM_LIST,
  RECEIVE_ROOM_LIST,
  ADD_ROOM,
  CreateRoom,
  ADD_ROOM_SUCCEED,
  LEAVE_ROOM,
} from '../rooms/ducks';
import {
  MATCH_ROOM,
  JOIN_ROOM,
  JOIN_ROOM_FAILED,
  JOIN_ROOM_SUCCEED,
} from '../matching/ducks';
import { nextRoomId } from './utils';

import sha256 = require('crypto-js');
dotenv.config({ path: '.env' });
const app = express();
const http = require('http').Server(app);

const io = socketIO(http, { origins: 'localhost:*' });

export enum RoomStatus {
  Waiting = 'Waiting',
  Matching = 'Matching',
  Playing = 'Playing',
}

export interface Room {
  name: string;
  host: User;
  isPrivate: boolean;
  status: RoomStatus;
  players: User[];
  watchers: User[];
  roomId: number;
}

export interface ClientRoom {
  name: string;
  hostName: string;
  isPrivate: boolean;
  status: RoomStatus;
  roomId: number;
}
let rooms: Room[] = [];

export interface User {
  name: string;
  socketId: string;
}

const waintingUsers: User[] = [];
let users: User[] = [];

const roomToClientRoom = (room: Room): ClientRoom => ({
  name: room.name,
  hostName: room.host.name,
  isPrivate: room.isPrivate,
  status: room.status,
  roomId: room.roomId,
});

const getRoomList = (): ClientRoom[] => rooms.map(roomToClientRoom);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'localhost:*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});
app.use(express.static('public'));
app.set('port', process.env.PORT || 3030);
console.log(`port set to ${process.env.PORT || 3030}`);

export const CONNECTION_EXPIRED_ERROR = 'CONNECTION_EXPIRED_ERROR';
const getUser = (socketId: string): User | undefined =>
  users.find(user => user.socketId === socketId);
io.on('connection', (socket: socketIO.Socket) => {
  console.log('connected');
  users.push({ name: 'ななしちゃん', socketId: socket.client.id });

  socket.on(REQUEST_ROOM_LIST, () => {
    console.log('server room list requested');
    socket.emit(RECEIVE_ROOM_LIST, getRoomList());
  });

  socket.on(ADD_ROOM, ({ roomName, isPrivate }: CreateRoom) => {
    console.log('add new room');
    const host = getUser(socket.client.id);
    if (host === undefined) {
      socket.emit(CONNECTION_EXPIRED_ERROR);
      return;
    }
    rooms.push({
      name: roomName,
      host,
      isPrivate,
      status: RoomStatus.Matching,
      players: [host],
      watchers: [],
      roomId: nextRoomId(),
    });
    console.log(rooms);
    socket.emit(ADD_ROOM_SUCCEED);
  });

  socket.on(LEAVE_ROOM, () => {
    rooms = rooms.filter(room => room.host.socketId !== socket.client.id);
  });

  socket.on(JOIN_ROOM, (joinRoom: ClientRoom) => {
    const selectedRoom = rooms.find(room => {
      if (room.name !== joinRoom.name) {
        return false;
      }
      if (room.host.name !== joinRoom.hostName) {
        return false;
      }
      if (room.isPrivate !== joinRoom.isPrivate) {
        return false;
      }
      if (room.roomId !== joinRoom.roomId) {
        return false;
      }
      if (room.players.length > 1) {
        return false;
      }
      return true;
    });
    if (selectedRoom === undefined) {
      socket.emit(JOIN_ROOM_FAILED);
      return;
    }

    const user = getUser(socket.client.id);
    if (user === undefined) {
      socket.emit(CONNECTION_EXPIRED_ERROR);
      return;
    }
    selectedRoom.players.push(user);
    socket.emit(JOIN_ROOM_SUCCEED, selectedRoom);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected.');
    users = users.filter(user => user.socketId !== socket.client.id);
  });
});
http.listen(app.get('port'), () => {
  console.log(`listening on *:${app.get('port')}`);
});

export default app;
