import { takeLatest, takeEvery, all } from 'redux-saga/effects';
import { fetchRoomList, addRoom } from './rooms/sagas';
import { REQUEST_SERVER_INFO } from './app/ducks';
import { REQUEST_ROOM_LIST, ADD_ROOM } from './rooms/ducks';

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_ROOM_LIST, fetchRoomList),
    takeEvery(ADD_ROOM, addRoom),
  ]);
}
