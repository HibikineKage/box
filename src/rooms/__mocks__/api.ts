import { ClientRoom } from '../../server/app';
export const testRooms: ClientRoom[] = [{ name: 'hoge', hostName: 'fuga' }];
export const fetchRoomList = async (): Promise<ClientRoom[]> => {
  return Promise.resolve(testRooms);
}