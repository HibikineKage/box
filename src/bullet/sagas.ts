import { select } from 'redux-saga/effects';
import { Action } from 'redux';
import { IBullet, BULLET_R } from './ducks';
import { State } from '../ducks';

interface BulletAction extends Action {
  payload: IBullet;
}
export const isAlive = (bullet: IBullet) =>
  0 - BULLET_R < bullet.x &&
  bullet.x < 1000 + BULLET_R &&
  0 - BULLET_R < bullet.y &&
  bullet.y < 1000 + BULLET_R;
