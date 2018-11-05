import { Action } from 'redux';
import actionCreatorFactory, { isType } from 'typescript-fsa';
import { gameTick } from '../game/ducks';
import { IBullet, updateBullet } from '../bullet/ducks';
import { BOX_HEIGHT, INITIAL_BOX_COUNT } from '../box/ducks';

const actionCreator = actionCreatorFactory();
export const jump = actionCreator<{ playerId: string; jumpPower: number }>(
  'PLAYER_ACTION_JUMP',
);
export const JUMP_CONSTANT = 1.0;
export interface IPlayer {
  wallY: number;
  y: number;
  vy: number;
  boxCount: number;
  bullets: IBullet[];
}
export class Player implements IPlayer {
  wallY = 0;
  y = BOX_HEIGHT * INITIAL_BOX_COUNT;
  vy = 0;
  boxCount = INITIAL_BOX_COUNT;
  bullets = [];
}
export const PLAYER_GRAVITY = 0.98;

export interface State {
  players: IPlayer[];
}

export const isJumping = (player: IPlayer): boolean =>
  player.y > player.boxCount * BOX_HEIGHT;

export const updatePlayer = (player: IPlayer): IPlayer => {
  const newPlayer = { ...player, bullets: player.bullets.map(updateBullet) };
  if (isJumping(player)) {
    newPlayer.vy += PLAYER_GRAVITY;
  } else {
    newPlayer.vy = 0;
    newPlayer.y = player.boxCount * BOX_HEIGHT;
  }
  return newPlayer;
};
