import { combineReducers } from 'redux';
import app, { State as AppState } from './app/ducks';
import router, { State as RouterState } from './router/ducks';
import rooms, { State as RoomsState } from './rooms/ducks';
import matching, { State as MatchingState } from './matching/ducks';
import game, { State as GameState } from './game/ducks';

export interface State {
  app: AppState;
  game: GameState;
  router: RouterState;
  rooms: RoomsState;
  matching: MatchingState;
}

export default combineReducers({ app, router, rooms, matching });
