import { Action } from 'redux';
import { Bullet } from './ducks';
import { State } from '../ducks';

const isAlive = (bullet: Bullet) => true;
const selectBullet = (state: State) => state.game.bullets;
export function* bulletSaga(action: Action<Bullet>) {
  const bulletId = action.payload.id;
  while (true) {
    const bulletState = yield select(selectBullet);
  }
}
