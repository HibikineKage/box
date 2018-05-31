import { combineReducers } from 'redux';
import app, { State as AppState } from './app/ducks';
import bullet, { State as BulletState } from './bullet/ducks';
import router, { State as RouterState } from './router/ducks';
import rooms, { State as RoomsState } from './rooms/ducks';
import matching, { State as MatchingState } from './matching/ducks';
import players, { State as PlayerState } from './player/ducks';
import walls, { State as WallsState } from './walls/ducks';

export interface State {
  app: AppState;
  box: BoxState;
  bullet: BulletState;
  router: RouterState;
  rooms: RoomsState;
  matching: MatchingState;
  players: PlayerState;
  walls: WallsState;
}

export default combineReducers({ app, box, bullet, router, rooms, matching, walls });
