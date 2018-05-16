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

export default class AnimatedSprite extends React.Component<Props> {
  state: { currentFrame: number } = { currentFrame: 0 };
  count: number = 0;
  context!: StageContext;
  static get defaultProps(): DefaultProps {
    return { animationSpeed: 1 };
  }
  tickerCallback?: (deltaTime: number) => void;
  constructor(props: Props) {
    super(props);
  }
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
  static get contextTypes() {
    return { app: PropTypes.object.isRequired };
  }

  render() {
    return (
      <Sprite
        {...this.props}
        texture={this.props.textures[this.state.currentFrame]}
      />
    );
  }
}
