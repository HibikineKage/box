import * as express from 'express';
import * as dotenv from 'dotenv';
import * as socketIO from 'socket.io';
import {REQUEST_ROOM_LIST, RECEIVE_ROOM_LIST} from '../rooms/ducks';
import sha256 = require('crypto-js');
dotenv.config({path: '.env'});
const app = express();
const io = socketIO(require('http').Server(app));

export interface Room {
  name : string;
  passwordHash : string;
  host : User;
}
export interface ClientRoom {
  name : string;
  hostName : string;
}
const rooms : Room[] = [];

export interface User {
  name : string;
}
const waintingUsers : User[] = [];

const getRoomList = () : ClientRoom[] => rooms.map(room => ({name: room.name, hostName: room.host.name}))

app.set('port', process.env.PORT || 3000);
io.on('connection', (socket : socketIO.Socket) => {
  console.log('connected');
  socket.on(REQUEST_ROOM_LIST, () => {
    socket.emit(RECEIVE_ROOM_LIST, getRoomList());
  })
});
export default app;