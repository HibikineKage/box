import { delay } from 'redux-saga';
import { put, call, race, fork } from 'redux-saga/effects';
import { fetchRoomList } from '../rooms/sagas';
import * as Api from './api';
import { JoinRoomAction } from './ducks';
import {
  MATCH_ROOM_FAILED,
  MATCH_ROOM_SUCCEED,
  MATCH_ROOM_TIMEOUT,
  JOIN_ROOM_SUCCEED,
  JOIN_ROOM_FAILED,
  JOIN_ROOM_TIMEOUT,
} from './ducks';

export function* joinRoom(action: JoinRoomAction) {
  try {
    const { joining, timeout } = yield race({
      joining: call(Api.joinRoom, action.payload),
      timeout: delay(60000),
    });
    if (timeout) {
      yield put({ type: JOIN_ROOM_TIMEOUT });
      return;
    }
    if (joining.type && joining.type === JOIN_ROOM_FAILED) {
      yield put(joining);
      return;
    }
    // TODO:
  } catch {
    yield put({ type: JOIN_ROOM_FAILED });
  }
}

export function* waitMatching() {
  const { matching, timeout } = yield race({
    matching: call(Api.matchUser),
    timeout: call(delay, 1000),
  });
  if (timeout) {
    yield call(Api.matchUserTimeout);
    yield put({ type: MATCH_ROOM_TIMEOUT });
    yield fork(fetchRoomList);
    return;
  }
  if (matching) {
    yield put({ type: MATCH_ROOM_SUCCEED, payload: matching });
  }
}
export default waitMatching;
