import { Action } from 'redux';
import actionCreatorFactory, { isType } from 'typescript-fsa';
import { gameTick } from '../game/ducks';

const actionCreator = actionCreatorFactory();
export const jump = actionCreator<{ playerId: string; jumpPower: number }>(
  'PLAYER_ACTION_JUMP',
);
export const JUMP_CONSTANT = 1.0;

export interface Player {
  x: number;
  y: number;
  vy: number;
  name: string;
  isJumping: boolean;
  isFacingRight: boolean;
  playerId: string;
}
export interface State {
  players: Player[];
}

const applyTargetUser = (
  players: Player[],
  playerId: string,
  callback: (player: Player) => Player,
) =>
  players.map(
    player => (player.playerId === playerId ? callback(player) : player),
  );

const initialState: State = {
  players: [],
};

export const reducer = (state: State = initialState, action: Action) => {
  if (isType(action, jump)) {
    return {
      ...state,
      players: applyTargetUser(
        state.players,
        action.payload.playerId,
        player => ({
          ...player,
          isJumping: true,
          vy: action.payload.jumpPower * JUMP_CONSTANT,
        }),
      ),
    };
  }
  if (isType(action, gameTick)) {
    return {
      ...state,
      players: state.players.map(applyGravity).map(applyMove);
    }
  }
};
