import * as express from 'express';
import * as dotenv from 'dotenv';
import * as socketIO from 'socket.io';
import sha256 = require('crypto-js');
dotenv.config({path: '.env'});
const app = express();
const io = socketIO(require('http').Server(app));

interface Room {
  passwordHash : string
}
const rooms : Room[] = [];

interface User {}
const waintingUsers : User[] = [];

app.set('port', process.env.PORT || 3000);
io.on('connection', (socket : socketIO.Socket) => {
  console.log('connected');
})

export default app;