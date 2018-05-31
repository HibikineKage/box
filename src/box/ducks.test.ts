import { reducer, ADD_BOX } from './ducks';
import { Player } from '../player/ducks';

describe('box reducer', () => {
  const initialState = reducer(undefined, { type: null });
  const player: Player = { x: 10, y: 100, isFalling: false, isFacingRight: false, name: 'Hibikine' };
  test('added new box', () => {
    const boxAddedState = reducer(initialState, { type: ADD_BOX, payload: { x: 10, y: 10, player } });
    expect(boxAddedState).toEqual({
      boxes: [{ x: 10, y: 10, isAlive: true, isFalling: false, player }],
    });
  });
});
