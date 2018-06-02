import { Action } from 'redux';
import actionCreatorFactory, { isType } from 'typescript-fsa';
import { gameTick } from '../game/ducks';

const actionCreator = actionCreatorFactory();
export const jump = actionCreator<{ playerId: string; jumpPower: number }>(
  'PLAYER_ACTION_JUMP',
);
export const JUMP_CONSTANT = 1.0;

export interface IPlayer {
  x: number;
  y: number;
  vy: number;
  name: string;
  isJumping: boolean;
  isFacingRight: boolean;
  playerId: string;
}
export interface State {
  players: IPlayer[];
}

const applyTargetUser = (
  players: IPlayer[],
  playerId: string,
  callback: (player: IPlayer) => IPlayer,
) =>
  players.map(
    player => (player.playerId === playerId ? callback(player) : player),
  );
