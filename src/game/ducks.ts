import actionCreatorFactory from 'typescript-fsa';
import { Action } from 'redux';

const actionCreator = actionCreatorFactory();
export const gameTick = actionCreator('GAME_TICK');
export const START_GAME = 'START_GAME';
export const COUNT_DOWN = 'COUNT_DOWN';
export const INITIAL_COUNT = 5;
enum GameStatus {
  NotStarting = 'NOT_STARTING',
  InitializeWaiting = 'INITIALIZE_WAITING',
  BeforeWaiting = 'BEFORE_WAITING',
  CountDown = 'COUNT_DOWN',
}

export interface State {
  status: GameStatus;
  countDownNumber: number;
}

const initialState = {
  status: GameStatus.NotStarting,
  countDownNumber: 0,
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        status: GameStatus.InitializeWaiting,
        countDownNumber: INITIAL_COUNT,
      };
    case COUNT_DOWN:
      return {
        ...state,
        countDownNumber: state.countDownNumber - 1,
      };
    default:
      return state;
  }
};

export default reducer;
