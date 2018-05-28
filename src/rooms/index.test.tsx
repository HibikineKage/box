import * as React from 'react';
test('rendering', () => {
  const tree = renderer.create(<Rooms />);
  expect(tree.toJSON()).toMatchSnapshot();
})