import reducer from './ducks';
import {MATCH_ROOM_FAILED, JOIN_ROOM, JOIN_ROOM_FAILED, MATCH_ROOM_SUCCEED, JOIN_ROOM_SUCCEED} from '../matching/ducks';
import {ADD_ROOM_SUCCEED} from '../rooms/ducks';
import {Scene, BACK_TO_LOBBY} from './ducks';
describe('router reducer should', () => {
  const state = reducer(undefined, {type: null});
  const matchingState = reducer(state, {type: ADD_ROOM_SUCCEED});
  test('go to scene matching when the user adds room', () => {
    expect(matchingState).toEqual({currentScene: Scene.Matching});
  });
  test('go to lobby when matching failed', () => {
    const matchingFailedState = reducer(matchingState, {type: MATCH_ROOM_FAILED});
    expect(matchingFailedState).toEqual({currentScene: Scene.Rooms});
  })
  test('go to game scene when matching succeed', () => {
    const matchingSucceedState = reducer(matchingState, {type: MATCH_ROOM_SUCCEED});
    expect(matchingSucceedState).toEqual({currentScene: Scene.Game});
  })
  const joiningState = reducer(state, {type: JOIN_ROOM});
  test('go to joining scene when the user click the joining button', () => {
    expect(joiningState).toEqual({currentScene: Scene.Matching});
  })
  test('go to the lobby when the user failed to join the room', () => {
    const joiningFailedState = reducer(joiningState, {type: JOIN_ROOM_FAILED});
    expect(joiningFailedState).toEqual({currentScene: Scene.Rooms});
  })
  test('go to the game scene when the user succeed to join the game', () => {
    const joiningSucceedState = reducer(joiningState, {type: JOIN_ROOM_SUCCEED});
    expect(joiningSucceedState).toEqual({currentScene: Scene.Game});
  })
  test('go to lobby when press back to lobby button', () => {
    const backedToLobbyState = reducer(matchingState, {type: BACK_TO_LOBBY});
    expect(backedToLobbyState).toEqual({currentScene: Scene.Rooms});
  })
});
