import { Container } from 'react-pixi-fiber';
import { connect, Dispatch } from 'react-redux';
import * as React from 'react';
import { State } from '../ducks';
import { dummyFunction } from '../utils';
import socket from '../app/socket';
import { ClientRoom } from '../server/app';
import { REQUEST_ROOM_LIST, ADD_ROOM, START_CPU_BATTLE } from './ducks';
import AddRoom from './add-room';
import Cpu from './cpu';
import { Room } from './room';

interface Props {
  fetchRoomList: () => any;
  rooms: ClientRoom[];
  addRoom: (roomName: string) => any;
  startCpuBattle: () => any;
}

class Rooms extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    socket.on('connect', () => {
      this.props.fetchRoomList();
    });
  }
  render() {
    return (
      <div>
        <h1>Lobby</h1>
        <section>
          <h2>Room List</h2>
          {this.props.rooms.map(room => (
            <Room key={room.roomId} joinRoom={dummyFunction} {...room} />
          ))}
        </section>
        <AddRoom addRoom={this.props.addRoom} />
        <Cpu startCpuBattle={this.props.startCpuBattle} />
      </div>
    );
  }
}
export default connect(
  (state: State) => ({ rooms: state.rooms.rooms }),
  (dispatch: Dispatch) => ({
    fetchRoomList: () => dispatch({ type: REQUEST_ROOM_LIST }),
    addRoom: (roomName: string) =>
      dispatch({
        type: ADD_ROOM,
        payload: {
          roomName,
        },
      }),
    startCpuBattle: () => dispatch({ type: START_CPU_BATTLE }),
  }),
  (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
  }),
)(Rooms);
