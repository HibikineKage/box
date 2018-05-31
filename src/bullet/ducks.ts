import { Action } from 'redux';
import { Player } from '../player/ducks';

export interface Bullet {
  player: Player;
}
export interface State {
  bullets: Bullet[];
}
const initialState = { bullets: [] };
export const reducer = (state: State = initialState, action: Action) => state;
export default reducer;
