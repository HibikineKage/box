import { Player } from '../player/ducks';
import { Action } from 'redux';
interface Bullet {
  player: Player;
}
interface State {
  bullets: Bullet[];
}
const initialState = { bullets: [] };
export const reducer = (state: State = initialState, action: Action) => {
  return state;
};
