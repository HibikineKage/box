import {matchUser, matchUserTimeout} from './api';
import {put, call, race, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {MATCH_ROOM_FAILED, MATCH_ROOM_SUCCEED, MATCH_ROOM_TIMEOUT} from './ducks';
import {fetchRoomList} from '../rooms/sagas';

export function * waitMatching() {
  const {matching, timeout} = yield race({
    matching: call(matchUser),
    timeout: call(delay, 1000)
  });
  if (timeout) {
    console.log('timeout');
    matchUserTimeout();
    yield put({type: MATCH_ROOM_TIMEOUT});
    yield fork(fetchRoomList);
  }
  if (matching) {
    yield put({type: MATCH_ROOM_SUCCEED, payload: matching});
  }
}
