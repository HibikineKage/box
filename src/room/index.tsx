import * as React from 'react';
import {Container, Text} from 'react-pixi-fiber';
import {ClientRoom} from '../server/app';
export const Room = (props : ClientRoom) => <Container>
    <Text>{props.name}</Text>
</Container>