import {takeLatest, takeEvery} from 'redux-saga/effects';
import {fetchServerInfo} from './app/api';
import {REQUEST_SERVER_INFO} from './app/ducks';
const mySaga = function * () {
  yield takeLatest(REQUEST_SERVER_INFO, fetchServerInfo);
};
export default mySaga;
