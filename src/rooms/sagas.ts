import * as Api from './api';
import {call, put, fork} from 'redux-saga/effects';
import {Action} from 'redux';
import {
  ROOM_LIST_FETCH_FAILED,
  AddRoomPayload,
  ADD_ROOM_FAILED,
  ROOM_LIST_FETCH_SUCCEED,
  RECEIVE_ROOM_LIST,
  REQUEST_ROOM_LIST,
  ADD_ROOM_SUCCEED
} from './ducks';
import {ClientRoom} from '../server/app';
import {waitMatching} from '../matching/sagas';

export function * fetchRoomList() {
  try {
    console.log('fetch');
    const serverInfo : ClientRoom[] = yield call(Api.fetchRoomList);
    yield put({type: ROOM_LIST_FETCH_SUCCEED, payload: serverInfo});
  } catch (e) {
    yield put({type: ROOM_LIST_FETCH_FAILED, message: e.message});
  }
}

export function * addRoom(action : Action & {
  payload: AddRoomPayload;
},) {
  try {
    yield call(Api.addRoom, action.payload.roomName);
    yield fork(fetchRoomList, {type: REQUEST_ROOM_LIST});
    yield put({type: ADD_ROOM_SUCCEED});
    yield fork(waitMatching);
  } catch (e) {
    yield put({type: ADD_ROOM_FAILED, message: e.message});
  }
}
