import {fetchRoomList, addRoom} from './rooms/sagas';
import {takeLatest, takeEvery, all} from 'redux-saga/effects';
import {REQUEST_SERVER_INFO} from './app/ducks';
import {REQUEST_ROOM_LIST, ADD_ROOM} from './rooms/ducks';
const rootSaga = function * () {
  yield all([
    takeLatest(REQUEST_ROOM_LIST, fetchRoomList),
    takeEvery(ADD_ROOM, addRoom)
  ]);
};
export default rootSaga;
