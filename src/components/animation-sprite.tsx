import * as React from 'react';
import { SpriteProperties, CustomPIXIComponent } from 'react-pixi-fiber';

interface Props extends SpriteProperties {
  animationSpeed?: number;
  textures: PIXI.Texture[];
}

export const behavior = {
  customDisplayObject: (props: Props) =>
    new PIXI.extras.AnimatedSprite(props.textures),
};

export default CustomPIXIComponent(behavior, 'AnimatedSprite');
