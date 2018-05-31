import { Action } from 'redux';
import { Player } from '../player/ducks';

export const HIT_WALL = 'HIT_WALL';

export interface Wall {
  x: number;
  y: number;
  player: Player;
}

export interface State {
  walls: Wall[];
}

const initialState: State = { walls: [] };
export const reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
  case HIT_WALL:
    return {
      ...state,
      walls: state.walls.filter(wall => wall !== action.payload),
    };
  default:
    return state;
  }
};

export default reducer;
