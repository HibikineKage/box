import { fetchRoomList } from './sagas';
import * as Api from './api';
import { call } from 'redux-saga/effects';

test('fetchroomlist', () => {
  const fetching = fetchRoomList();
  const fetched = fetching.next();
  expect(fetched.value).toEqual(call(Api.fetchRoomList));
  const setRoomListAction = fetching.next();
  const allDone = fetching.next();
  expect(allDone.done).toBe(true);
});
