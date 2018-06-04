import { Action } from 'redux';
import { IBullet } from './ducks';
import { State } from '../ducks';

const isAlive = (bullet: IBullet) => true;
const selectBullet = (state: State) => state.game.bullets;
export function* bulletSaga(action: Action<IBullet>) {
  const bulletId = action.payload.id;
  while (true) {
    const bulletState = yield select(selectBullet);
  }
}
