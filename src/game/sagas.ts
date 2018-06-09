import { delay } from 'redux-saga';

import { put, select, fork } from 'redux-saga/effects';
import {
  INITIAL_COUNT,
  COUNT_DOWN,
  State as GameState,
  gameTick,
  countDown,
} from './ducks';
import { State } from '../ducks';
import { IPlayer } from '../player/ducks';

const TPS = 20;
const gameSelector = (state: State) => state.game;
const isGameFinished = (players: IPlayer[]): boolean =>
  players.some(p => p.boxCount == 0);
export function* ticker(initialTick: number) {
  let tickCount = 0;
  while (isGameFinished((yield select(gameSelector)).players)) {
    yield put(gameTick());
    yield delay(
      initialTick + (tickCount * tickCount) / TPS - performance.now(),
    );
    tickCount += 1;
  }
}
export function* countDownWorker(initialTick: number) {
  for (let i = INITIAL_COUNT; i > 0; i -= 1) {
    yield delay(1000);
    yield put(countDown());
  }
  yield fork(ticker, initialTick);
}

export default countDownWorker;
