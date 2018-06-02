import { Action } from 'redux';
import { IPlayer } from '../player/ducks';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
export const HIT_WALL = 'HIT_WALL';
export const hitWall = actionCreator<{ wallId: number }>(HIT_WALL)

export interface Wall {
  x: number;
  y: number;
  player: IPlayer;
}
