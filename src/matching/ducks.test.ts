import reducer, { MATCH_ROOM_FAILED, JOIN_ROOM_FAILED } from './ducks';
import { ADD_ROOM_SUCCEED } from '../rooms/ducks';
import { MatchingStatus, JOIN_ROOM } from './ducks';
describe('matching reducer should return ', () => {
  const initialState = reducer(undefined, { type: null });
  test('default on initilalized', () => {
    expect(initialState).toEqual({ status: MatchingStatus.Default });
  });
  const matchingState = reducer(initialState, { type: ADD_ROOM_SUCCEED });
  test('Waiting when the player added new room', () => {
    expect(matchingState).toEqual({ status: MatchingStatus.Waiting });
  });
  const waitingState = reducer(initialState, { type: JOIN_ROOM });
  test('Joining when the player clicked matching button', () => {
    expect(waitingState).toEqual({ status: MatchingStatus.Joining });
  });
  test('Default when matching failed.', () => {
    const matchingFailedState = reducer(matchingState, {
      type: MATCH_ROOM_FAILED,
    });
    expect(matchingFailedState).toEqual({ status: MatchingStatus.Default });
  });
  test('Default when joining failed.', () => {
    const joiningFailedState = reducer(waitingState, {
      type: JOIN_ROOM_FAILED,
    });
    expect(joiningFailedState).toEqual({ status: MatchingStatus.Default });
  });
});
