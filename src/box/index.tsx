import * as React from 'react';
import { connect } from 'react-redux';
import { Sprite, Container } from 'react-pixi-fiber';
import { State } from '../ducks';
import * as box from './box.png';

interface BoxProps {
  x: number;
  y: number;
}
export interface Props {
  boxes: BoxProps[];
}
const boxTexture = PIXI.Texture.fromImage(box);
export const Boxes = (props: Props) => (
  <Container>
    <Sprite texture={boxTexture} />
  </Container>
);
export default connect((state: State) => ({
  boxes: state.game.boxes.map(b => ({ x: b.x, y: b.y })),
}))(Boxes);
