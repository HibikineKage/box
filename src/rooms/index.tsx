import { Container } from 'react-pixi-fiber';
import { ClientRoom } from '../server/app';
import { connect, Dispatch } from 'react-redux';
import { Room } from './room';
import * as React from 'react';
import { State } from '../ducks';
import { REQUEST_ROOM_LIST, ADD_ROOM } from './ducks';
import socket from '../app/socket';
import AddRoom from './add-room';
import { dummyFunction } from '../utils';

interface Props {
  fetchRoomList: () => any;
  rooms: ClientRoom[];
  addRoom: (roomName: string) => any;
}
class Rooms extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    console.log('fetchRoomList');
    socket.on('connect', () => {
      this.props.fetchRoomList();
    });
  }
  render() {
    return (
      <div>
        {this.props.rooms.map(room => (
          <Room key={room.roomId} joinRoom={dummyFunction} {...room} />
        ))}
        <AddRoom addRoom={this.props.addRoom} />
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
  }),
  (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
  }),
)(Rooms);
