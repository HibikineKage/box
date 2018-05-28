import * as React from 'react';
import { Stage } from 'react-pixi-fiber';

export const Game = () => (
  <Stage
    width={800}
    height={800}
    options={{
      backgroundColor: 0xffffff,
    }}
  />
);
export default Game;
