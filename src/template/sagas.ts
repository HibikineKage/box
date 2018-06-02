import { delay } from 'redux-saga';

export function* mySaga() {
  yield delay(1000);
}

export default mySaga;
