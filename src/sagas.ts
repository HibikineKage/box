import {takeEvery} from 'redux-saga/effects';
import {FETCH_SERVER_INFO} from './app/sagas';
const mySaga = function * () {
  yield takeLatest(FETCH_SERVER_INFO,);
};
export default mySaga;
