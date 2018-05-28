import * as io from 'socket.io-client';

const socket = io('http://localhost:3030');
socket.on('connect', () => {
  console.log('connected');
});
export default socket;
