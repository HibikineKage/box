import { Action } from 'redux';
import { IPlayer } from '../player/ducks';

export interface Bullet {
  playerId: string;
  id: number;
}
export default Bullet;
