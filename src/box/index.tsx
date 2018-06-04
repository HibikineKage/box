import * as React from 'react';
import { connect } from 'react-redux';
import { Sprite, Container } from 'react-pixi-fiber';
import { State } from '../ducks';
import * as box from './box.png';
import { BOX_HEIGHT } from './ducks';

export const PLAYER_SPACE_FROM_WALL = 100;

export interface Props {
  boxes: number[];
}
const boxTexture = PIXI.Texture.fromImage(box);
export const Boxes = (props: Props) => (
  <Container>
    {props.boxes.map((boxCount, i) => new Array(boxCount).fill(0).map((_, j) => <Sprite texture={boxTexture} x={100 + i * 800} y={1000 - BOX_HEIGHT * (j + 1)} />))}
  </Container>
);
export default connect(
  (state: State) => ({ boxes: state.game.players.map(player => player.boxCount) }),
  null,
  (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
  }),
)(Boxes);
