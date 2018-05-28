import { Action } from 'redux';
import { Player } from '../player/ducks';
interface Box {
  player: Player;
}
interface State {
  boxes: Box[];
}
const initialState: State = { boxes: [] };
export const reducer = (state: State = initialState, action: Action) => {
  return state;
};
