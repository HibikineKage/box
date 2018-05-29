import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Rooms, Props } from './index';
import { RoomStatus } from '../server/rooms';

test('rendering', () => {
  const props: Props = {
    fetchRoomList: () => {},
    rooms: [
      {
        name: 'Test Room 1',
        hostName: 'Hibikine',
        isPrivate: true,
        status: RoomStatus.Matching,
        roomId: 2,
      },
      {
        name: 'Test Room 2',
        hostName: 'Kage',
        isPrivate: false,
        status: RoomStatus.Waiting,
        roomId: 1,
      },
      {
        name: 'Test Room',
        hostName: 'Hibikine Kage',
        isPrivate: false,
        status: RoomStatus.Playing,
        roomId: 3,
      },
    ],
    addRoom: () => {},
    startCpuBattle: () => {},
  };
  const tree = renderer.create(<Rooms {...props} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
