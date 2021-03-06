import { actionCreatorFactory } from 'typescript-fsa';
import { Action } from 'redux';
import { IPlayer } from '../player/ducks';

export const BOX_HEIGHT = 100;
export const INITIAL_BOX_COUNT = 3;
const actionCreator = actionCreatorFactory();
export const ADD_BOX = 'ADD_BOX';
export const addBox = actionCreator<{ x: number; y: number; playerId: string }>(
  ADD_BOX,
);
export interface AddBoxPayload {
  x: number;
  y: number;
  player: IPlayer;
}
export interface AddBoxAction extends Action {
  payload: AddBoxPayload;
}
const initBox = (addBoxPayload: AddBoxPayload): Box => ({
  ...addBoxPayload,
  isFalling: false,
  isAlive: true,
});
export const REMOVE_BOX = 'REMOVE_BOX';
export interface Box {
  player: IPlayer;
  isFalling: boolean;
  isAlive: boolean;
  x: number;
  y: number;
}
