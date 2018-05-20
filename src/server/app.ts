import * as express from 'express';
import * as dotenv from 'dotenv';
import * as socketIO from 'socket.io';
import {REQUEST_ROOM_LIST, RECEIVE_ROOM_LIST, ADD_ROOM, CreateRoom, ADD_ROOM_SUCCEED} from '../rooms/ducks';
import sha256 = require('crypto-js');
dotenv.config({path: '.env'});
const app = express();
const http = require('http').Server(app);
const io = socketIO(http, {origins: 'localhost:*'});

export interface Room {
  name : string;
  host : User;
}
export interface ClientRoom {
  name : string;
  hostName : string;
}
const rooms : Room[] = [];

export interface User {
  name : string;
  socketId : string;
}

const waintingUsers : User[] = [];
let users : User[] = [];

const getRoomList = () : ClientRoom[] => rooms.map(room => ({name: room.name, hostName: room.host.name}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'localhost:*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
})
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);
console.log(`port set to ${process.env.PORT || 3000}`);
io.on('connection', (socket : socketIO.Socket) => {
  console.log('connected');
  users.push({name: 'ななしちゃん', socketId: socket.client.id});

  socket.on(REQUEST_ROOM_LIST, () => {
    console.log('server room list requested');
    socket.emit(RECEIVE_ROOM_LIST, getRoomList());
  });

  socket.on(ADD_ROOM, ({roomName} : CreateRoom) => {
    console.log('add new room');
    rooms.push({
      name: roomName,
      host: users.filter(user => user.socketId === socket.client.id)[0]
    });
    console.log(rooms);
    socket.emit(ADD_ROOM_SUCCEED);
  });

  socket.on(JOIN_ROOM, () => {})

  socket.on('disconnect', () => {
    console.log('user disconnected.')
    users = users.filter(user => user.socketId !== socket.client.id)
  });
});
http.listen(3000, () => {
  console.log('listening on *:3000')
});

export default app;