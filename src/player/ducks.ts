import { Action } from 'redux';
import actionCreatorFactory, { isType } from 'typescript-fsa';
import { gameTick } from '../game/ducks';
import { Bullet } from '../bullet/ducks';

const actionCreator = actionCreatorFactory();
export const jump = actionCreator<{ playerId: string; jumpPower: number }>(
  'PLAYER_ACTION_JUMP',
);
export const JUMP_CONSTANT = 1.0;
export interface IPlayer {
  wallY: number;
  y: number
  vy: number;
  boxCount: number;
  isJumping: boolean;
  bullets: Bullet[];
}
export class Player implements IPlayer {
  wallY = 0;
  y = 300;
  vy = 0;
  boxCount = 3;
  isJumping = false;
  bullets = [];
}

export interface State {
  players: IPlayer[];
}
