import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { INITIAL_COUNT } from './ducks';

export *function countDown() {
  for (let i = INITIAL_COUNT; i > 0; i -= 1) {
    yield delay(1000);
    yield put({ type: COUNT_DOWN });
  }
}
