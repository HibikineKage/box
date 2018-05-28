import { ClientRoom, RoomStatus } from '../../server/app';

export const testRooms: ClientRoom[] = [
  {
    name: 'hoge',
    hostName: 'fuga',
    isPrivate: false,
    status: RoomStatus.Matching,
    roomId: 0,
  },
];
export const fetchRoomList = async (): Promise<ClientRoom[]> =>
  Promise.resolve(testRooms);
