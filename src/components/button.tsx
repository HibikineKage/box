import * as React from 'react';
import { Sprite, SpriteProperties } from 'react-pixi-fiber';

export interface Props extends SpriteProperties {
  textures: {
    default: PIXI.Texture;
    hover: PIXI.Texture;
    press: PIXI.Texture;
  };
  onClick: () => any;
}

enum ButtonStatus {
  Default = 'default',
  Hover = 'hover',
  Press = 'press',
}
interface State {
  buttonStatus: ButtonStatus;
}
export default class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { buttonStatus: ButtonStatus.Default };
  }
  state: State;

  render() {
    return (
      <Sprite
        {...this.props}
        interactive
        mouseover={() => {
          this.setState({ buttonStatus: ButtonStatus.Hover });
        }}
        mouseout={() => {
          this.setState({ buttonStatus: ButtonStatus.Default });
        }}
        mousedown={() => {
          this.setState({ buttonStatus: ButtonStatus.Press });
        }}
        mouseup={() => {
          this.setState({ buttonStatus: ButtonStatus.Hover });
          this.props.onClick();
        }}
        mouseupoutside={() => {
          this.setState({ buttonStatus: ButtonStatus.Default });
        }}
        texture={this.props.textures[this.state.buttonStatus]}
      />
    );
  }
}
