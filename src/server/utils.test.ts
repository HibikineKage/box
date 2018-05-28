import { nextRoomId } from './utils';

describe('next room id returns', () => {
  test('different value by each callings', () => {
    const a = nextRoomId();
    const b = nextRoomId();
    expect(a).not.toBe(b);
  });
});
