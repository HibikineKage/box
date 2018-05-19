import {Container} from 'react-pixi-fiber';
import {ClientRoom} from '../server/app';
import {connect} from 'react-redux';
import {Room} from '../room';
import * as React from 'react';
import {State} from '../ducks';
interface Props {
    rooms : ClientRoom[];
}
const Rooms = (props : Props) => <Container>
    {props
        .rooms
        .map(room => <Room {...room}/>)}</Container>
export default connect((state : State) => ({rooms: state.rooms.rooms}))(Rooms);