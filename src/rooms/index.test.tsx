import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Rooms from './index';

test('rendering', () => {
  const tree = renderer.create(<Rooms />);
  expect(tree.toJSON()).toMatchSnapshot();
});
