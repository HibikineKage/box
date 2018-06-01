import { Player } from '../player/ducks';
import { Box } from '../box/ducks';
import { Wall } from '../walls/ducks';
import { Bullet } from '../bullet/ducks';
import { Action } from 'redux';
import { actionCreatorFactory, isType } from 'typescript-fsa';
import { matchRoomSucceed, joinRoomSucceed } from '../matching/ducks';
import { ClientRoom } from '../server/app';
import Player from '../player/index';
const actionCreator = actionCreatorFactory();
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
  players: Player[];
  boxes: Box[];
  walls: Wall[];
  bullets: Bullet[];
}

const initialState = {
  status: GameStatus.NotStarting,
  countDownNumber: 0,
  players: [],
  boxes: [],
  walls: [],
  bullets: [],
}

const initPlayer = (room: ClientRoom): Player[] => {
  return [{ x: 50, y: 50, name: room.hostName }, { x: 50, y: 50, name: room.hostName }]
}
export const reducer = (state: State = initialState, action: Action) => {
  if (isType(action, matchRoomSucceed) || isType(action, joinRoomSucceed)) {
    return {
      ...state,
      players: initPlayer(matchRoomSucceed),
    }
  }
  if (isType(action, startGame)) {
    return {
      ...state,
      status: GameStatus.InitializeWaiting,
      countDownNumber: INITIAL_COUNT,
    }
  }
  if (isType(countDown, action.type)) {
    return {
      ...state,
      countDownNumber: state.countDownNumber - 1,
    };
  }
}

export default reducer;
