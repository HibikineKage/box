import reducer from './ducks';
import {
  MATCH_ROOM_FAILED,
  JOIN_ROOM,
  JOIN_ROOM_FAILED,
  MATCH_ROOM_SUCCEED,
  JOIN_ROOM_SUCCEED,
} from '../matching/ducks';
import { ADD_ROOM_SUCCEED } from '../rooms/ducks';
import { Scene } from './ducks';
describe('router reducer should', () => {
  test('go to scene matching when ');
  const state = reducer(undefined, { type: null });
  const matchingState = reducer(state, { type: ADD_ROOM_SUCCEED });
  expect(matchingState).toEqual({ currentScene: Scene.Matching });
  const matchingFailedState = reducer(matchingState, {
    type: MATCH_ROOM_FAILED,
  });
  expect(matchingFailedState).toEqual({ currentScene: Scene.Rooms });
  const matchingSucceedState = reducer(matchingState, {
    type: MATCH_ROOM_SUCCEED,
  });
  expect(matchingSucceedState).toEqual({ currentScene: Scene.Game });
  const joiningState = reducer(state, { type: JOIN_ROOM });
  expect(joiningState).toEqual({ currentScene: Scene.Matching });
  const joiningFailedState = reducer(joiningState, { type: JOIN_ROOM_FAILED });
  expect(joiningFailedState).toEqual({ currentScene: Scene.Rooms });
  const joiningSucceedState = reducer(joiningState, {
    type: JOIN_ROOM_SUCCEED,
  });
  expect(joiningSucceedState).toEqual({ currentScene: Scene.Game });
});
