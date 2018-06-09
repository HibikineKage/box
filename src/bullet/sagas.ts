import { select } from 'redux-saga/effects';
import { Action } from 'redux';
import { Bullet } from './ducks';
import { State } from '../ducks';

interface BulletAction extends Action {
  payload: Bullet;
}
const isAlive = (bullet: Bullet) => true;
const selectBullet = (state: State) => state.game.bullets;
export function* bulletSaga(action: BulletAction) {
  const bulletId = action.payload.id;
  while (true) {
    const bulletState = yield select(selectBullet);
  }
}
