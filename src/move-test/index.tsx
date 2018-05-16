import * as React from 'react';
import AnimationSprite from '../components/animation-sprite';
import * as h1 from './hibikine.png';
import * as h2 from './hibikineicon2.png';

const MoveTest = () => (
  <AnimationSprite
    textures={[PIXI.Texture.fromImage(h1), PIXI.Texture.fromImage(h2)]}
  />
);

export default MoveTest;
