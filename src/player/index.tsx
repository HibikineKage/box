import * as React from 'react';
import { Sprite } from 'react-pixi-fiber';
interface Props {
  x: number;
  y: number;
  isRightFacing: boolean;
}
export const Player = (props: Props) => <Sprite />;
export default Player;
