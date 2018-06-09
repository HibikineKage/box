/* eslint no-console: 0 */
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as socketIO from 'socket.io';
import { Server } from 'http';
import * as path from 'path';
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
  DELETED_ROOM,
  MATCH_ROOM_TIMEOUT,
} from '../matching/ducks';
import { nextRoomId } from './utils';
import setHeader from './header';
import Users, { User } from './users';
import { CONNECTION_EXPIRED_ERROR } from './errors';
import Rooms, { Room, RoomStatus } from './rooms';

dotenv.config({ path: '.env' });
const http = require('http');

export interface ClientRoom {
  name: string;
  hostName: string;
  isPrivate: boolean;
  status: RoomStatus;
  roomId: number;
}

const roomToClientRoom = (room: Room): ClientRoom => ({
  name: room.name,
  hostName: room.host.name,
  isPrivate: room.isPrivate,
  status: room.status,
  roomId: room.roomId,
});

export default class App {
  app: express.Express;
  http: Server;
  io: SocketIO.Server;
  waitintgUsers: User[] = [];
  users: User[] = new Users();
  rooms: Room[] = new Rooms();
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
    this.io = socketIO(http, { origins: 'localhost:*' });
    this.app.use(setHeader);
    this.app.use('/', express.static(path.resolve('public')));
    this.app.set('port', process.env.PORT || 3030);
    console.log(`port set to ${process.env.PORT || 3030}`);

    this.http.listen(this.app.get('port'), () => {
      console.log(`listening on *:${this.app.get('port')}`);
    });

    this.io.on('connection', (socket: socketIO.Socket) => {
      console.log('connected');
      this.users.push({ name: 'ななしちゃん', socketId: socket.client.id });

      socket.on(REQUEST_ROOM_LIST, () => {
        console.log('server room list requested');
        socket.emit(RECEIVE_ROOM_LIST, this.getRoomList());
      });

      socket.on(ADD_ROOM, ({ roomName, isPrivate }: CreateRoom) => {
        console.log('add new room');
        const host = this.getUser(socket.client.id);
        if (host === undefined) {
          socket.emit(CONNECTION_EXPIRED_ERROR);
          return;
        }
        this.rooms.push({
          name: roomName,
          host,
          isPrivate,
          status: RoomStatus.Matching,
          players: [host],
          watchers: [],
          roomId: nextRoomId(),
        });
        socket.emit(ADD_ROOM_SUCCEED);
      });

      socket.on(MATCH_ROOM_TIMEOUT, () => {
        this.rooms = this.rooms.filter(
          room => room.host.socketId !== socket.client.id,
        );
        socket.emit(DELETED_ROOM);
      });

      socket.on(JOIN_ROOM, (joinRoom: ClientRoom) => {
        const selectedRoom = this.rooms.find(room => {
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

        const user = this.getUser(socket.client.id);
        if (user === undefined) {
          socket.emit(CONNECTION_EXPIRED_ERROR);
          return;
        }
        selectedRoom.players.push(user);
        socket.emit(JOIN_ROOM_SUCCEED, selectedRoom);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected.');
        this.users = this.users.filter(
          user => user.socketId !== socket.client.id,
        );
        this.rooms = this.rooms.filter(
          room => room.host.socketId !== socket.client.id,
        );
      });
    });
  }
  getRoomList(): ClientRoom[] {
    return this.rooms.map(roomToClientRoom);
  }
  getUser(socketId: string): User | undefined {
    return this.users.find(user => user.socketId === socketId);
  }
}
