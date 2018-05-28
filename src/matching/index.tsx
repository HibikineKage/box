import * as React from 'react';
import { MatchingStatus } from './ducks';
import { State } from '../ducks';
import { connect, Dispatch } from 'react-redux';
import { BACK_TO_LOBBY } from '../router/ducks';

export interface Props {
  matchingStatus: MatchingStatus;
  backToLobby: () => any;
}
export const Matching = (props: Props) => (
  <div>
    {props.matchingStatus === MatchingStatus.Joining && 'Joining'}
    {props.matchingStatus === MatchingStatus.Waiting && 'Matching'}
    {props.matchingStatus === MatchingStatus.Timeout && (
      <div>
        <p>Timed out</p>
        <p>
          <button onClick={props.backToLobby}>Back to lobby</button>
        </p>
      </div>
    )}
  </div>
);

export default connect(
  (state: State) => ({ matchingStatus: state.matching.status }),
  (dispatch: Dispatch) => ({
    backToLobby: () => dispatch({ type: BACK_TO_LOBBY }),
  }),
  (stateProps, dispatchProps) => ({ ...stateProps, ...dispatchProps }),
)(Matching);
