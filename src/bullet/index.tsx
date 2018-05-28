import * as React from 'react';
import { Sprite } from 'react-pixi-fiber';
export interface Props {
  x: number;
  y: number;
}
const Bullet = (props: Props) => <Sprite />;
export default Bullet;
