import { fetchRoomList } from "./sagas";
import { testRooms } from './__mocks__/api';

test('fetchroomlist', () => {
  const fetching = fetchRoomList({ type: null });
  const fetched = fetching.next();
  expect(fetched.value).toEqual(testRooms);
  const setRoomListAction = fetching.next();
  expect(setRoomListAction.done).toBe(true);
});