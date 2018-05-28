import * as React from 'react';
import { Sprite } from 'react-pixi-fiber';
export interface Props {
  x: number;
  y: number;
}
export const Box = (props: Props) => <Sprite />;
export default Box;
