import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MatchingStatus } from './ducks';
import { Props, Matching } from './index';

describe('Matching returns ', () => {
  const mockBackToLobby = jest.fn();
  const props: Props = {
    matchingStatus: MatchingStatus.Default,
    backToLobby: mockBackToLobby,
  };
  test('matching scene', () => {
    const tree = renderer.create(<Matching {...props} />);
    expect(tree.toJSON).toMatchSnapshot();
  });
  test('timeout', () => {
    const tree = renderer.create(
      <Matching {...props} matchingStatus={MatchingStatus.Timeout} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
