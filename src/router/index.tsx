import {Container, Text} from 'react-pixi-fiber';
import * as React from 'react';
import {Scene} from './ducks';
import {State} from '../ducks';
import {connect} from 'react-redux'
import Rooms from '../rooms/index';

interface Props {
    currentScene : Scene;
}
export const Router = (props : Props) => <Container>
    {props.currentScene === Scene.Rooms && <Rooms/>}
</Container>;

export default connect((state : State) => ({currentScene: state.router.currentScene}))(Router);