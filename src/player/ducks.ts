import { Action } from 'redux';

export interface Player {
  x: number;
  y: number;
  name: string;
  isJumping: boolean;
  isFacingRight: boolean;
}
export interface State {
  players: Player[];
}

const initialState: State = {
  players: [],
};
export const reducer = (state: State = initialState, action: Action) => state;
