import { delay } from 'redux-saga';
import { put, call, race, fork } from 'redux-saga/effects';
import { fetchRoomList } from '../rooms/sagas';
import { matchUser, matchUserTimeout } from './api';
import {
  MATCH_ROOM_FAILED,
  MATCH_ROOM_SUCCEED,
  MATCH_ROOM_TIMEOUT,
} from './ducks';

export function* waitMatching() {
  const { matching, timeout } = yield race({
    matching: call(matchUser),
    timeout: call(delay, 1000),
  });
  if (timeout) {
    yield call(matchUserTimeout);
    yield put({ type: MATCH_ROOM_TIMEOUT });
    yield fork(fetchRoomList);
  }
  if (matching) {
    yield put({ type: MATCH_ROOM_SUCCEED, payload: matching });
  }
}
export default waitMatching;
