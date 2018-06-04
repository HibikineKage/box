import * as React from 'react';
import { connect } from 'react-redux';

interface Props { loadFiles: string[] }

export default class Loader extends React.Component<Props> {
  state = { isLoaded: false };
  componentDidMount() {
    PIXI.loader.add(this.props.loadFiles);
    PIXI.loader.onLoad.add(() => this.setState({ isLoaded: true }));
  }
  render() {
    return this.state.isLoaded ? this.props.children : (<div>Loading</div>);
  }
}
