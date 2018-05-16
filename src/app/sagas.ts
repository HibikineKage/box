import {call} from "redux-saga/effects";

export const FETCH_SERVER_INFO = 'FETCH_SERVER_INFO';

export interface ServerInfo {}

function * FETCH_SERVER_INFO(action) {
  try {
    const serverInfo : ServerInfo = yield call(Api.fetchServerInfo)
  }
}