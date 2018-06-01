import { Action } from 'redux';
import { Player } from '../player/ducks';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
export const HIT_WALL = 'HIT_WALL';
export const hitWall = actionCreator<{ wallId: number }>(HIT_WALL)

export interface Wall {
  x: number;
  y: number;
  player: Player;
}
