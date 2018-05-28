import * as React from 'react';
import { connect } from 'react-redux';
export interface Props {
  children: React.ReactElement<any>;
}
const KeyHandler = (props: Props) => <div>{props.children}</div>;
export default connect(v => v)(KeyHandler);
