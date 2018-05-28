import * as React from 'react';
import { withState } from 'recompose';

interface Props {
  addRoom: (name: string) => any;
  setRoomName: (name: string) => any;
  roomName: string;
}
const AddRoom = (props: Props) => (
  <div>
    <button onClick={() => props.addRoom(props.roomName)}>
      部屋を追加する
    </button>
    <input
      onChange={({ target: { value } }) => props.setRoomName(value)}
      value={props.roomName}
      type="text"
    />
  </div>
);
export default withState('roomName', 'setRoomName', '')(AddRoom);
