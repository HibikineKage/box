import * as Api from './api'
import {call, put} from "redux-saga/effects";
import {Action} from 'redux';
import {SERVER_INFO_FETCH_FAILED} from './ducks';

export interface ServerInfo {}

function * fetchServerInfo(action : Action) {
  try {
    const serverInfo : ServerInfo = yield call(Api.fetchServerInfo);
  } catch (e) {
    yield put({type: SERVER_INFO_FETCH_FAILED, message: e.message});
  }
}