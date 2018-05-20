import reducer from './ducks'
import {ADD_ROOM_SUCCEED} from '../rooms/ducks';
import {MatchingStatus, JOIN_ROOM} from './ducks';
test('matching reducer', () => {
  const initialState = reducer();
  const matchingState = reducer(initialState, ADD_ROOM_SUCCEED);
  expect(matchingState).toEqual({status: MatchingStatus.Waiting});
  const waitingState = reducer(initialState, JOIN_ROOM);
  expect(waitingState).toEqual({status: MatchingStatus.Joining});
})