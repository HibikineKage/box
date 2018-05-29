import { User } from './users';
export interface Room {
  name: string;
  host: User;
  isPrivate: boolean;
  status: RoomStatus;
  players: User[];
  watchers: User[];
  roomId: number;
}

export enum RoomStatus {
  Waiting = 'Waiting',
  Matching = 'Matching',
  Playing = 'Playing',
}

export default class Rooms extends Array<Room> {

}