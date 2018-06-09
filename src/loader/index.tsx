import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

export class Loader extends React.Component<Props> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default connect()(Loader);
