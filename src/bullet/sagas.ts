import { Action } from 'redux';
import { Bullet } from './ducks';
import { State } from '../ducks';

const isAlive = (bullet: Bullet) => {
  return true;
}
const selectBullet = (state: State) => state.bullet.
export *function bulletSaga(action: Action<Bullet>) {
  const bulletId = action.payload.id;
  while (true) {
    const bulletState = yield select(selectBullet)
    if (isAlive(bulletState))
  }
}