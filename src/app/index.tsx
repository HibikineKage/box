import * as React from 'react';
import { Stage, Sprite } from 'react-pixi-fiber';
import * as icon from './icon.png';
import * as hibikine from './hibikine.png';
import Button from '../components/button';

const textures = [icon, hibikine].map(i => PIXI.Texture.fromImage(i));
console.log(icon);
const App = () => (
  <Stage width={800} height={800} options={{ backgroundColor: 0xffffff }}>
    <Button
      width={100}
      height={100}
      textures={{
        default: textures[0],
        hover: textures[1],
        press: textures[1],
      }}
      onClick={() => {
        console.log('clicked!');
      }}
    />
  </Stage>
);

export default App;
