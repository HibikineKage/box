import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Text } from 'react-pixi-fiber';
import { ClientRoom } from '../server/app';
import { JOIN_ROOM } from '../matching/ducks';
import { Dispatch } from 'redux';
interface InnerProps extends ClientRoom {
  joinRoom: () => any;
}
interface DispatchProps {
  joinRoom: () => any;
}
export interface Props extends ClientRoom {}
export const Room = (props: InnerProps) => (
  <p>
    <button onClick={props.joinRoom}>{props.name}</button>
  </p>
);
export default connect<Props, DispatchProps, Props, Props>(
  null,
  (dispatch: Dispatch, ownProps: Props) => ({
    joinRoom: () => dispatch({ type: JOIN_ROOM, payload: ownProps }),
  }),
)(Room);
