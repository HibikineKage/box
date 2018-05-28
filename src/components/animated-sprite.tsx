import * as React from 'react';
import { withState } from 'recompose';
import {
  Sprite,
  Container,
  SpriteProperties,
  StageContext,
} from 'react-pixi-fiber';
import * as PropTypes from 'prop-types';

export interface Props extends SpriteProperties {
  animationSpeed?: number;
  textures: PIXI.Texture[];
}

export interface DefaultProps {
  animationSpeed: number;
}

type PropsWithDefaults = Props & DefaultProps;
export interface State {
  currentFrame: number;
}

export default class AnimatedSprite extends React.Component<Props, State> {
  state: State = { currentFrame: 0 };
  componentDidMount() {
    this.tickerCallback = deltaTime => {
      const { animationSpeed } = this.props as PropsWithDefaults;
      this.count +=
        animationSpeed * deltaTime / 60 / this.context.app.ticker.speed;
      const increaseCount = Math.floor(this.count);
      this.count -= increaseCount;
      this.setState({
        currentFrame:
          (this.state.currentFrame + increaseCount) %
          this.props.textures.length,
      });
    };
    this.context.app.ticker.add(this.tickerCallback);
  }
  componentWillUnmount() {
    if (this.tickerCallback !== undefined) {
      this.context.app.ticker.remove(this.tickerCallback);
    }
  }
  static get defaultProps(): DefaultProps {
    return { animationSpeed: 1 };
  }
  static get contextTypes() {
    return { app: PropTypes.object.isRequired };
  }
  tickerCallback?: (deltaTime: number) => void;
  context!: StageContext;
  count: number = 0;

  render() {
    return (
      <Sprite
        {...this.props}
        texture={this.props.textures[this.state.currentFrame]}
      />
    );
  }
}
