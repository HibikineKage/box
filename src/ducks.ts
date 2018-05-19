import {combineReducers} from 'redux';
import app, {State as AppState} from './app/ducks';
import router, {State as RouterState} from './router/ducks'
import rooms, {State as RoomsState} from './rooms/ducks'

export interface State {
  app : AppState;
  router : RouterState;
  rooms : RoomsState;
}

export default combineReducers({app, router, rooms});
