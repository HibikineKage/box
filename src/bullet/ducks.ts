import { Action } from 'redux';
import { IPlayer } from '../player/ducks';
import { setIfDef } from '../utils';

export const BULLET_GRAVITY = 0.98;
export const BULLET_MAX_COUNT = 1;
export const updateBullet = (b: IBullet): IBullet => ({ x: b.x + b.vx, y: b.y + b.vy, vx: b.vx, vy: b.vy + BULLET_GRAVITY });
export class Bullet implements IBullet {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
  constructor(x?: number, y?: number, vx?: number, vy?: number) {
    setIfDef(this, 'x', x);
    setIfDef(this, 'y', y);
    setIfDef(this, 'vx', vx);
    setIfDef(this, 'vy', vy);
  }
}
export interface IBullet {
  x: number;
  y: number;
  vx: number;
  vy: number;
}
