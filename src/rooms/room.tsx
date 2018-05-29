import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ClientRoom } from '../server/app';
import { JOIN_ROOM } from '../matching/ducks';

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
const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) =>
  bindActionCreators(
    {
      joinRoom: () => ({ type: JOIN_ROOM, payload: ownProps }),
    },
    dispatch,
  );
export default connect(null, mapDispatchToProps)(Room);
