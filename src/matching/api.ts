import socket from '../app/socket';
import { MATCH_ROOM, MatchingUser } from './ducks';
export const matchUser = (): Promise<MatchingUser> => new Promise(resolve =>
  socket.on(MATCH_ROOM, (matchedUser: MatchingUser) =>
    resolve(matchedUser)
  )
);