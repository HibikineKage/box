import { Action } from 'redux';
import { IPlayer } from '../player/ducks';

export interface Bullet {
  x: number;
  y: number;
  vx: number;
  vy: number;
}
