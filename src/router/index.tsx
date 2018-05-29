import { Container, Text } from 'react-pixi-fiber';
import * as React from 'react';
import { connect } from 'react-redux';
import { Scene } from './ducks';
import { State } from '../ducks';
import Rooms from '../rooms/index';
import Game from '../game/index';
import Matching from '../matching/index';

interface Props {
  currentScene: Scene;
}
export const Router = (props: Props) => (
  <Container>
    {props.currentScene === Scene.Rooms && <Rooms />}
    {props.currentScene === Scene.Matching && <Matching />}
    {props.currentScene === Scene.Game && <Game />}
  </Container>
);

export default connect((state: State) => ({
  currentScene: state.router.currentScene,
}))(Router);
