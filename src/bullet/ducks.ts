import { Action } from 'redux';
import { Player } from '../player/ducks';

interface Bullet {
  player: Player;
}
interface State {
  bullets: Bullet[];
}
const initialState = { bullets: [] };
export const reducer = (state: State = initialState, action: Action) => state;
export default reducer;
