import { Action } from 'redux';
import { actionCreatorFactory, isType } from 'typescript-fsa';
import { IPlayer, Player, updatePlayer } from '../player/ducks';
import { Box } from '../box/ducks';
import { Wall } from '../walls/ducks';
import { IBullet } from '../bullet/ducks';
import { matchRoomSucceed, joinRoomSucceed } from '../matching/ducks';
import { ClientRoom } from '../server/app';

const actionCreator = actionCreatorFactory();
export const gameTick = actionCreator('GAME_TICK');
export const START_GAME = 'START_GAME';
export const startGame = actionCreator(START_GAME);
export const COUNT_DOWN = 'COUNT_DOWN';
export const countDown = actionCreator(COUNT_DOWN);
export const INITIAL_COUNT = 5;

export enum GameStatus {
  NotStarting = 'NOT_STARTING',
  InitializeWaiting = 'INITIALIZE_WAITING',
  BeforeWaiting = 'BEFORE_WAITING',
  CountDown = 'COUNT_DOWN',
}

export interface State {
  status: GameStatus;
  countDownNumber: number;
  players: IPlayer[];
}

const initialState = {
  status: GameStatus.NotStarting,
  countDownNumber: 0,
  players: [],
};

const initPlayer = (room: ClientRoom): IPlayer[] => [
  new Player(),
  new Player(),
];

export const reducer = (state: State = initialState, action: Action) => {
  if (isType(action, matchRoomSucceed) || isType(action, joinRoomSucceed)) {
    return {
      ...state,
      players: initPlayer(action.payload),
    };
  }
  if (isType(action, startGame)) {
    return {
      ...state,
      status: GameStatus.InitializeWaiting,
      countDownNumber: INITIAL_COUNT,
    };
  }
  if (isType(countDown, action.type)) {
    return {
      ...state,
      countDownNumber: state.countDownNumber - 1,
    };
  }
  if (isType(action, gameTick)) {
    return {
      ...state,
      players: state.players.map(updatePlayer),
    }
  }
};

export default reducer;
