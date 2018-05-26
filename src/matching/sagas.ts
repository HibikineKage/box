import { matchUser } from './api';
import { put, call, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { MATCH_ROOM_FAILED, MATCH_ROOM_SUCCEED } from './ducks';

export function* waitMatching() {
  const { matching, timeout } = yield race({
    matching: call(matchUser),
    timeout: call(delay, 10000),
  });
  if (timeout) {
    console.log('timeout');
    yield put({ type: MATCH_ROOM_FAILED });
  }
  if (matching) {
    yield put({ type: MATCH_ROOM_SUCCEED, payload: matching });
  }
}
